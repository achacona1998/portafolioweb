import { memo } from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectsGrid = memo(({ projects, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
      {projects.length > 0 &&
        projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
    </div>
  );
});
