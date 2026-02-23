import { memo } from "react";
import { SERVICES } from "../../constants/servicesData";
import { CheckCircle2 } from "lucide-react";

export const ServicesMiniSection = memo(() => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.id}
              className="relative group rounded-xl bg-[#0A0A0A]/70 backdrop-blur-sm border border-[#77001A]/20 hover:border-[#77001A]/40 transition-all duration-300 p-6 hover:-translate-y-1"
              data-aos="fade-up">
              {/* Gradient glow effect from AboutCard */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#330008] to-[#77001A] rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300" />

              <div className="flex relative z-10 flex-col gap-6">
                {/* Header */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#77001A] to-[#4a0010] text-white shadow-lg shadow-[#77001A]/20 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[#77001A]/40">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-bold leading-tight text-white group-hover:text-[#ffccd5] transition-colors">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                        {service.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent to-transparent via-white/10" />

                {/* List */}
                <ul className="space-y-3">
                  {service.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-3 items-start text-sm transition-colors text-gray-300/90 group-hover:text-gray-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#77001A] group-hover:text-[#AA0020] transition-colors" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
});
