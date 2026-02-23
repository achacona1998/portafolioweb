import React from "react";
import { Download, Code, FileArchive, ChevronDown } from "lucide-react";
import { CTAButton } from "../assets/CTAButton";
import { MainTitle } from "./MainTitle";
import { Link } from "react-router-dom";

const AboutInfo = () => {
  return (
    <div className="flex flex-col gap-8 justify-between mb-12 w-full md:flex-row md:gap-0 md:items-stretch">
      <div className="flex flex-col gap-6 order-2 md:order-1 w-full md:w-[60%] lg:w-[55%] md:h-full ">
        <MainTitle name="Ariel Chacon Artola" />
        <p
          className="max-w-xl text-base font-light leading-relaxed text-justify text-gray-300 md:text-lg"
          data-aos="fade-up"
          data-aos-delay="300">
          Soy desarrollador especializado en crear plataformas SaaS, productos
          digitales y experiencias e-commerce de alto rendimiento. Mi enfoque
          combina ingeniería moderna con objetivos de negocio: rendimiento real,
          conversión y mantenibilidad.
        </p>
        <ul
          className="space-y-2 text-base text-gray-200 md:text-lg"
          data-aos="fade-up"
          data-aos-delay="350">
          <li>
            • Plataformas SaaS y herramientas internas listas para escalar.
          </li>
          <li>
            • E-commerce moderno enfocado en conversión y experiencia de compra.
          </li>
          <li>
            • Dashboards y productos digitales alineados con métricas de
            negocio.
          </li>
        </ul>
        <div
          className="flex flex-col-reverse gap-3 justify-start w-full sm:flex-row"
          data-aos="fade-up"
          data-aos-delay="400">
          <details className="relative">
            <summary className="flex gap-2 items-center px-6 py-3 font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 bg-gradient-to-r from-[#77001A] to-[#AA0020] text-white hover:from-[#AA0020] hover:to-[#77001A] shadow-[#77001A]/30 list-none cursor-pointer">
              <FileArchive className="z-10 w-4 h-4 text-gray-200 transition-all duration-300 transform" />
              <span className="z-10 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
                Currículum
              </span>
              <ChevronDown className="z-10 w-4 h-4 text-gray-200 transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="absolute left-0 top-full z-10 p-2 mt-2 min-h-8 rounded-lg border border-[#77001A]/40  shadow-xl bg-[#77001A]/30">
              <div className="flex flex-row gap-2">
                <Link
                  to="/CV/CV(en).pdf"
                  rel="noopener"
                  target="_blank"
                  className="cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md bg-black/40 backdrop-blur-sm border border-[#77001A]/30 text-white hover:bg-[#77001A]/10 hover:border-[#77001A]/60 shadow-black/30 hover:shadow-[#77001A]/30">
                  <span className="z-10 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
                    Inglés
                  </span>
                  <Download className="z-10 w-4 h-4 text-gray-200 transition-all duration-300 transform" />
                </Link>
                <Link
                  to="/CV/CV(es).pdf"
                  rel="noopener"
                  target="_blank"
                  className="cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md bg-black/40 backdrop-blur-sm border border-[#77001A]/30 text-white hover:bg-[#77001A]/10 hover:border-[#77001A]/60 shadow-black/30 hover:shadow-[#77001A]/30">
                  <span className="z-10 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
                    Español
                  </span>
                  <Download className="z-10 w-4 h-4 text-gray-200 transition-all duration-300 transform" />
                </Link>
              </div>
            </div>
          </details>

          <CTAButton href="Portfolio" text="Ver Proyectos" icon={Code} />
        </div>
      </div>

      <div className="flex order-1 justify-center  md:order-2 md:justify-end w-full md:w-[40%] lg:w-[45%]">
        <div className="relative p-[3px] rounded-full border border-[#77001A]/60 shadow-2xl shadow-[#77001A]/40 hover:shadow-[#77001A]/70 transition-all duration-300 transform hover:scale-[1.03] md:h-full flex items-center justify-center  ">
          <div className="flex overflow-hidden justify-center items-center mx-auto rounded-full bg-black/60 w-80 h-80 md:h-[450px] md:w-[450px] ">
            <img
              src="/Foto.avif"
              alt="Foto de Ariel Chacon Artola"
              loading="lazy"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
