import React from "react";

const BackgroundEffect = () => (
  <div className="overflow-hidden absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r blur-3xl animate-pulse from-[#330008]/20 to-[#77001A]/20" />
    <div className="absolute inset-0 bg-gradient-to-tr via-transparent blur-2xl from-[#330008]/10 to-[#77001A]/10 animate-float" />
  </div>
);

export default BackgroundEffect;