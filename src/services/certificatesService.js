import { supabase } from "../utils/supabaseClient";
import { uploadImage } from "./storageService";

const TABLE_NAME = "certificados";

// Crear certificado
export const createCertificate = async (certificateData, imageFile) => {
  try {
    let imageUrl = certificateData.foto || null;

    if (imageFile) {
      imageUrl = await uploadImage(imageFile, "certificados");
    }

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert({
        ...certificateData,
        foto: imageUrl,
      })
      .select("*");

    if (error) throw error;
    return data[0];
  } catch (error) {
    throw new Error(`Error creating certificate: ${error.message}`);
  }
};

// Obtener todos los certificados
export const getCertificates = async () => {
  try {
    const { data, error } = await supabase.from(TABLE_NAME).select("*");

    if (error) throw error;
    return data;
  } catch (error) {
    throw new Error(`Error getting certificates: ${error.message}`);
  }
};

// Obtener el número de certificados
export const certificatesLength = async () => {
  try {
    const certificatesData = await getCertificates();
    return certificatesData.length;
  } catch (error) {
    console.error("Error getting certificates length:", error);
    return 0;
  }
};

// Obtener certificado por ID
export const getCertificateById = async (id) => {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    throw new Error(`Error getting certificate: ${error.message}`);
  }
};

// Actualizar certificado
export const updateCertificate = async (id, certificateData, imageFile) => {
  try {
    let imageUrl = certificateData.foto;

    if (imageFile) {
      imageUrl = await uploadImage(imageFile, "certificados");
    }

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .update({
        ...certificateData,
        foto: imageUrl,
      })
      .eq("id", id)
      .select("*");

    if (error) throw error;
    return data[0];
  } catch (error) {
    throw new Error(`Error updating certificate: ${error.message}`);
  }
};

// Eliminar certificado
export const deleteCertificate = async (id) => {
  try {
    const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id);

    if (error) throw error;
    return true;
  } catch (error) {
    throw new Error(`Error deleting certificate: ${error.message}`);
  }
};
