import { memo } from "react";
import { NavLink } from "./NavLink";
import { NAV_LINKS } from "../../constants/navData";

export const DesktopNav = memo(() => (
  <div className="hidden items-center md:flex">
    <div className="flex p-1 space-x-1 rounded-lg backdrop-blur-sm">
      {NAV_LINKS.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}
    </div>
  </div>
));