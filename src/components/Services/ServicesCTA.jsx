import { memo } from "react";
import { Mail } from "lucide-react";
import { GlassCard } from "../assets/GlassCard";
import { useContactModal } from "../../context/ContactModalContext";

export const ServicesCTA = memo(() => {
  const { openModal } = useContactModal();

  return (
    <GlassCard
      as="section"
      overlayRoundedClass="rounded-2xl"
      className="p-6 mx-auto mt-12 rounded-2xl md:p-8"
      data-aos="fade-up">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#77001A] to-[#4a0010] text-white shadow-lg shadow-[#77001A]/20 ring-1 ring-white/10">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BBBBBB]">
              ¿Tienes un proyecto en mente?
            </h4>
            <p className="text-sm text-gray-400">
              Cuéntame qué necesitas y te propongo la mejor solución para tu
              web.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-[#77001A] to-[#AA0020] hover:from-[#AA0020] hover:to-[#77001A] shadow-lg shadow-[#77001A]/30 transform transition-all duration-300 hover:scale-105 active:scale-95 group/btn">
          <span className="z-10 text-sm text-gray-100">Hablemos ahora</span>
          <span
            aria-hidden="true"
            className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1">
            →
          </span>
        </button>
      </div>
    </GlassCard>
  );
});
