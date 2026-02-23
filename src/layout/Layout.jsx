import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import WelcomeScreen from "../components/assets/WelcomeScreen";
import { ContactModalProvider } from "../context/ContactModalContext";
import { ContactModal } from "../components/Contact/ContactModal";

// Create a helmet context outside the component
const helmetContext = {};

export default function Layout({ title, description, children, keywords }) {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 10,
    });

    // Update document title directly as a fallback
    document.title = title || "Portfolio - Frontend Developer | Acha Dev";

    // Hide welcome screen after content is loaded
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000); // Slightly longer than WelcomeScreen's minimum duration

    return () => clearTimeout(timer);
  }, [title]);

  const defaultDescription =
    "Portfolio website showcasing my work and skills as a frontend developer";
  const defaultKeywords =
    "frontend developer, web developer, React developer, JavaScript, portfolio, web design, UI/UX, responsive design, Tailwind CSS, developer portfolio";

  return (
    <HelmetProvider context={helmetContext}>
      <ContactModalProvider>
        <Helmet>
          <title>{title || "Portfolio - Frontend Developer | Acha Dev"}</title>
          <meta
            name="description"
            content={description || defaultDescription}
          />
          <meta 
            name="keywords" 
            content={keywords || defaultKeywords} 
          />
          <meta name="author" content="Acha Dev" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://achadevportfolioweb.netlify.app/"
          />
          <meta property="og:title" content={title || "Portfolio - Frontend Developer"} />
          <meta
            property="og:description"
            content={description || defaultDescription}
          />
          <meta property="og:image" content="/Image.webp" />
          <meta property="og:site_name" content="Acha Dev Portfolio" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:url"
            content="https://achadevportfolioweb.netlify.app/"
          />
          <meta name="twitter:title" content={title || "Portfolio - Frontend Developer"} />
          <meta
            name="twitter:description"
            content={description || defaultDescription}
          />
          <meta name="twitter:image" content="/Image.webp" />
          <meta name="twitter:creator" content="@achadev" />
        </Helmet>

        {showWelcome && (
          <WelcomeScreen onComplete={() => setShowWelcome(false)} />
        )}

        <div
          id="main-content"
          className={`min-h-screen ${
            showWelcome
              ? "opacity-0"
              : "opacity-100 transition-opacity duration-500"
          }`}>
          {children}
        </div>
        <ContactModal />
      </ContactModalProvider>
    </HelmetProvider>
  );
}
