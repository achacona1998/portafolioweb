import { supabase } from "../utils/supabaseClient";
import { uploadImage } from "./storageService";

const TABLE_NAME = "proyectos";

const transformTechnologies = (tech) => {
  if (Array.isArray(tech)) return tech.filter((t) => t.trim());
  if (typeof tech === "string") return tech.split(",").map((t) => t.trim());
  return [];
};

const normalizeArray = (value) => {
  if (Array.isArray(value)) return value.filter((t) => String(t).trim());
  if (typeof value === "string") return value.split(",").map((t) => t.trim()).filter(Boolean);
  return [];
};

const normalizeTimeline = (value) => {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
};

const withDefaults = (project) => {
  const imagen = project.imagen || project.imagen_url || null;
  return {
    ...project,
    imagen,
    imagen_url: project.imagen_url || imagen,
    tecnologias: project.tecnologias || [],
    análisis: project.análisis || "",
    datos: project.datos || "",
    pruebas: project.pruebas || "",
    categoria: project.categoria || project.category || null,
    subtitulo_hero: project.subtitulo_hero || "",
    tagline: project.tagline || "",
    cliente: project.cliente || "",
    impacto: project.impacto || "",
    fecha_inicio: project.fecha_inicio || null,
    fecha_fin: project.fecha_fin || null,
    gallery: normalizeArray(project.gallery || project.imagenes),
    timeline: normalizeTimeline(project.timeline),
    challenges: normalizeArray(project.challenges),
    solutions: normalizeArray(project.solutions),
  };
};

export const createProject = async (projectData, imageFile) => {
  try {
    let imageUrl = projectData.imagen_url || projectData.imagen || null;
    if (imageFile) {
      imageUrl = await uploadImage(imageFile, "proyectos");
    }

    const payload = {
      ...projectData,
      imagen_url: imageUrl,
      tecnologias: transformTechnologies(projectData.tecnologias),
      categoria: projectData.categoria || projectData.category || null,
      subtitulo_hero: projectData.subtitulo_hero || "",
      tagline: projectData.tagline || "",
      cliente: projectData.cliente || "",
      impacto: projectData.impacto || "",
      fecha_inicio: projectData.fecha_inicio || null,
      fecha_fin: projectData.fecha_fin || null,
      gallery: normalizeArray(projectData.gallery || projectData.imagenes),
      timeline: normalizeTimeline(projectData.timeline),
      challenges: normalizeArray(projectData.challenges),
      solutions: normalizeArray(projectData.solutions),
    };

    const { data, error } = await supabase.from(TABLE_NAME).insert(payload).select("*");
    if (error) throw error;
    return withDefaults(data[0]);
  } catch (error) {
    throw new Error(`Error creating project: ${error.message}`);
  }
};

export const getProjects = async () => {
  try {
    const { data, error } = await supabase.from(TABLE_NAME).select("*");
    if (error) throw error;
    return data.map((p) => withDefaults(p));
  } catch (error) {
    throw new Error(`Error getting projects: ${error.message}`);
  }
};

export const projectsLength = async () => {
  try {
    const projectsData = await getProjects();
    return projectsData.length;
  } catch (error) {
    console.error("Error getting projects length:", error);
    return 0;
  }
};

export const getProjectById = async (id) => {
  try {
    const { data, error } = await supabase.from(TABLE_NAME).select("*").eq("id", id).single();
    if (error) throw error;
    return withDefaults(data);
  } catch (error) {
    throw new Error(`Error getting project: ${error.message}`);
  }
};

export const updateProject = async (id, projectData, imageFile) => {
  try {
    let imageUrl = projectData.imagen_url || projectData.imagen || null;
    if (imageFile) {
      imageUrl = await uploadImage(imageFile, "proyectos");
    }

    const payload = {
      ...projectData,
      imagen_url: imageUrl,
      tecnologias: transformTechnologies(projectData.tecnologias),
      categoria: projectData.categoria || projectData.category || null,
      subtitulo_hero: projectData.subtitulo_hero || "",
      tagline: projectData.tagline || "",
      cliente: projectData.cliente || "",
      impacto: projectData.impacto || "",
      fecha_inicio: projectData.fecha_inicio || null,
      fecha_fin: projectData.fecha_fin || null,
      gallery: normalizeArray(projectData.gallery || projectData.imagenes),
      timeline: normalizeTimeline(projectData.timeline),
      challenges: normalizeArray(projectData.challenges),
      solutions: normalizeArray(projectData.solutions),
    };

    const { data, error } = await supabase.from(TABLE_NAME).update(payload).eq("id", id).select("*");
    if (error) throw error;
    return withDefaults(data[0]);
  } catch (error) {
    throw new Error(`Error updating project: ${error.message}`);
  }
};

export const deleteProject = async (id) => {
  try {
    const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id);
    if (error) throw error;
    return true;
  } catch (error) {
    throw new Error(`Error deleting project: ${error.message}`);
  }
};
