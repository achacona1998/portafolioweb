import { memo } from "react";
import {
  ExternalLink,
  Github,
  FileCode2,
  Database,
  BugPlay,
} from "lucide-react";
import {
  LIVE_DEMO_TEXT,
  GITHUB_TEXT,
  EVIDENCIAS_DEL_PROYECTO,
  ANALYSIS_TEXT,
  DATA_TEXT,
  TESTS_TEXT,
} from "../../constants/projectDetailData";
import { FolderCode } from "lucide-react";
import { LinkButton } from "./LinkButton";

export const ProjectLinks = memo(
  ({ liveUrl, githubUrl, analysis, data, tests }) => {
    // Configuración de enlaces con sus respectivos iconos y textos
    const linkConfigs = [
      {
        url: liveUrl,
        text: LIVE_DEMO_TEXT,
        icon: ExternalLink,
        key: "live",
      },
      {
        url: githubUrl,
        text: GITHUB_TEXT,
        icon: Github,
        key: "github",
      },
      {
        url: analysis,
        text: ANALYSIS_TEXT,
        icon: FileCode2,
        key: "analysis",
      },
      {
        url: data,
        text: DATA_TEXT,
        icon: Database,
        key: "data",
      },
      {
        url: tests,
        text: TESTS_TEXT,
        icon: BugPlay,
        key: "tests",
      },
    ];

    // Filtrar solo los enlaces que tienen URL
    const availableLinks = linkConfigs.filter((config) => config.url);

    // Si no hay enlaces disponibles, no renderizar nada
    if (availableLinks.length === 0) {
      return null;
    }

    return (
      <div className="">
        <div className="flex gap-3 items-center mb-4">
          <FolderCode className="w-5 h-5" />
          <h2 className="text-xl font-semibold text-white">
            {EVIDENCIAS_DEL_PROYECTO}
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 mb-8">
          {availableLinks.map(({ url, text, icon, key }) => (
            <LinkButton key={key} url={url} text={text} icon={icon} />
          ))}
        </div>
      </div>
    );
  }
);
