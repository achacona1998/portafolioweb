import { Code2 } from "lucide-react";
import { TbWorld } from "react-icons/tb";
import { PiMedalBold } from "react-icons/pi";
import { Years_of_experience } from "../utils/Years_of_experience";

export const getAboutData = (projectCount, certificatesCount) => [
  {
    icon: Code2,
    title: "Proyectos Totales",
    description: "Proyectos completados que muestran experiencia",
    data: projectCount,
  },
  {
    icon: PiMedalBold,
    title: "Certificados",
    description: "Certificaciones profesionales y cursos completados",
    data: certificatesCount,
  },
  {
    icon: TbWorld,
    title: "Años de experiencia",
    description: "Años de experiencia en desarrollo profesional",
    data: Years_of_experience(),
  },
];
