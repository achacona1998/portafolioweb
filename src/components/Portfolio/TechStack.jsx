import { memo } from "react";
import { GlassCard } from "../assets/GlassCard";

export const TechStack = memo(({ groupedSkills }) => {
  return (
    <section className="mt-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">
          Tecnologías que utilizo
        </h3>
        <p className="mt-1 text-xs text-gray-400">
          Un vistazo a mi stack técnico organizado por categorías.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {groupedSkills.map((group) => (
          <div
            key={group.id}
            className="p-4 rounded-xl border border-white/10 bg-black/40">
            <h4 className="text-sm font-medium text-gray-200">{group.label}</h4>
            <div className="flex flex-wrap gap-2 mt-3">
              {group.skills.map((tech) => (
                <div
                  key={tech.name}
                  className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 transition-colors">
                  <tech.icon className="w-4 h-4" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
