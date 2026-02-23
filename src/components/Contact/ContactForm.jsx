import { memo, useEffect, useState } from "react";
import { Send, ArrowLeft, ArrowRight } from "lucide-react";
import { useContactForm } from "../../hooks/useContactForm";
import { useContactModal } from "../../context/ContactModalContext";

export const ContactForm = memo(() => {
  const {
    formData,
    loading,
    messageStatus,
    handleSubmit,
    handleChange,
    resetStatus,
  } = useContactForm();

  const { closeModal } = useContactModal();

  const [step, setStep] = useState(1);

  const canGoNextFromStep1 =
    formData.name.trim().length > 0 && formData.email.trim().length > 0;

  const canGoNextFromStep2 = formData.projectType.trim().length > 0;

  const handleNext = () => {
    if (step === 1 && !canGoNextFromStep1) return;
    if (step === 2 && !canGoNextFromStep2) return;
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    if (!messageStatus) return;

    const timer = setTimeout(() => {
      if (messageStatus === "success") {
        closeModal();
      }
      resetStatus();
    }, 3000);

    return () => clearTimeout(timer);
  }, [messageStatus, resetStatus, closeModal]);

  return (
    <div
      className="relative p-8 rounded-xl bg-[#0A0A0A]/70 backdrop-blur-sm border border-[#77001A]/20"
      data-aos="fade-up"
      data-aos-delay="300">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#330008] to-[#77001A] rounded-xl blur opacity-20"></div>
      <form onSubmit={handleSubmit} className="relative space-y-6">
        <div className="flex items-center justify-between mb-2 text-xs text-gray-400 uppercase tracking-wide">
          <span>
            Paso {step} de 3
          </span>
          <div className="flex gap-1">
            <span className={`h-1.5 w-6 rounded-full ${step >= 1 ? "bg-[#77001A]" : "bg-gray-700"}`} />
            <span className={`h-1.5 w-6 rounded-full ${step >= 2 ? "bg-[#77001A]" : "bg-gray-700"}`} />
            <span className={`h-1.5 w-6 rounded-full ${step >= 3 ? "bg-[#77001A]" : "bg-gray-700"}`} />
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-300">
                ¿Cómo te llamas?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#77001A] focus:ring-1 focus:ring-[#77001A] transition-colors"
                placeholder="Ej: Ana, Carlos..."
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-300">
                ¿A qué correo te respondo?
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#77001A] focus:ring-1 focus:ring-[#77001A] transition-colors"
                placeholder="tu@correo.com"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div>
              <p className="mb-3 text-sm font-medium text-gray-300">
                ¿Qué tipo de proyecto necesitas?
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  "Página web",
                  "Tienda online",
                  "Sistema a medida",
                  "Otro",
                ].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      handleChange({
                        target: { name: "projectType", value: option },
                      })
                    }
                    className={`w-full px-4 py-2 rounded-lg border text-sm ${
                      formData.projectType === option
                        ? "bg-[#77001A] border-[#77001A] text-white"
                        : "bg-white/5 border-white/10 text-gray-300 hover:border-[#77001A]/60"
                    } transition-colors`}>
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-gray-300">
                ¿Cuál es tu presupuesto aproximado?
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {[
                  "Hasta 300 USD",
                  "300 - 800 USD",
                  "Más de 800 USD",
                ].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      handleChange({
                        target: { name: "budgetRange", value: option },
                      })
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm ${
                      formData.budgetRange === option
                        ? "bg-white/10 border-[#77001A] text-white"
                        : "bg-white/5 border-white/10 text-gray-300 hover:border-[#77001A]/60"
                    } transition-colors`}>
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-gray-300">
                ¿Para cuándo te gustaría tenerlo listo?
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {[
                  "Lo antes posible",
                  "1 - 2 meses",
                  "Sin prisa, pero con fecha",
                ].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      handleChange({
                        target: { name: "timeline", value: option },
                      })
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm ${
                      formData.timeline === option
                        ? "bg-white/10 border-[#77001A] text-white"
                        : "bg-white/5 border-white/10 text-gray-300 hover:border-[#77001A]/60"
                    } transition-colors`}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="extraDetails"
                className="block mb-2 text-sm font-medium text-gray-300">
                Cuéntame brevemente sobre tu proyecto
              </label>
              <textarea
                id="extraDetails"
                name="extraDetails"
                value={formData.extraDetails}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#77001A] focus:ring-1 focus:ring-[#77001A] transition-colors resize-none"
                placeholder="Ej: Necesito una web para mi negocio de..., quiero vender..., ya tengo logo/dominio, etc."
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-4 pt-2">
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 1 || loading}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm ${
              step === 1
                ? "border-white/5 text-gray-500 cursor-default"
                : "border-white/10 text-gray-300 hover:border-[#77001A]/60 hover:text-white"
            } transition-colors`}>
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>

          {step < 3 && (
            <button
              type="button"
              onClick={handleNext}
              disabled={(step === 1 && !canGoNextFromStep1) || (step === 2 && !canGoNextFromStep2) || loading}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-[#77001A] to-[#AA0020] text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60">
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {step === 3 && (
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-[#77001A] to-[#AA0020] text-white text-sm font-medium hover:opacity-90 transition-opacity">
              {loading ? "Enviando..." : (
                <>
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </>
              )}
            </button>
          )}
        </div>

        {messageStatus === "success" && (
          <div className="p-3 mt-4 text-green-400 rounded-lg bg-green-500/20">
            ✅ Mensaje enviado correctamente!
          </div>
        )}
        {messageStatus === "error" && (
          <div className="p-3 mt-4 text-red-400 rounded-lg bg-red-500/20">
            ❌ Error al enviar el mensaje. Por favor pruebe otra vez.
          </div>
        )}
      </form>
    </div>
  );
});
