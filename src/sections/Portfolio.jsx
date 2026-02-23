import { memo, useMemo, useState } from "react";
import SectionTitle from "../components/assets/SectionTitle";
import { useProjects } from "../hooks/usePortfolioData";
import { TECH_SKILLS } from "../constants/portfolioData";
import { ProjectsGrid } from "../components/Portfolio/ProjectsGrid";
import { LoadingState } from "../components/Portfolio/LoadingState";
import { ErrorState } from "../components/Portfolio/ErrorState";
import { TechStack } from "../components/Portfolio/TechStack";

const PROJECT_CATEGORIES = [
  { id: "all", label: "Todos los proyectos" },
  { id: "web-pages", label: "Páginas web" },
  { id: "online-stores", label: "Tiendas online" },
  { id: "business-systems", label: "Sistemas para negocios" },
  { id: "desktop-apps", label: "Aplicaciones de escritorio" },
  { id: "mobile-apps", label: "Aplicaciones móviles" },
];

const Portfolio = () => {
  const { projects, loading, error } = useProjects();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;

    return projects.filter((project) => {
      const category = project.category || project.categoria || "";
      return category === activeCategory;
    });
  }, [projects, activeCategory]);

  const groupedSkills = useMemo(() => {
    const categories = {
      frontend: "Frontend",
      backend: "Backend",
      database: "Bases de datos",
      tools: "Herramientas y ecosistema",
      deployment: "Despliegue y DevOps",
    };

    return Object.entries(
      TECH_SKILLS.reduce((acc, skill) => {
        const key = skill.category || "others";
        if (!acc[key]) acc[key] = [];
        acc[key].push(skill);
        return acc;
      }, {}),
    )
      .filter(([category]) => categories[category])
      .map(([category, skills]) => ({
        id: category,
        label: categories[category],
        skills,
      }));
  }, []);

  return (
    <section id="Portfolio" className="py-20 min-h-screen">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <SectionTitle
          title="Portafolio de Proyectos"
          description="Explora mis proyectos destacados y las tecnologías que utilizo para construir soluciones modernas y escalables."
        />

        <LoadingState isLoading={loading} />
        <ErrorState error={error} />

        <div className="space-y-10">
          <section className="space-y-4">
            <div className="flex flex-wrap gap-3 justify-between items-center mb-5">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Proyectos por tipo de servicio
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  Filtra los proyectos según el tipo de solución que ofrezco.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {PROJECT_CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`cursor-pointer px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-[#77001A] to-[#AA0020] text-white border-transparent shadow-md shadow-[#77001A]/40"
                        : "bg-black/40 text-gray-300 border-[#77001A]/30 hover:bg-[#77001A]/10 hover:border-[#FF3366]/60 hover:text-white"
                    }`}>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <ProjectsGrid projects={filteredProjects} isVisible />
          </section>

          <TechStack groupedSkills={groupedSkills} />
        </div>
      </div>
    </section>
  );
};

export default memo(Portfolio);
