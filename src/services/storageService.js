import { supabase } from "../utils/supabaseClient";

// Subir imagen a Supabase Storage
export const uploadImage = async (file, path) => {
  try {
    // Use a single bucket name but organize files in different folders
    const bucketName = "proyectos";

    const fileName = `${Date.now()}_${file.name.replace(/\s+/g, "_")}`;
    const filePath = `${path}/${fileName}`;

    // Subir el archivo
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) throw error;

    // Obtener la URL pública del archivo
    const {
      data: { publicUrl },
    } = supabase.storage.from(bucketName).getPublicUrl(data.path);

    return publicUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error(`Error uploading image: ${error.message}`);
  }
};

// Eliminar imagen de Supabase Storage
export const deleteImage = async (url) => {
  try {
    // Use a single bucket name
    const bucketName = "proyectos";

    // Extraer el nombre del archivo de la URL
    const urlParts = url.split("/");
    const filePath = urlParts.slice(-2).join("/"); // Obtiene "path/filename"

    if (!filePath) throw new Error("Invalid file URL");

    // Eliminar el archivo
    const { error } = await supabase.storage
      .from(bucketName)
      .remove([filePath]);

    if (error) throw error;

    return true;
  } catch (error) {
    console.error("Error deleting image:", error);
    throw new Error(`Error deleting image: ${error.message}`);
  }
};
