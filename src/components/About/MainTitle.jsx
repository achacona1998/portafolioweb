import { memo } from "react";

export const MainTitle = memo(({ name }) => (
  <div>
    <h2
      className="text-3xl font-bold tracking-tighter leading-tight text-white md:text-6xl lg:text-4xl"
      data-aos="fade-up"
      data-aos-delay="100">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#77001A] to-[#AA0020] ">
        Hello, I'm
      </span>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#BBBBBB] block">
        {name}
      </span>
    </h2>
  </div>
));
