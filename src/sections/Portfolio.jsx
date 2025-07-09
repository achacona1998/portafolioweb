import { memo } from "react";
import SectionTitle from "../components/assets/SectionTitle";
import { useProjects, useCertificates } from "../hooks/usePortfolioData";
import { useShowcase } from "../hooks/useShowcase";
import { SHOWCASE_TABS, TECH_SKILLS } from "../constants/portfolioData";
import { ShowcaseTabs } from "../components/Portfolio/ShowcaseTabs";
import { ProjectsGrid } from "../components/Portfolio/ProjectsGrid";
import { CertificatesGrid } from "../components/Portfolio/CertificatesGrid";
import { TechGrid } from "../components/Portfolio/TechGrid";
import { LoadingState } from "../components/Portfolio/LoadingState";
import { ErrorState } from "../components/Portfolio/ErrorState";

const Portfolio = () => {
  const { activeTab, handleTabChange } = useShowcase("Proyectos");
  const { projects, loading, error } = useProjects();
  const { certificates } = useCertificates();

  return (
    <section id="Portfolio" className="py-20 min-h-screen">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title="Portafolio de Proyectos"
          description="Explora mis proyectos, tecnologías y certificaciones que muestran mi trayectoria y experiencia como desarrollador."
        />

        {/* Loading and Error States */}
        <LoadingState isLoading={loading} />
        <ErrorState error={error} />

        {/* Portfolio Content */}
        <div className="space-y-5">
          {/* Tabs */}
          <ShowcaseTabs
            tabs={SHOWCASE_TABS}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          {/* Content Grids */}
          <ProjectsGrid
            projects={projects}
            isVisible={activeTab === "Proyectos"}
          />

          <CertificatesGrid
            certificates={certificates}
            isVisible={activeTab === "Certificados"}
          />

          <TechGrid
            skills={TECH_SKILLS}
            isVisible={activeTab === "Tecnologías"}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(Portfolio);
