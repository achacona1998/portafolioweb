import { memo } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
export const SocialLink = memo(({ name, icon: Icon, link }) => (
  <Link
    to={link}
    rel="noopener"
    target="_blank"
    className="flex items-center gap-2 text-gray-400 hover:text-[#77001A] transition-all duration-300 group hover:transform hover:translate-y-[-2px] rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_15px_rgba(119,0,26,0.5)] p-1"
    data-aos="fade-up"
    data-aos-delay="500">
    <span className="sr-only">{name}</span>
    <Icon className="w-5 h-5 text-gray-500 group-hover:text-[#77001A] transition-all duration-300 group-hover:drop-shadow-[0_0_3px_rgba(119,0,26,0.5)]" />
  </Link>
));
