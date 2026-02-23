import React from "react";

export const GlassCard = (props) => {
  const {
    as,
    children,
    className = "",
    overlayRoundedClass = "",
    hover = true,
    ...rest
  } = props;

  const Component = as || "div";
  const baseClasses =
    "relative bg-[#0A0A0A]/70 backdrop-blur-sm border border-[#77001A]/20 group overflow-hidden transition-all duration-300 transform";
  const hoverClasses = hover
    ? " hover:border-[#FF4D6A]/70 hover:shadow-lg hover:shadow-[#77001A]/50 hover:-translate-y-1"
    : "";

  return (
    <Component
      className={`${baseClasses}${hoverClasses} ${className}`}
      {...rest}>
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r from-[#330008] to-[#77001A] blur opacity-20 group-hover:opacity-40 transition duration-300 ${overlayRoundedClass}`}
      />
      <div className="relative">{children}</div>
    </Component>
  );
};
