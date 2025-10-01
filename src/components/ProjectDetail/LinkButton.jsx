import { memo } from "react";
import { Link } from "react-router-dom";

export const LinkButton = memo(({ url, text, icon: Icon, className = "" }) => {
  if (!url) return null;

  return (
    <Link
      to={url}
      rel="noopener"
      target="_blank"
      className={`cursor-pointer px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg bg-black/30 backdrop-blur-sm border border-[#77001A]/50 text-white hover:bg-[#77001A]/10 hover:border-[#77001A]/40 shadow-black/30 hover:shadow-[#77001A]/20 ${className}`}
    >
      <span className="z-10 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
        {text}
      </span>
      {Icon && (
        <Icon className="z-10 w-4 h-4 text-gray-200 transition-all duration-300 transform group-hover:rotate-45" />
      )}
    </Link>
  );
});

LinkButton.displayName = "LinkButton";