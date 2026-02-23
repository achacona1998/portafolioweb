import { memo } from "react";
import { Mail } from "lucide-react";
import SectionTitle from "../components/assets/SectionTitle";
import { LogoAmplio } from "../components/icons/icons";
import { ContactInfo } from "../components/Contact/ContactInfo";
import { contactInfo } from "../constants/contactData";
import { CTAButton } from "../components/assets/CTAButton";
import { GlassCard } from "../components/assets/GlassCard";

const Contact = () => {
  return (
    <section id="Contact" className="py-20 min-h-screen">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title={"Contáctame"}
          description={
            "¿Tienes alguna pregunta o quieres que trabajemos juntos? ¡No dudes en contactarme!"
          }
        />

        {/* Top CTA Banner */}
        <GlassCard
          as="section"
          overlayRoundedClass="rounded-2xl"
          className="p-8 mx-auto rounded-2xl md:p-12"
          data-aos="fade-up">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BBBBBB]">
                ¿Empezamos tu proyecto?
              </h3>
              <p className="text-gray-400">
                Cuéntame qué necesitas y te respondo con una propuesta clara y
                fechas.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <CTAButton
                href="Contact"
                text="Quiero hablar de mi proyecto"
                icon={Mail}
              />
            </div>
          </div>
        </GlassCard>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 mt-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <ContactInfo
                key={info.id}
                id={info.id}
                icon={info.icon}
                title={info.title}
                content={info.content}
                link={info.link}
              />
            ))}
          </div>

          {/* Brand / Details */}
          <div className="flex flex-col justify-between space-y-6" data-aos="fade-up">
            <div className="relative p-6 rounded-xl bg-[#0A0A0A]/70 backdrop-blur-sm border border-[#77001A]/20">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#330008] to-[#77001A] rounded-xl blur opacity-20" />
              <div className="relative space-y-4">
                <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BBBBBB]">
                  Preferencias y disponibilidad
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Respuesta habitual en el mismo día</li>
                  <li>• Proyectos: web, e-commerce y sistemas a medida</li>
                  <li>• Idiomas: Español</li>
                </ul>
              </div>
            </div>
            <LogoAmplio />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
