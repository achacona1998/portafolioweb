import React, { useEffect, memo, useState, useRef, Suspense } from "react";
const DotLottieReactLazy = React.lazy(() =>
  import("@lottiefiles/dotlottie-react").then((m) => ({
    default: m.DotLottieReact,
  }))
);
import { useTypingEffect } from "../hooks/useTypingEffect";
import { initializeAOS } from "../utils/animationUtils";
import { LOTTIE_OPTIONS } from "../constants/homeData";
import { HomeContent } from "../components/Home/HomeContent";

const Home = () => {
  const { text } = useTypingEffect();
  // eslint-disable-next-line no-unused-vars
  const [isLoaded, setIsLoaded] = useState(false);

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

  // Renderizar Lottie solo cuando entra en el viewport
  const animRef = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!animRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { root: null, threshold: 0.1 }
    );
    observer.observe(animRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="Home"
      className="flex justify-center items-center py-44 h-full md:py-28 md:min-h-scre[400px]">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col gap-0 justify-center items-center h-screen lg:flex-row md:justify-between sm:gap-12 lg:gap-20">
          {/* Left Column */}
          <HomeContent text={text} />

          {/* Right Column - Optimized Lottie Animation */}
          <div
            ref={animRef}
            className="w-full py-[10%] sm:py-0 order-2 mt-8 lg:mt-0 flex items-center lg:justify-end justify-center"
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
                    alt="Loading animation"
                    className="max-w-full h-auto"
                    loading="lazy"
                  />
                }>
                <DotLottieReactLazy {...LOTTIE_OPTIONS} />
              </Suspense>
            ) : (
              <img
                src="/Image.webp"
                alt="Animation placeholder"
                className="max-w-full h-auto"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Home);
