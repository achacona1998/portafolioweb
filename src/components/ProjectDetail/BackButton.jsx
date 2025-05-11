import { memo } from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import {
  BACK_TEXT,
  PROJECTS_BREADCRUMB,
} from "../../constants/projectDetailData";

export const BackButton = memo(({ projectTitle, onclick }) => (
  <div className="flex gap-5 items-center mb-8">
    <button
      onClick={() => onclick()}
      className="cursor-pointer px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg bg-black/30 backdrop-blur-sm border border-[#77001A]/20 text-white hover:bg-[#77001A]/10 hover:border-[#77001A]/40 shadow-black/30 hover:shadow-[#77001A]/20">
      <ArrowLeft className="z-10 w-4 h-4 text-gray-200 transition-all duration-300 transform group-hover:rotate-45" />
      <span className="z-10 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
        {BACK_TEXT}
      </span>
    </button>
    <div className="flex gap-1 items-center">
      <h4>{PROJECTS_BREADCRUMB}</h4>
      <ChevronRight className="w-4 h-4" />
      <span>{projectTitle}</span>
    </div>
  </div>
));
