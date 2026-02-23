import { memo } from "react";
import SectionTitle from "../components/assets/SectionTitle";
import { PROCESS_STEPS } from "../constants/howIWorkData";
import { Link } from "react-router-dom";
import { Search, ClipboardList, Hammer, Rocket } from "lucide-react";
import { GlassCard } from "../components/assets/GlassCard";

const HowIWork = () => {
  const ICONS = {
    discover: Search,
    plan: ClipboardList,
    build: Hammer,
    launch: Rocket,
  };

  return (
    <section id="HowIWork" className="py-20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <SectionTitle
          title="Cómo trabajo"
          description="Un vistazo rápido a mi forma de trabajar; el detalle completo está en la página dedicada."
        />

        <div className="mt-10">
          <div className="hidden relative justify-between items-start md:flex">
            <div className="absolute left-0 right-0 top-6 h-0.5 bg-white/10" />
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = ICONS[step.id] || Search;
              return (
                <div
                  key={step.id}
                  className="flex relative z-10 flex-col gap-2 items-center text-center group"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}>
                  <div className="relative top-6 -translate-y-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-[#77001A] to-[#4a0010] border border-[#77001A]/60 text-white flex items-center justify-center shadow-lg shadow-[#77001A]/30 ring-1 ring-white/5 transition-transform duration-300 group-hover:scale-105">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="max-w-[180px] text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BBBBBB]">
                    {step.title.replace(/^\d+\.?\s*/, "")}
                  </div>
                  <div className="max-w-[220px] text-sm text-gray-400 line-clamp-2">
                    {step.description}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-6 md:hidden">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = ICONS[step.id] || Search;
              return (
                <div
                  key={step.id}
                  className="flex gap-3 items-start group"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}>
                  <div className="flex-shrink-0">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#330008]/70 to-[#77001A]/40 border border-[#77001A]/60 text-white flex items-center justify-center shadow-md shadow-[#77001A]/30 ring-1 ring-white/5 transition-transform duration-300 group-hover:scale-105">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BBBBBB]">
                      {step.title.replace(/^\d+\.?\s*/, "")}
                    </div>
                    <div className="mt-1 text-sm text-gray-400">
                      {step.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10" data-aos="fade-up">
          <GlassCard
            className="p-6 rounded-2xl md:p-8"
            overlayRoundedClass="rounded-2xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4 items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#77001A] to-[#4a0010] text-white shadow-lg shadow-[#77001A]/20 ring-1 ring-white/10">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BBBBBB]">
                    Ver el proceso completo
                  </h4>
                  <p className="text-sm text-gray-400">
                    Explora el caso de estudio con ejemplos reales.
                  </p>
                </div>
              </div>
              <Link
                to="/como-trabajo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-[#77001A] to-[#AA0020] hover:from-[#AA0020] hover:to-[#77001A] shadow-lg shadow-[#77001A]/30 transform transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="z-10 text-sm text-gray-100">Ver proceso</span>
                <span
                  aria-hidden="true"
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default memo(HowIWork);
