import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      setMessageStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setMessageStatus("error:");
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
