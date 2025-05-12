import { memo } from "react";
import { ExternalLink, Github } from "lucide-react";
import { CTAButton } from "../assets/CTAButton";
import { LIVE_DEMO_TEXT, GITHUB_TEXT } from "../../constants/projectDetailData";
import { Link } from "react-router-dom";

export const ProjectLinks = memo(({ liveUrl, githubUrl }) => (
  <div className="flex flex-row gap-4 mb-8">
    {liveUrl && (
      <Link
        to={liveUrl}
        rel="noopener"
        target="_blank"
        className="cursor-pointer px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg bg-black/30 backdrop-blur-sm border border-[#77001A]/20 text-white hover:bg-[#77001A]/10 hover:border-[#77001A]/40 shadow-black/30 hover:shadow-[#77001A]/20">
        <span className="z-10 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
          {LIVE_DEMO_TEXT}
        </span>
        <ExternalLink className="z-10 w-4 h-4 text-gray-200 transition-all duration-300 transform group-hover:rotate-45" />
      </Link>
    )}
    {githubUrl && (
      <Link
        to={githubUrl}
        rel="noopener"
        target="_blank"
        className="cursor-pointer px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg bg-black/30 backdrop-blur-sm border border-[#77001A]/20 text-white hover:bg-[#77001A]/10 hover:border-[#77001A]/40 shadow-black/30 hover:shadow-[#77001A]/20">
        <span className="z-10 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
          {GITHUB_TEXT}
        </span>
        <Github className="z-10 w-4 h-4 text-gray-200 transition-all duration-300 transform group-hover:rotate-45" />
      </Link>
    )}
  </div>
));
