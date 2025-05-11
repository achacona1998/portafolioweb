import { memo } from "react";
import { extractProjectData } from "../utils/projectUtils";
import { ProjectNotFound } from "../components/ProjectDetail/ProjectNotFound";
import { BackButton } from "../components/ProjectDetail/BackButton";
import { ProjectHeader } from "../components/ProjectDetail/ProjectHeader";
import { ProjectImage } from "../components/ProjectDetail/ProjectImage";
import { TechnologiesList } from "../components/ProjectDetail/TechnologiesList";
import { ProjectLinks } from "../components/ProjectDetail/ProjectLinks";
import { useNavigate } from "react-router-dom";

const ProjectDetail = ({ project }) => {
  const navigate = useNavigate();
  if (!project) {
    return <ProjectNotFound />;
  }

  const { title, description, image, technologies, liveUrl, githubUrl } =
    extractProjectData(project);

  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <div className="container px-4 pb-4 mx-auto text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Back Button and Breadcrumb */}
        <BackButton projectTitle={title} onclick={handleBackButtonClick} />

        <div className="flex flex-wrap-reverse gap-2 mb-5">
          {/* Project Header */}
          <ProjectHeader title={title} description={description} />

          {/* Project Image */}
          <ProjectImage image={image} title={title} />
        </div>

        <div className="flex flex-wrap-reverse justify-between items-center">
          {/* Technologies */}
          <TechnologiesList technologies={technologies} />

          {/* Links */}
          <ProjectLinks liveUrl={liveUrl} githubUrl={githubUrl} />
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectDetail);
