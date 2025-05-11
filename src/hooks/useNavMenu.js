import { useState } from "react";

export const useNavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  return { isMenuOpen, toggleMenu, closeMenu };
};