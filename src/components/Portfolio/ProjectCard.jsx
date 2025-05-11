import { memo } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectCard = memo(
  ({ id, title, description, image, liveUrl }) => {
    return (
      <div
        className="overflow-hidden  rounded-xl border backdrop-blur-sm  bg-gradient-to-r from-[#330008]/40 to-[#77001A]/40 border-white/10"
        data-aos="fade-up">
        <div className="">
          {/* Project Image */}
          <div className="overflow-hidden p-3 h-48 sm:h-56">
            <img
              src={image}
              loading="lazy"
              alt={`Imagen de ${title}`}
              className="object-top w-full h-full text-white rounded-t-lg transition-transform duration-500 transform hover:scale-110"
            />
          </div>

          {/* Project Content */}
          <div className="p-3 pt-0">
            <h3 className="mb-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BBBBBB]">
              {title}
            </h3>
            <p className="mb-4 text-gray-400 line-clamp-2">{description}</p>

            {/* Links */}
            <div className="flex gap-4 justify-between">
              {liveUrl && (
                <Link
                  to={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center text-gray-400 transition-colors group/link hover:text-[#77001A]">
                  <ExternalLink className="w-5 h-5" />
                  <span className="text-sm">Demo</span>
                </Link>
              )}
              <Link
                to={`/projects/${id}`}
                className="px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg bg-black/30 backdrop-blur-sm border border-[#77001A]/20 text-white hover:bg-[#77001A]/10 hover:border-[#77001A]/40 shadow-black/30 hover:shadow-[#77001A]/20">
                <span className="z-10 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
                  Details
                </span>
                <ArrowRight className="z-10 w-4 h-4 text-gray-200 transition-all duration-300 transform group-hover:rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
