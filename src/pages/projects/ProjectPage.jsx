import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Code2,
  Calendar,
  Target,
  Lightbulb,
  ListChecks,
  ArrowLeft,
} from "lucide-react";
import { useContactModal } from "../../context/ContactModalContext";
import Background from "../../components/assets/Background";
import { Layout, Footer } from "../../layout";
import { useProjectDetails } from "../../hooks/useProjectDetails";
import { ErrorState } from "../../components/ProjectPage/ErrorState";
import { getProjectPageTitle } from "../../utils/pageUtils";
import { LoadingState } from "../../components/Portfolio/LoadingState";
import { extractProjectData } from "../../utils/projectUtils";

const ProjectContactCTA = () => {
  const { openModal } = useContactModal();

  return (
    <button
      type="button"
      onClick={openModal}
      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white rounded-full bg-gradient-to-r from-[#77001A] to-[#AA0020] hover:from-[#AA0020] hover:to-[#77001A] shadow-lg shadow-[#77001A]/40 transition-colors duration-300 backdrop-blur-md">
      <span>Quiero un proyecto similar</span>
    </button>
  );
};

export default function ProjectPage() {
  const { id } = useParams();
  const { project, error, loading } = useProjectDetails(id);
  const pageTitle = getProjectPageTitle(project);

  const {
    title,
    description,
    image,
    technologies,
    liveUrl,
    githubUrl,
    analysis,
    data,
    tests,
  } = extractProjectData(project || {}) || {};

  const detailedDescription = analysis || data || description || "";

  const galleryImages = useMemo(() => {
    const extraImages = Array.isArray(project?.gallery)
      ? project.gallery
      : Array.isArray(project?.imagenes)
        ? project.imagenes
        : [];

    return [image, ...extraImages].filter(Boolean);
  }, [image, project]);

  const timelineItems = useMemo(() => {
    if (Array.isArray(project?.timeline) && project.timeline.length > 0) {
      return project.timeline;
    }

    return [
      {
        title: "Descubrimiento y objetivos",
        description:
          "Definición del contexto del proyecto, prioridades de negocio y criterios de éxito.",
      },
      {
        title: "Diseño de solución",
        description:
          "Arquitectura, diseño de interfaces y decisiones técnicas alineadas con los objetivos.",
      },
      {
        title: "Implementación y lanzamiento",
        description:
          "Desarrollo, pruebas y despliegue, con ajustes finos basados en feedback real.",
      },
    ];
  }, [project]);

  const challengesContent = useMemo(() => {
    if (Array.isArray(project?.challenges) && project.challenges.length > 0) {
      return {
        challenges: project.challenges,
        solutions: Array.isArray(project.solutions) ? project.solutions : [],
      };
    }

    if (analysis) {
      return {
        challenges: [analysis],
        solutions: [],
      };
    }

    return {
      challenges: [],
      solutions: [],
    };
  }, [project, analysis]);

  return (
    <Layout title={pageTitle}>
      <Background />
      <main className="relative pb-16 min-h-screen">
        <LoadingState isLoading={loading} />

        {!loading && error && <ErrorState errorMessage={error} />}

        {!loading && project && (
          <>
            <section className="overflow-hidden relative pt-24 pb-16">
              <div className="absolute inset-0">
                {image && (
                  <img
                    src={image}
                    alt={title || "Proyecto"}
                    className="object-cover w-full h-full opacity-60"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black to-black via-black/85" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(119,0,26,0.55),_transparent_55%)]" />
              </div>

              <div className="container relative px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 justify-between mb-6 md:flex-row md:items-start">
                  <div className="space-y-6 max-w-4xl" data-aos="fade-up">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-[#77001A]/20 text-[#FF9A8B] border border-[#FF9A8B]/40">
                      Proyecto destacado
                    </span>
                    <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF9A8B] to-[#FFE29F]">
                        {title}
                      </span>
                    </h1>
                    {description && (
                      <p className="max-w-2xl text-sm text-gray-300 md:text-base">
                        {description}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-4 items-center">
                      {technologies && technologies.length > 0 && (
                        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-black/50 border border-[#77001A]/40 text-xs text-gray-200">
                          <Code2 className="w-4 h-4 text-[#FF9A8B]" />
                          <span>
                            Tecnologías clave:{" "}
                            {technologies.slice(0, 3).join(" · ")}
                            {technologies.length > 3 && " · ..."}
                          </span>
                        </div>
                      )}
                      {(liveUrl || githubUrl) && (
                        <div className="flex flex-wrap gap-3">
                          {liveUrl && (
                            <a
                              href={liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[#77001A] to-[#AA0020] hover:from-[#AA0020] hover:to-[#77001A] shadow-lg shadow-[#77001A]/40 transition-transform duration-300 hover:scale-105 active:scale-95">
                              Ver demo
                            </a>
                          )}
                          {githubUrl && (
                            <a
                              href={githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-200 bg-black/50 border border-[#77001A]/40 hover:bg-black/70 hover:border-[#FF9A8B]/60 transition-transform duration-300 hover:scale-105 active:scale-95">
                              Código en GitHub
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="md:pt-2" data-aos="fade-left">
                    <div className="p-4 rounded-2xl bg-[#050505]/90 border border-[#77001A]/40 shadow-inner shadow-black/40 space-y-4 max-w-xs md:max-w-sm md:ml-auto">
                      <h2 className="text-sm font-semibold text-white">
                        ¿Te interesa algo similar?
                      </h2>
                      <p className="text-xs text-gray-300">
                        Este tipo de proyecto combina estrategia, diseño y
                        desarrollo para crear una web pensada para convertir y
                        sostener el negocio.
                      </p>
                      <ul className="space-y-1 text-xs text-gray-400">
                        <li>• Alineado con objetivos de negocio</li>
                        <li>
                          • Enfoque en performance y experiencia de usuario
                        </li>
                        <li>
                          • Acompañamiento en lanzamiento y ajustes iniciales
                        </li>
                      </ul>
                      <div className="flex flex-col gap-2 items-start pt-2 md:items-end">
                        <ProjectContactCTA />
                        <Link
                          to="/"
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-200 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#FF4D6A]/60 transition-colors duration-300 backdrop-blur-md">
                          <ArrowLeft className="w-4 h-4" />
                          <span>Volver al inicio</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="container px-4 mx-auto mt-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                <div className="space-y-6" data-aos="fade-up">
                  {detailedDescription && (
                    <div className="p-6 rounded-2xl bg-[#0A0A0A]/80 border border-[#77001A]/30 shadow-inner shadow-black/40">
                      <h2 className="mb-3 text-xl font-semibold text-white">
                        Contexto y objetivo
                      </h2>
                      <p className="text-sm leading-relaxed text-gray-300 whitespace-pre-line">
                        {detailedDescription}
                      </p>
                    </div>
                  )}

                  {technologies && technologies.length > 0 && (
                    <div className="p-6 rounded-2xl bg-[#050505]/90 border border-[#77001A]/30 shadow-inner shadow-black/40">
                      <div className="flex gap-3 items-center mb-4">
                        <Code2 className="w-5 h-5 text-[#FF9A8B]" />
                        <h2 className="text-lg font-semibold text-white">
                          Tecnologías utilizadas
                        </h2>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {technologies.map((tech, index) => (
                          <span
                            key={`${tech}-${index}`}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-[#77001A]/30 text-xs text-gray-200 hover:bg-[#77001A]/20 hover:border-[#FF9A8B]/60 hover:text-white transition-all duration-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF9A8B]" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {(tests || data) && (
                    <div className="p-6 rounded-2xl bg-[#050505]/90 border border-[#77001A]/30 shadow-inner shadow-black/40">
                      <div className="flex gap-3 items-center mb-3">
                        <ListChecks className="w-5 h-5 text-[#FF9A8B]" />
                        <h2 className="text-lg font-semibold text-white">
                          Evidencias y resultados
                        </h2>
                      </div>
                      {data && (
                        <p className="mb-3 text-sm text-gray-300 whitespace-pre-line">
                          {data}
                        </p>
                      )}
                      {tests && (
                        <p className="text-sm text-gray-300 whitespace-pre-line">
                          {tests}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-6" data-aos="fade-left">
                  {galleryImages.length > 0 && (
                    <div className="p-4 rounded-2xl bg-[#050505]/90 border border-[#77001A]/30 shadow-inner shadow-black/40">
                      <h2 className="mb-3 text-lg font-semibold text-white">
                        Galería del proyecto
                      </h2>
                      <div className="grid grid-cols-2 gap-3">
                        {galleryImages.map((src, index) => (
                          <div
                            key={`${src}-${index}`}
                            className="overflow-hidden relative rounded-xl border border-white/10 bg-black/60">
                            <img
                              src={src}
                              alt={`${title || "Proyecto"} - captura ${index + 1}`}
                              className="object-cover w-full h-32 transition-transform duration-500 transform sm:h-36 md:h-40 hover:scale-105"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="p-4 rounded-2xl bg-[#050505]/90 border border-[#77001A]/30 shadow-inner shadow-black/40">
                    <div className="flex gap-3 items-center mb-3">
                      <Calendar className="w-5 h-5 text-[#FF9A8B]" />
                      <h2 className="text-lg font-semibold text-white">
                        Proceso de desarrollo
                      </h2>
                    </div>
                    <ol className="space-y-3">
                      {timelineItems.map((step, index) => (
                        <li
                          key={`${step.title}-${index}`}
                          className="relative pl-6">
                          <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#FF9A8B]" />
                          <h3 className="text-sm font-semibold text-white">
                            {step.title}
                          </h3>
                          {step.date && (
                            <p className="text-[11px] text-gray-400">
                              {step.date}
                            </p>
                          )}
                          {step.description && (
                            <p className="mt-1 text-xs text-gray-300">
                              {step.description}
                            </p>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {(challengesContent.challenges.length > 0 ||
                    challengesContent.solutions.length > 0) && (
                    <div className="p-4 rounded-2xl bg-[#050505]/90 border border-[#77001A]/30 shadow-inner shadow-black/40">
                      <div className="grid gap-4 md:grid-cols-2">
                        {challengesContent.challenges.length > 0 && (
                          <div>
                            <div className="flex gap-2 items-center mb-2">
                              <Target className="w-4 h-4 text-[#FF9A8B]" />
                              <h2 className="text-sm font-semibold text-white">
                                Retos
                              </h2>
                            </div>
                            <ul className="space-y-2 text-xs text-gray-300">
                              {challengesContent.challenges.map(
                                (item, index) => (
                                  <li key={`challenge-${index}`}>{item}</li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}
                        {challengesContent.solutions.length > 0 && (
                          <div>
                            <div className="flex gap-2 items-center mb-2">
                              <Lightbulb className="w-4 h-4 text-[#FFE29F]" />
                              <h2 className="text-sm font-semibold text-white">
                                Soluciones
                              </h2>
                            </div>
                            <ul className="space-y-2 text-xs text-gray-300">
                              {challengesContent.solutions.map(
                                (item, index) => (
                                  <li key={`solution-${index}`}>{item}</li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </Layout>
  );
}
