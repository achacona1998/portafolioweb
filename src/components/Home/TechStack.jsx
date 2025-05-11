import { memo } from "react";

export const TechStack = memo(({ tech }) => (
  <div className="flex gap-2" data-aos="fade-up" data-aos-delay="400">
    <div className="px-3 py-1 text-xs rounded-full bg-black/30 backdrop-blur-sm border border-[#77001A]/20 text-gray-300 hover:bg-[#77001A]/10 hover:border-[#77001A]/40 hover:text-white transition-all duration-300 shadow-sm shadow-black/50 hover:shadow-[#77001A]/20 hover:transform hover:scale-105">
      {tech}
    </div>
  </div>
));