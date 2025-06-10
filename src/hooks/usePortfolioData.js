import { useState, useEffect } from "react";
import { getProjects } from "../services/projectService";
import { getCertificates } from "../services/certificatesService";

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
          image: project.imagen || "",
          technologies: project.tecnologias || [],
          githubUrl: project.github || "",
          liveUrl: project.enlace || "",
          id: project.id,
        }));

        setProjects(formattedProjects);
      } catch (err) {
        console.error("Error loading projects:", err);
        setError(
          "No se pudieron cargar los proyectos. Por favor, inténtalo de nuevo más tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

export const useCertificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        setLoading(true);
        const certificatesData = await getCertificates();

        // Map the data from Supabase to the format expected by the component
        const formattedCertificates = certificatesData.map((certificate) => ({
          name: certificate.name || "",
          procedencia: certificate.procedencia || "",
          foto: certificate.foto || "",
        }));

        setCertificates(formattedCertificates);
      } catch (err) {
        console.error("Error loading certificates:", err);
        setError(
          "No se pudieron cargar los certificados. Por favor, inténtalo de nuevo más tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  return { certificates, loading, error };
};
