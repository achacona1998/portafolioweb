import { Code2 } from "lucide-react";
import { TbWorld } from "react-icons/tb";
import { PiMedalBold } from "react-icons/pi";
import { Years_of_experience } from "../utils/Years_of_experience";

export const getAboutData = (projectCount, certificatesCount) => [
  {
    icon: Code2,
    title: "Total Projects",
    description: "Completed projects showcase expertise",
    data: projectCount,
  },
  {
    icon: PiMedalBold,
    title: "Certificates",
    description: "Professional certifications and courses completed",
    data: certificatesCount,
  },
  {
    icon: TbWorld,
    title: "Years of experience",
    description: "Years of professional development experience",
    data: Years_of_experience(),
  },
];
