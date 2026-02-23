import { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../components/assets/SectionTitle";
import { SERVICES } from "../constants/servicesData";
import { ServicesCTA } from "../components/Services/ServicesCTA";

const Services = () => {
  return (
    <section id="Services" className="py-20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <SectionTitle
          title="Servicios"
          description="Un vistazo rápido a lo que puedo construir para tu negocio; el detalle completo está en la página de servicios."
        />

        <div className="grid gap-6 mt-10 sm:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="flex gap-3 items-start"
                data-aos="fade-up"
                data-aos-delay={index * 150}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#77001A] to-[#4a0010] text-white shadow-lg shadow-[#77001A]/30 ring-1 ring-white/10">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm md:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BBBBBB]">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-xs text-gray-400 md:text-sm">
                      {service.subtitle}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
          <Link
            to="/servicios"
            data-aos="fade-up"
            data-aos-delay={SERVICES.length * 150}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#77001A] to-[#AA0020] hover:from-[#AA0020] hover:to-[#77001A] shadow-lg shadow-[#77001A]/30 transform transition-all duration-300 hover:scale-105 active:scale-95 w-fit">
            Ver detalles de los servicios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ServicesCTA />
      </div>
    </section>
  );
};

export default memo(Services);
