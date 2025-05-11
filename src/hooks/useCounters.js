import { useState, useEffect } from "react";
import { projectsLength } from "../services/projectService";
import { certificatesLength } from "../services/certificatesService";

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

export const useCertificatesCount = () => {
  const [certificatesCount, setCertificatesCount] = useState("...");
  
  useEffect(() => {
    const fetchCertificatesCount = async () => {
      try {
        const count = await certificatesLength();
        setCertificatesCount(count.toString());
      } catch (error) {
        console.error("Error fetching certificates count:", error);
        setCertificatesCount("0");
      }
    };
    
    fetchCertificatesCount();
  }, []);
  
  return certificatesCount;
};