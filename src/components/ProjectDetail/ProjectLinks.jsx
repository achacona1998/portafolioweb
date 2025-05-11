import { memo } from "react";
import { ExternalLink, Github } from "lucide-react";
import { CTAButton } from "../assets/CTAButton";
import { LIVE_DEMO_TEXT, GITHUB_TEXT } from "../../constants/projectDetailData";

export const ProjectLinks = memo(({ liveUrl, githubUrl }) => (
  <div className="flex flex-row gap-4 mb-8">
    {liveUrl && (
      <CTAButton
        href={liveUrl}
        text={LIVE_DEMO_TEXT}
        icon={ExternalLink}
        target="_blank"
        className="justify-center w-full sm:w-auto"
      />
    )}
    {githubUrl && (
      <CTAButton
        href={githubUrl}
        text={GITHUB_TEXT}
        icon={Github}
        target="_blank"
        variant="secondary"
        className="justify-center w-full bg-gray-700 border-gray-600 sm:w-auto hover:bg-gray-600"
      />
    )}
  </div>
));