import { memo } from "react";

export const MainTitle = memo(() => (
  <div>
    <h1
      className="p-1 text-5xl font-bold tracking-tighter leading-tight text-white md:text-6xl lg:text-7xl"
      data-aos="fade-up"
      data-aos-delay="100">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#BBBBBB]">
        Frontend
      </span>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#77001A] to-[#AA0020] hover:from-[#AA0020] hover:to-[#77001A] transition-all duration-300 block">
        Developer
      </span>
    </h1>
  </div>
));