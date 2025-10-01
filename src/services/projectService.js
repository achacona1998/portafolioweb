import { supabase } from "../utils/supabaseClient";
import { uploadImage } from "./storageService";

const TABLE_NAME = "proyectos";

// Transformar tecnologías a array
const transformTechnologies = (tech) => {
  if (Array.isArray(tech)) return tech.filter((t) => t.trim());
  if (typeof tech === "string") return tech.split(",").map((t) => t.trim());
  return [];
};

// Crear proyecto
export const createProject = async (projectData, imageFile) => {
  try {
    let imageUrl = projectData.imagen_url || null;

    if (imageFile) {
      imageUrl = await uploadImage(imageFile, "proyectos");
    }

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert({
        ...projectData,
        tecnologias: transformTechnologies(projectData.tecnologias),
        imagen_url: imageUrl,
      })
      .select("*");

    if (error) throw error;
    return data[0];
  } catch (error) {
    throw new Error(`Error creating project: ${error.message}`);
  }
};

// Obtener todos los proyectos
export const getProjects = async () => {
  try {
    const { data, error } = await supabase.from(TABLE_NAME).select("*");

    if (error) throw error;
    console.log(data);
    return data.map((project) => ({
      ...project,
      tecnologias: project.tecnologias || [],
      análisis: project.análisis || "",
      datos: project.datos || "",
      pruebas: project.pruebas || "",
    }));
  } catch (error) {
    throw new Error(`Error getting projects: ${error.message}`);
  }
};

// Fixed to properly handle the async nature of getProjects
export const projectsLength = async () => {
  try {
    const projectsData = await getProjects();
    console.log(projectsData);
    return projectsData.length;
  } catch (error) {
    console.error("Error getting projects length:", error);
    return 0;
  }
};

// Obtener proyecto por ID
export const getProjectById = async (id) => {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return {
      ...data,
      tecnologias: data.tecnologias || [],
      análisis: data.análisis || "",
      datos: data.datos || "",
      pruebas: data.pruebas || "",
    };
  } catch (error) {
    throw new Error(`Error getting project: ${error.message}`);
  }
};

// Actualizar proyecto
export const updateProject = async (id, projectData, imageFile) => {
  try {
    let imageUrl = projectData.imagen_url;

    if (imageFile) {
      imageUrl = await uploadImage(imageFile, "proyectos");
    }

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .update({
        ...projectData,
        tecnologias: transformTechnologies(projectData.tecnologias),
        imagen_url: imageUrl,
      })
      .eq("id", id)
      .select("*");

    if (error) throw error;
    return data[0];
  } catch (error) {
    throw new Error(`Error updating project: ${error.message}`);
  }
};

// Eliminar proyecto
export const deleteProject = async (id) => {
  try {
    const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id);

    if (error) throw error;
    return true;
  } catch (error) {
    throw new Error(`Error deleting project: ${error.message}`);
  }
};
