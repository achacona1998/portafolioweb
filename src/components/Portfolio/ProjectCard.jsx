import { memo, useMemo } from "react";
import { ExternalLink, ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectCard = memo(
  ({
    id,
    title,
    description,
    image,
    liveUrl,
    githubUrl,
    technologies,
    category,
    categoria,
  }) => {
    const categoryId = categoria || category || null;
    const CATEGORY_LABELS = {
      "web-pages": "Páginas web",
      "online-stores": "Tiendas online",
      "business-systems": "Sistemas para negocios",
      "desktop-apps": "Aplicaciones de escritorio",
      "mobile-apps": "Aplicaciones móviles",
    };
    const categoryLabel = categoryId
      ? CATEGORY_LABELS[categoryId] || categoryId
      : null;
    const techPreview = useMemo(() => {
      if (!Array.isArray(technologies)) return [];
      return technologies.slice(0, 3);
    }, [technologies]);

    return (
      <article
        className="relative overflow-hidden rounded-xl border border-white/10 bg-[#050505]/80 backdrop-blur-md shadow-inner shadow-black/40 transition-transform duration-300 group hover:-translate-y-0.5"
        data-aos="fade-up">
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-gradient-to-r from-[#330008]/40 to-[#77001A]/40" />
        <div className="relative">
          <div className="overflow-hidden relative p-3 h-48 sm:h-56">
            {categoryLabel && (
              <span className="absolute top-3 left-3 z-10 px-2 py-1 rounded-full text-[10px] font-semibold bg-black/50 backdrop-blur-sm border border-[#77001A]/40 text-[#FF9A8B]">
                {categoryLabel}
              </span>
            )}
            <img
              src={image}
              loading="lazy"
              alt={`Imagen de ${title}`}
              className="object-cover w-full h-full text-white rounded-t-lg transition-transform duration-500 transform group-hover:scale-105"
            />
            <div className="flex absolute inset-x-3 bottom-3 flex-wrap gap-2 p-2">
              {techPreview.map((tech, index) => (
                <span
                  key={`${tech}-${index}`}
                  className="px-2.5 py-1 rounded-full text-[10px] border border-white/25 text-gray-100 hover:border-[#FF3366]/60 hover:text-white transition-all duration-300 backdrop-blur-sm bg-[#77001A]/80">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 pt-0">
            <h3 className="mb-2 text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BBBBBB]">
              {title}
            </h3>
            <p className="mb-4 text-sm text-gray-400 line-clamp-3">
              {description}
            </p>

            <div className="flex gap-3 justify-between items-center">
              <div className="flex gap-4 items-center">
                {liveUrl && (
                  <Link
                    to={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex gap-2 items-center text-gray-300 transition-colors hover:text-white">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-xs">Ver en línea</span>
                  </Link>
                )}
                {githubUrl && (
                  <Link
                    to={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex gap-2 items-center text-gray-300 transition-colors hover:text-white">
                    <Github className="w-4 h-4" />
                    <span className="text-xs">GitHub</span>
                  </Link>
                )}
              </div>
              <Link
                to={`/projects/${id}`}
                className="px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 inline-flex items-center gap-2 shadow-lg bg-gradient-to-r from-[#77001A] to-[#AA0020] text-white hover:from-[#AA0020] hover:to-[#77001A] shadow-[#77001A]/30">
                <span className="z-10 text-sm">Detalles</span>
                <ArrowRight className="z-10 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  },
);
