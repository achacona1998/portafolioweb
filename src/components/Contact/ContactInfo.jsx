import { memo } from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "../assets/GlassCard";

export const ContactInfo = memo(({ id, icon, title, content, link }) => {
  const Icon = icon;

  return (
    <GlassCard
      as={Link}
      to={link}
      target="_blank"
      rel="noopener"
      className="flex items-start p-4 rounded-xl"
      overlayRoundedClass="rounded-xl"
      data-aos="fade-up"
      data-aos-delay={`${id}00`}>
      <div className="p-1 rounded-lg bg-gradient-to-r from-[#330008]/50 to-[#77001A]/20 w-fit">
        <Icon className="w-6 h-6 text-gray-600 transition-colors duration-300 group-hover:text-white" />
      </div>
      <div>
        <h3 className="mb-1 text-lg font-medium text-gray-600 transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>
        <h4 className="text-gray-600 transition-colors duration-300 group-hover:text-white">
          {content}
        </h4>
      </div>
    </GlassCard>
  );
});
