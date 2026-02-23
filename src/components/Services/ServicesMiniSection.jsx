import { memo } from "react";
import { SERVICES } from "../../constants/servicesData";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useContactModal } from "../../context/ContactModalContext";
import { GlassCard } from "../assets/GlassCard";

export const ServicesMiniSection = memo(() => {
  const { openModal } = useContactModal();
  return (
    <div className="w-full">
      <div className="space-y-6">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="relative flex gap-4 items-stretch"
              data-aos="fade-up">
              <div className="flex flex-col items-center flex-shrink-0 pt-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#77001A] text-xs font-semibold text-white shadow-md shadow-[#77001A]/40">
                  {index + 1}
                </div>
                {index < SERVICES.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-gradient-to-b from-[#77001A] via-[#77001A]/40 to-transparent" />
                )}
              </div>

              <GlassCard
                className="relative group flex-1 p-6 rounded-xl hover:-translate-y-1"
                overlayRoundedClass="rounded-xl">
                <div className="pointer-events-none absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Icon className="w-16 h-16 text-white" />
                </div>

                <div className="flex relative z-10 flex-col gap-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#77001A] to-[#4a0010] text-white shadow-lg shadow-[#77001A]/20 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[#77001A]/40">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-bold leading-tight text-white group-hover:text-[#ffccd5] transition-colors">
                        {service.title}
                      </h3>
                      {service.subtitle && (
                        <span className="inline-flex items-center px-3 py-1 text-[11px] font-medium uppercase tracking-wide rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:text-white group-hover:border-[#77001A]/50 transition-colors">
                          {service.subtitle}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <ul className="space-y-3">
                    {service.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex gap-3 items-start text-sm transition-colors text-gray-300/90 group-hover:text-gray-200">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#77001A] group-hover:text-[#AA0020] transition-colors" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 mt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs text-gray-400">
                      ¿Te encaja este enfoque? Hablemos de tu caso concreto.
                    </p>
                    <button
                      type="button"
                      onClick={openModal}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#77001A] to-[#AA0020] text-white shadow-md shadow-[#77001A]/40 hover:shadow-[#AA0020]/60 transform transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D6A]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                      <span>Me interesa este servicio</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </div>
          );
        })}
      </div>
    </div>
  );
});
