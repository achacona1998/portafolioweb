import { memo, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ChevronDown, ChevronUp } from "lucide-react";

export const ProjectsGrid = memo(({ projects, isVisible }) => {
  const [showAll, setShowAll] = useState(false);

  if (!isVisible) return null;

  const INITIAL_PROJECTS_COUNT = 6;
  const displayedProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_PROJECTS_COUNT);
  const hasMoreProjects = projects.length > INITIAL_PROJECTS_COUNT;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
        {displayedProjects.length > 0 &&
          displayedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
      </div>

      {hasMoreProjects && (
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleShowAll}
            className="group cursor-pointer px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg bg-gradient-to-r from-[#77001A] to-[#AA0020] text-white hover:from-[#AA0020] hover:to-[#77001A] shadow-[#77001A]/30">
            <span className="z-10 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
              {showAll ? "Ver menos" : "Ver más"}
            </span>
            {showAll ? (
              <ChevronUp className="z-10 w-4 h-4 text-gray-200 transition-all duration-300 transform group-hover:-translate-y-1" />
            ) : (
              <ChevronDown className="z-10 w-4 h-4 text-gray-200 transition-all duration-300 transform group-hover:translate-y-1" />
            )}
          </button>
        </div>
      )}
    </div>
  );
});
