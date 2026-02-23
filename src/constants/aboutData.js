import { Code2 } from "lucide-react";
import { TbWorld } from "react-icons/tb";
import { Years_of_experience } from "../utils/Years_of_experience";

export const getAboutData = (projectCount) => {
  const items = [
    {
      icon: Code2,
      title: "Proyectos Totales",
      description: "Proyectos web, SaaS y e-commerce completados",
      data: projectCount,
    },
    {
      icon: TbWorld,
      title: "Años de experiencia",
      description: "Experiencia construyendo productos digitales",
      data: Years_of_experience(),
    },
  ];

  return items;
};
