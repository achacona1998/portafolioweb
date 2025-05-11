import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verificar que las variables de entorno estén definidas
if (!supabaseUrl || !supabaseKey) {
  console.error(
    "Error: Supabase URL or API key is missing. Check your environment variables."
  );
}

// Crear y exportar el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);

// Función para verificar la conexión
export const checkSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase
      .from("proyectos")
      .select("count()", { count: "exact", head: true });

    if (error) {
      console.error("Supabase connection error:", error);
      return { connected: false, error };
    }

    return { connected: true, data };
  } catch (error) {
    console.error("Failed to connect to Supabase:", error);
    return { connected: false, error: error.message };
  }
};
