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
import {
  GitIcon,
  JestIcon,
  MySQLIcon,
  PostgresIcon,
  PytestIcon,
  PythonIcon,
  RenderIcon,
  SQLiteIcon,
  VercelIcon,
  VitestIcon,
  DockerIcon,
} from "../components/icons/AssetIcons";

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
  { name: "HTML5", icon: HTML, category: "frontend" },
  { name: "CSS3", icon: CSS3, category: "frontend" },
  { name: "JavaScript", icon: JS, category: "frontend" },
  { name: "TypeScript", icon: TypeScript, category: "frontend" },
  { name: "React", icon: React, category: "frontend" },
  { name: "Astro", icon: Astro, category: "frontend" },
  { name: "Tailwind CSS", icon: Tailwind, category: "frontend" },

  // Backend
  { name: "Node.js", icon: Node, category: "backend" },
  { name: "Express", icon: Express, category: "backend" },
  { name: "Django", icon: Django, category: "backend" },
  { name: "Python", icon: PythonIcon, category: "backend" },

  // Bases de datos
  { name: "MongoDB", icon: Mongo, category: "database" },
  { name: "Supabase", icon: Supabase, category: "database" },
  { name: "MySQL", icon: MySQLIcon, category: "database" },
  { name: "PostgreSQL", icon: PostgresIcon, category: "database" },
  { name: "SQLite", icon: SQLiteIcon, category: "database" },

  // Herramientas
  { name: "GitHub", icon: GitHub, category: "tools" },
  { name: "Git", icon: GitIcon, category: "tools" },
  { name: "Vite", icon: Vite, category: "tools" },
  { name: "MedusaJs", icon: Medusa, category: "tools" },
  { name: "Jest", icon: JestIcon, category: "tools" },
  { name: "Vitest", icon: VitestIcon, category: "tools" },
  { name: "Pytest", icon: PytestIcon, category: "tools" },

  // Despliegue
  { name: "Netlify", icon: Netlify, category: "deployment" },
  { name: "Docker", icon: DockerIcon, category: "deployment" },
  { name: "Vercel", icon: VercelIcon, category: "deployment" },
  { name: "Render", icon: RenderIcon, category: "deployment" },
];
