import { memo } from "react";
import SectionTitle from "../components/assets/SectionTitle";
import { AboutCard } from "../components/About/AboutCard";
import { useProjectCount } from "../hooks/useCounters";
import { getAboutData } from "../constants/aboutData";
import AboutInfo from "../components/About/AboutInfo";

const About = () => {
  const projectCount = useProjectCount();
  const data = getAboutData(projectCount);
  const gridCols = data.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <section id="About" className="py-20 min-h-screen md:pt-28">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <SectionTitle
          title={"Sobre mí"}
          description={
            "Desarrollador especializado en plataformas SaaS y e-commerce de alto rendimiento, centrado en negocio y experiencia de usuario."
          }
        />

        <AboutInfo />

        <div className={`grid grid-cols-1 gap-6 mt-20 ${gridCols}`}>
          {data.map((card, index) => (
            <AboutCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              data={card.data}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(About);
