import { memo } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const NavLink = memo(({ href, label, onClick }) => {
  const isRoute = typeof href === "string" && href.startsWith("/");

  const commonClasses =
    "relative px-3 py-2 text-gray-400 transition-colors cursor-pointer hover:text-white group focus:outline-none focus-visible:text-white";

  const inner = (
    <>
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 rounded-md bg-gradient-to-r from-[#330008]/0 to-[#77001A]/0 group-hover:from-[#330008]/30 group-hover:to-[#77001A]/20 group-focus-visible:from-[#330008]/30 group-focus-visible:to-[#77001A]/20 transition-all duration-300"></span>
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#330008] to-[#77001A] group-hover:w-full group-focus-visible:w-full transition-all duration-300"></span>
    </>
  );

  if (isRoute) {
    return (
      <Link to={href} onClick={onClick} className={commonClasses}>
        {inner}
      </Link>
    );
  }

  return (
    <ScrollLink
      to={href}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={onClick}
      className={commonClasses}
      tabIndex="0"
      role="button">
      {inner}
    </ScrollLink>
  );
});
