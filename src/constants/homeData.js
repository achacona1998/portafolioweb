import { Github, Linkedin, Instagram } from "lucide-react";

export const TYPING_SPEED = 150;
export const ERASING_SPEED = 75;
export const PAUSE_DURATION = 1500;

export const WORDS = [
  "Desarrollador Frontend",
  "Especialista en React",
  "Entusiasta de UI/UX",
  "Solucionador de Problemas",
];

export const TECH_STACK = ["React", "Astro", "Tailwind", "Django"];

export const SOCIAL_LINKS = [
  {
    name: "Github",
    icon: Github,
    link: "https://github.com/achacona1998",
  },
  {
    name: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/ariel-chacon-artola-7a00bb2b4/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/ariel.dev98/profilecard/?igsh=MTQ0ajhrMm80Y3Y3Mw==",
  },
];

export const LOTTIE_OPTIONS = {
  src: "../MainScene.lottie",
  loop: true,
  autoplay: true,
  renderersettings: {
    preserveAspectRatio: "xMidYMid slice",
    progressiveLoad: true,
  },
  className:
    "transition-all duration-500 xl:h-[700px] xl:w-[700px] lg:h-[600px] lg:w-[600px] md:w-[500px] md:h-[500px] w-[400px] h-[400px]",
};
