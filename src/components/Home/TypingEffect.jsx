import { memo } from "react";

export const TypingEffect = memo(({ text }) => (
  <div
    className="flex items-center h-8"
    data-aos="fade-up"
    data-aos-delay="800">
    <span className="text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 md:text-2xl">
      {text}
    </span>
    <span className="w-[3px] h-6 bg-gradient-to-t from-[#77001A] to-[#AA0020] ml-1 animate-blink"></span>
  </div>
));
