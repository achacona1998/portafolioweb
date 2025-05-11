import { memo } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import { NAV_LINKS } from "../../constants/navData";

export const MobileNav = memo(({ isMenuOpen, toggleMenu, closeMenu }) => (
  <>
    {/* Mobile Menu Button */}
    <button
      className="flex text-white md:hidden p-2 rounded-md bg-[#0A0A0A]/50 border border-[#77001A]/20 hover:border-[#77001A] hover:bg-[#323232]/40 transition-colors duration-300"
      onClick={toggleMenu}>
      {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
    </button>

    {/* Mobile Menu */}
    <div
      className={`md:hidden absolute left-0 top-[100%] w-full bg-[#0A0A0A]/90 transition-all duration-300 ${
        isMenuOpen ? "max-h-screen py-4" : "max-h-0 py-0 overflow-hidden"
      }`}>
      <div className="flex flex-col px-4 py-2 space-y-3 sm:px-6 lg:px-8">
        {NAV_LINKS.map((link) => (
          <div key={link.href} className="py-1">
            <NavLink href={link.href} label={link.label} onClick={closeMenu} />
          </div>
        ))}
      </div>
    </div>
  </>
));