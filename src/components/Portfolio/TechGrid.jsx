import { memo } from "react";

export const TechGrid = memo(({ skills, isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="grid grid-cols-3 gap-2 place-items-center p-4 md:grid-cols-4 lg:grid-cols-6">
      {skills.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 justify-center items-center p-2 w-auto h-auto text-white rounded-md bg-[#6c1528]/20 hover:bg-[#ad3a53]/50 backdrop-blur-sm border border-[#77001A]/20 hover:border-[#77001A]/40 transition-all duration-300 sm:h-auto sm:w-24"
          data-aos="fade-up">
          <tech.icon className="w-16 h-16" />
          <span className="text-xs truncate sm:text-sm">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
});