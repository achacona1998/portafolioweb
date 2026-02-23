import React from "react";

// eslint-disable-next-line no-unused-vars
const IconButton = ({ Icon }) => (
  <div className="relative transition-transform duration-300 group hover:scale-110" aria-hidden="true">
    <div className="absolute -inset-2 bg-gradient-to-r from-[#77001A] to-[#AA0020] rounded-full opacity-30 blur transition duration-300 group-hover:opacity-75" />
    <div className="relative p-2 rounded-full border backdrop-blur-sm sm:p-3 bg-black/50 border-white/10">
      <Icon className="w-5 h-5 text-white sm:w-6 sm:h-6 md:w-8 md:h-8" />
    </div>
  </div>
);

export default IconButton;