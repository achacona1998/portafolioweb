import { memo } from "react";

const Footer = () => {
  return (
    <footer className="py-2 text-center text-gray-400 border-t border-[#77001A]">
      <p>
        {" "}
        &copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos
        reservados.
      </p>
      <a
        href="https://github.com/achacona1998?tab=repositories"
        className="hover:text-[#77001A] transition-colors">
        Ariel Chacon Artola
      </a>
    </footer>
  );
};

export default memo(Footer);

