import { memo } from "react";
import SectionTitle from "../components/assets/SectionTitle";
import { GlassCard } from "../components/assets/GlassCard";
import { TESTIMONIALS } from "../constants/testimonialsData";
import { TestimonialCard } from "../components/Testimonials/TestimonialCard";

const Testimonials = () => {
  return (
    <section id="Testimonials" className="py-20 md:py-28">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <SectionTitle
          title="Testimonios"
          description="Historias reales de clientes satisfechos con resultados tangibles."
        />

        <GlassCard
          className="p-6 mt-10 rounded-2xl md:p-8"
          overlayRoundedClass="rounded-2xl"
          data-aos="fade-up">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard
                key={t.id}
                name={t.name}
                role={t.role}
                content={t.content}
                avatar={t.avatar}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl">
              Cada proyecto empieza con una conversación clara y termina con un
              cliente que recomienda el resultado.
            </p>
            <p className="text-xs text-gray-500">
              Basado en colaboraciones reales en e-commerce, SaaS y webs
              profesionales.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default memo(Testimonials);
