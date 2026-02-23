import { useState, useEffect } from "react";
import { projectsLength } from "../services/projectService";

export const useProjectCount = () => {
  const [projectCount, setProjectCount] = useState("...");
  
  useEffect(() => {
    const fetchProjectCount = async () => {
      try {
        const count = await projectsLength();
        setProjectCount(count.toString());
      } catch (error) {
        console.error("Error fetching project count:", error);
        setProjectCount("0");
      }
    };

    fetchProjectCount();
  }, []);
  
  return projectCount;
};
