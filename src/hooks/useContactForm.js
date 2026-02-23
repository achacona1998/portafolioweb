import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budgetRange: "",
    timeline: "",
    extraDetails: "",
  });
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const composedMessage = `
Nombre: ${formData.name}
Correo: ${formData.email}
Tipo de proyecto: ${formData.projectType || "No especificado"}
Presupuesto estimado: ${formData.budgetRange || "No especificado"}
Plazo estimado: ${formData.timeline || "No especificado"}

Detalles adicionales:
${formData.extraDetails || "Sin detalles adicionales"}
      `.trim();

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: composedMessage,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      setMessageStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budgetRange: "",
        timeline: "",
        extraDetails: "",
      });
    } catch (error) {
      console.error(error);
      setMessageStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const resetStatus = () => {
    setMessageStatus("");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    formData,
    loading,
    messageStatus,
    handleSubmit,
    handleChange,
    resetStatus,
  };
};
