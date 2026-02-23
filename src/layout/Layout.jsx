import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import WelcomeScreen from "../components/assets/WelcomeScreen";
import { ContactModalProvider } from "../context/ContactModalContext";
import { ContactModal } from "../components/Contact/ContactModal";

// Create a helmet context outside the component
const helmetContext = {};

export default function Layout({ title, description, children, keywords }) {
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 10,
    });

    // Update document title directly as a fallback
    document.title = title || "Portfolio - Desarrollador Frontend | Acha Dev";

    // Hide welcome screen after content is loaded
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000); // Slightly longer than WelcomeScreen's minimum duration

    return () => clearTimeout(timer);
  }, [title]);

  const defaultDescription =
    "Portfolio de desarrollo frontend donde muestro proyectos, casos de estudio y cómo trabajo orientado a resultados de negocio.";
  const defaultKeywords =
    "desarrollador frontend, desarrollo web, React, JavaScript, portfolio, diseño web, UI/UX, responsive design, Tailwind CSS, desarrollo orientado a negocio";

  const baseUrl = "https://portafolioweb-mu.vercel.app";
  const canonicalUrl = `${baseUrl}${location.pathname}${location.search}`;

  return (
    <HelmetProvider context={helmetContext}>
      <ContactModalProvider>
        <Helmet>
          <title>{title || "Portfolio - Desarrollador Frontend | Acha Dev"}</title>
          <meta
            name="description"
            content={description || defaultDescription}
          />
          <meta 
            name="keywords" 
            content={keywords || defaultKeywords} 
          />
          <meta name="author" content="Acha Dev" />
          <link rel="canonical" href={canonicalUrl} />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={canonicalUrl} />
          <meta
            property="og:title"
            content={title || "Portfolio - Desarrollador Frontend"}
          />
          <meta
            property="og:description"
            content={description || defaultDescription}
          />
          <meta property="og:image" content="/Image.webp" />
          <meta property="og:site_name" content="Acha Dev Portfolio" />
          <meta property="og:locale" content="es_ES" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={canonicalUrl} />
          <meta
            name="twitter:title"
            content={title || "Portfolio - Desarrollador Frontend"}
          />
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
