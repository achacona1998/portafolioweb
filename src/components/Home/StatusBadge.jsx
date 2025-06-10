import { memo } from "react";

export const StatusBadge = memo(() => (
  <div
    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-black/30 border border-[#77001A]/20 text-white backdrop-blur-sm shadow-md shadow-[#77001A]/5 hover:shadow-[#77001A]/20 transition-all duration-300"
    data-aos="fade-down">
    <span className="mr-2 w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
    <span>Disponible para trabajar</span>
  </div>
));