import { useState, useEffect } from "react";
import { getProjectById } from "../services/projectService";
import {
  PROJECT_NOT_FOUND_ERROR,
  GENERIC_ERROR_MESSAGE,
} from "../constants/projectPageData";

export const useProjectDetails = (projectId) => {
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        setLoading(true);
        const data = await getProjectById(projectId);
        if (data) {
          setProject(data);
          setError(null);
        } else {
          setError(PROJECT_NOT_FOUND_ERROR);
        }
      } catch (e) {
        console.error("Error fetching project details:", e);
        setError(GENERIC_ERROR_MESSAGE);
      } finally {
        setLoading(false);
      }
    }

    if (projectId) {
      fetchProject();
    }

    return () => {
      // Cleanup if needed
    };
  }, [projectId]);

  return { project, error, loading };
};
