import { memo } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
export const ContactInfo = memo(({ id, icon: Icon, title, content, link }) => (
  <Link
    to={link}
    target="_blank"
    rel="noopener"
    
    className="flex items-start gap-4 p-4 rounded-lg bg-[#0A0A0A]/70 backdrop-blur-sm border border-[#77001A]/20 group relative hover:border-[#77001A]/40 transition-all duration-300 "
    data-aos="fade-left"
    data-aos-delay={`${id}00`}>
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#330008] to-[#77001A] rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
    <div className="p-2 rounded-lg bg-gradient-to-r from-[#330008]/50 to-[#77001A]/20 ">
      <Icon className="w-6 h-6 text-[#d3c0c0] group-hover:text-[#77001A] transition-colors" />
    </div>
    <div>
      <h3 className="mb-1 text-lg font-medium text-white group-hover:text-[#77001A] transition-colors">
        {title}
      </h3>
      <h4 className="text-gray-400 group-hover:text-[#77001A] transition-colors">
        {content}
      </h4>
    </div>
  </Link>
));
