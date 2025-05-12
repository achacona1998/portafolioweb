import React from "react";
import { Download, Code, FileArchive } from "lucide-react";
import { CTAButton } from "../assets/CTAButton";
import { MainTitle } from "./MainTitle";
import { Link } from "react-router-dom";

const AboutInfo = () => {
  return (
    <div className="flex flex-col gap-8 justify-between mb-12 w-full md:flex-row md:gap-0">
      <div className="flex flex-col gap-5 order-2 md:order-1 w-full md:w-[60%] lg:w-[55%]">
        <MainTitle name="Ariel Chacon Artola" />
        <p
          className="max-w-xl text-sm font-light leading-relaxed text-justify text-gray-400 md:text-base"
          data-aos="fade-up"
          data-aos-delay="300">
          I am a software engineer, specializing in Python, Java, JavaScript,
          HTML, CSS, and frameworks and libraries such as React, Django, Astro,
          and TailwindCSS. I have led projects that have optimized business
          processes and improved user experience by 30%. I am seeking
          opportunities to join an innovative team where I can apply my skills
          and contribute to the development of advanced technological solutions.
        </p>

        <div
          className="flex flex-col-reverse gap-3 justify-start w-full sm:flex-row"
          data-aos="fade-up"
          data-aos-delay="400">
          <details className="relative">
            <summary className="flex gap-2 items-center px-6 py-3 font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 bg-gradient-to-r from-[#77001A] to-[#AA0020] text-white hover:from-[#AA0020] hover:to-[#77001A] shadow-[#77001A]/30 list-none cursor-pointer">
              <FileArchive className="z-10 w-4 h-4 text-gray-200 transition-all duration-300 transform group-hover:translate-x-1" />
              <span className="z-10 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
                Resume
              </span>
            </summary>
            <div className="absolute left-0 top-full z-10 p-2 mt-1 min-h-8 bg-dark">
              <div className="flex flex-row gap-2">
                <Link
                  to="/CV/CV_(en).docx"
                  rel="noopener"
                  target="_blank"
                  className="cursor-pointer px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg bg-black/30 backdrop-blur-sm border border-[#77001A]/20 text-white hover:bg-[#77001A]/10 hover:border-[#77001A]/40 shadow-black/30 hover:shadow-[#77001A]/20">
                  <span className="z-10 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
                    English
                  </span>
                  <Download className="z-10 w-4 h-4 text-gray-200 transition-all duration-300 transform group-hover:rotate-45" />
                </Link>
                <Link
                  to="/CV/CV_(es).docx"
                  rel="noopener"
                  target="_blank"
                  className="cursor-pointer px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg bg-black/30 backdrop-blur-sm border border-[#77001A]/20 text-white hover:bg-[#77001A]/10 hover:border-[#77001A]/40 shadow-black/30 hover:shadow-[#77001A]/20">
                  <span className="z-10 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
                    Spanish
                  </span>
                  <Download className="z-10 w-4 h-4 text-gray-200 transition-all duration-300 transform group-hover:rotate-45" />
                </Link>
              </div>
            </div>
          </details>

          <CTAButton href="Portfolio" text="View Projects" icon={Code} />
        </div>
      </div>

      <div className="w-64 h-64 md:w-80 md:h-80 mx-auto md:mx-0 order-1 md:order-2 rounded-full shadow-2xl shadow-[#77001A]/50 hover:shadow-[#77001A] overflow-hidden relative">
        <img
          src="/Foto.avif"
          alt="Foto de Ariel Chacon Artola"
          loading="lazy"
          className="w-[90%] h-[110%] md:w-60 md:h-[300px] absolute m-auto right-0 left-0 sm:-bottom-1 -bottom-11"
        />
      </div>
    </div>
  );
};

export default AboutInfo;
