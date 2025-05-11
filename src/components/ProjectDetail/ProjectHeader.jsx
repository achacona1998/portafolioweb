import { memo } from "react";

export const ProjectHeader = memo(({ title, description }) => (
  <div>
    <h1 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BBBBBB] sm:text-3xl">
      {title}
    </h1>
    <div className="w-12 bg-[#77001A] h-1 my-5" />
    <p className="leading-relaxed text-justify text-gray-300 whitespace-pre-line">
      {description}
    </p>
  </div>
));