import React, { memo } from "react";
import SectionTitle from "../components/assets/SectionTitle";
import { AboutCard } from "../components/About/AboutCard";
import { useProjectCount, useCertificatesCount } from "../hooks/useCounters";
import { getAboutData } from "../constants/aboutData";
import AboutInfo from "../components/About/AboutInfo";

const About = () => {
  const projectCount = useProjectCount();
  const certificatesCount = useCertificatesCount();
  const data = getAboutData(projectCount, certificatesCount);

  return (
    <section id="About" className="py-20 min-h-screen md:pt-28">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title={" Sobre Mí"}
          description={
            "Desarrollador frontend apasionado con enfoque en crear experiencias web hermosas y funcionales."
          }
        />

        {/* My Info Component */}
        <AboutInfo />

        {/* About Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mt-20 md:grid-cols-3">
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
