import { Code, Cpu } from "lucide-react";
import { PiMedalBold } from "react-icons/pi";
import {
  Astro,
  CSS3,
  Django,
  Express,
  GitHub,
  HTML,
  JS,
  Medusa,
  Mongo,
  Netlify,
  Node,
  React,
  Supabase,
  Tailwind,
  TypeScript,
  Vite,
} from "../components/icons/icons";

export const SHOWCASE_TABS = [
  {
    name: "Proyectos",
    icon: Code,
  },
  {
    name: "Certificados",
    icon: PiMedalBold,
  },
  {
    name: "Tecnologías",
    icon: Cpu,
  },
];

export const TECH_SKILLS = [
  // Frontend
  {
    name: "HTML5",
    icon: HTML,
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: CSS3,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: JS,
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: TypeScript,
    category: "frontend",
  },
  {
    name: "React",
    icon: React,
    category: "frontend",
  },
  {
    name: "Astro",
    icon: Astro,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: Tailwind,
    category: "frontend",
  },
  // Version Control
  {
    name: "GitHub",
    icon: GitHub,
    category: "tools",
  },
  // Backend & Databases
  {
    name: "Node.js",
    icon: Node,
    category: "backend",
  },
  {
    name: "Express",
    icon: Express,
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: Mongo,
    category: "database",
  },
  {
    name: "Supabase",
    icon: Supabase,
    category: "database",
  },
  {
    name: "Django",
    icon: Django,
    category: "backend",
  },
  // Tools & Deployment
  {
    name: "MedusaJs",
    icon: Medusa,
    category: "tools",
  },
  {
    name: "Vite",
    icon: Vite,
    category: "tools",
  },
  {
    name: "Netlify",
    icon: Netlify,
    category: "deployment",
  },
];
