import { memo } from "react";
import { Logo } from "../components/icons/icons";
import { DesktopNav } from "../components/Navbar/DesktopNav";
import { MobileNav } from "../components/Navbar/MobileNav";
import { useNavMenu } from "../hooks/useNavMenu";

const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useNavMenu();

  return (
    <nav className="fixed w-full z-50 py-2 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#77001A]/20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#Home" className="">
            <Logo className="w-auto h-8" />
          </a>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Mobile Navigation */}
          <MobileNav
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            closeMenu={closeMenu}
          />
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
