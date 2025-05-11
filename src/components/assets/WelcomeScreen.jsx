import React, { useEffect, memo } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Github, Globe, User } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import components
import TypewriterEffect from "../welcome/TypewriterEffect";
import BackgroundEffect from "../welcome/BackgroundEffect";
import IconButton from "../welcome/IconButton";

// Import hooks and utilities
import { useLoadingProgress } from "../../hooks/useLoadingProgress";
import { hideElement, showElement } from "../../utils/domUtils";
import {
  WELCOME_CONTAINER_VARIANTS,
  WELCOME_CHILD_VARIANTS,
} from "../../constants/animationVariants";
import { Link } from "react-router-dom";

const WelcomeScreen = ({ onComplete }) => {
  const { progress, isComplete, isHidden } = useLoadingProgress(
    3000,
    onComplete
  );

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      once: true,
      offset: 10,
    });

    // Hide main content initially
    hideElement("main-content");

    // Show main content when complete
    if (isHidden) {
      showElement("main-content");
    }
  }, [isHidden]);

  // If we should hide it completely, don't render anything
  if (isHidden) return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="flex fixed inset-0 z-50 justify-center items-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={WELCOME_CONTAINER_VARIANTS}>
          <BackgroundEffect />

          <div className="flex relative justify-center items-center px-4 min-h-screen">
            <div className="mx-auto w-full max-w-4xl">
              {/* Icons */}
              <motion.div
                className="flex gap-3 justify-center mb-6 sm:gap-4 md:gap-8 sm:mb-8 md:mb-12"
                variants={WELCOME_CHILD_VARIANTS}>
                {[Code2, User, Github].map((Icon, index) => (
                  <div
                    key={index}
                    data-aos="fade-down"
                    data-aos-delay={index * 200}>
                    <IconButton Icon={Icon} />
                  </div>
                ))}
              </motion.div>

              {/* Welcome Text */}
              <motion.div
                className="mb-6 text-center sm:mb-8 md:mb-12"
                variants={WELCOME_CHILD_VARIANTS}>
                <h1 className="space-y-2 text-3xl font-bold sm:text-4xl md:text-6xl sm:space-y-4">
                  <div className="mb-2 sm:mb-4">
                    <span
                      data-aos="fade-right"
                      data-aos-delay="200"
                      className="inline-block px-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-300">
                      Welcome
                    </span>{" "}
                    <span
                      data-aos="fade-right"
                      data-aos-delay="400"
                      className="inline-block px-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-300">
                      To
                    </span>{" "}
                    <span
                      data-aos="fade-right"
                      data-aos-delay="600"
                      className="inline-block px-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-300">
                      My
                    </span>
                  </div>
                  <div>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="800"
                      className="inline-block px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#77001A] to-[#AA0020]">
                      Portfolio
                    </span>{" "}
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      className="inline-block px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#77001A] to-[#AA0020]">
                      Website
                    </span>
                  </div>
                </h1>
              </motion.div>

              {/* Website Link */}
              <motion.div
                className="text-center"
                variants={WELCOME_CHILD_VARIANTS}
                data-aos="fade-up"
                data-aos-delay="1200">
                <Link
                  to="https://github.com/achacona1998"
                  className="inline-flex relative gap-2 items-center px-4 py-2 rounded-full transition-transform duration-300 sm:px-6 sm:py-3 group hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-gradient-to-r rounded-full blur-md transition-all duration-300 from-[#330008]/40 to-[#77001A]/40 group-hover:blur-lg" />
                  <div className="flex relative gap-2 items-center text-lg sm:text-xl md:text-2xl">
                    <Globe className="w-4 h-4 text-[#77001A] sm:w-5 sm:h-5" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#77001A] to-[#AA0020]">
                      <TypewriterEffect text="github.com/achacona1998" />
                    </span>
                  </div>
                </Link>
              </motion.div>

              <div className="mx-auto mt-8 w-64 md:w-80">
                <div className="overflow-hidden relative h-3 rounded-full bg-white/10">
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#77001A] to-[#AA0020] rounded-full transition-all duration-100 ease-out"
                    style={{ width: `${progress}%` }}></div>
                </div>
                <p className="mt-3 text-sm font-medium text-gray-300">{`${Math.min(
                  100,
                  Math.floor(progress)
                )}%`}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(WelcomeScreen);
