import { useState, useEffect } from "react";
import { getProjects } from "../services/projectService";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projectsData = await getProjects();

        // Map the data from Supabase to the format expected by the component
        const formattedProjects = projectsData.map((project) => ({
          title: project.titulo || "",
          description: project.descripcion || "",
          image: project.imagen || project.imagen_url || "",
          technologies: project.tecnologias || [],
          githubUrl: project.github || "",
          liveUrl: project.enlace || "",
          analysis: project.análisis || "",
          data: project.datos || "",
          tests: project.pruebas || "",
          category: project.categoria || project.category || null,
          id: project.id,
        }));

        setProjects(formattedProjects);
      } catch (err) {
        console.error("Error loading projects:", err);
        setError(
          "No se pudieron cargar los proyectos. Por favor, inténtalo de nuevo más tarde.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
