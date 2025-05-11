import { memo } from "react";
import { Code2 } from "lucide-react";
import { TECHNOLOGIES_TITLE } from "../../constants/projectDetailData";

export const TechnologiesList = memo(({ technologies }) => {
  if (!technologies || technologies.length === 0) return null;
  
  return (
    <div className="mb-8">
      <div className="flex gap-3 items-center mb-4">
        <Code2 className="w-5 h-5" />
        <h2 className="text-xl font-semibold text-white">
          {TECHNOLOGIES_TITLE}
        </h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-lg bg-[#77001A]/30 hover:bg-[#77001A]/10 text-sm text-gray-200 border border-white/10 hover:border-[#77001A] transition-colors duration-300">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
});