import React, { useEffect, memo, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
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
            className="w-full py-[10%] sm:py-0 order-2 mt-8 lg:mt-0 flex items-center lg:justify-end justify-center"
            data-aos="fade-left"
            data-aos-delay="600">
            <DotLottieReact {...LOTTIE_OPTIONS} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Home);
