import { memo } from "react";
import { PROJECT_NOT_FOUND_MESSAGE, GO_BACK_TEXT } from "../../constants/projectDetailData";

export const ProjectNotFound = memo(() => (
  <div className="container px-4 py-10 mx-auto text-center sm:px-6 lg:px-8">
    <p className="text-xl text-red-500">{PROJECT_NOT_FOUND_MESSAGE}</p>
    <a
      href="/"
      className="mt-4 inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-[#77001A] to-[#AA0020] text-white font-medium hover:opacity-90 transition-opacity">
      {GO_BACK_TEXT}
    </a>
  </div>
));