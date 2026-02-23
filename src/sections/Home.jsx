import React, { useEffect, memo, useState, useRef, Suspense } from "react";
const DotLottieReactLazy = React.lazy(() =>
  import("@lottiefiles/dotlottie-react").then((m) => ({
    default: m.DotLottieReact,
  })),
);
import { useTypingEffect } from "../hooks/useTypingEffect";
import { initializeAOS } from "../utils/animationUtils";
import { LOTTIE_OPTIONS } from "../constants/homeData";
import { HomeContent } from "../components/Home/HomeContent";

const Home = () => {
  const { text } = useTypingEffect();
  // eslint-disable-next-line no-unused-vars
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);

  // Initialize AOS
  useEffect(() => {
    const cleanup = initializeAOS();
    return cleanup;
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Preferencias de movimiento reducido
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReduceMotion(media.matches);
    handler();
    media.addEventListener?.("change", handler);
    return () => media.removeEventListener?.("change", handler);
  }, []);

  // Layout responsive: detectar escritorio
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Renderizar Lottie solo cuando entra en el viewport
  const animRef = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!isDesktop || !animRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { root: null, threshold: 0.1 },
    );
    observer.observe(animRef.current);
    return () => observer.disconnect();
  }, [isDesktop]);

  return (
    <section
      id="Home"
      className="flex justify-center items-center py-24 md:py-28">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid gap-12 items-center lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <HomeContent text={text} />
          </div>

          {isDesktop && (
            <div
              ref={animRef}
              className="flex justify-center items-center w-full lg:col-span-5 lg:justify-end"
              data-aos="fade-left"
              data-aos-delay="600">
              {reduceMotion ? (
                <img
                  src="/Image.webp"
                  alt="Static illustration"
                  className="max-w-full h-auto"
                  loading="lazy"
                />
              ) : inView ? (
                <Suspense
                  fallback={
                    <img
                      src="/Image.webp"
                      alt="Loading illustration"
                      className="max-w-full h-auto"
                      loading="lazy"
                    />
                  }>
                  <DotLottieReactLazy {...LOTTIE_OPTIONS} />
                </Suspense>
              ) : (
                <img
                  src="/Image.webp"
                  alt="Illustration"
                  className="max-w-full h-auto"
                  loading="lazy"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Home);
