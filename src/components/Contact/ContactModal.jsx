import React, { memo, useEffect } from "react";
import { X } from "lucide-react";
import { useContactModal } from "../../context/ContactModalContext";
import { ContactForm } from "./ContactForm";

export const ContactModal = memo(() => {
  const { isOpen, closeModal } = useContactModal();

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [closeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
      />
      <div className="relative z-10 w-full max-w-2xl">
        <div className="relative p-6 rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#330008] to-[#77001A] rounded-2xl blur opacity-20" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BBBBBB]">
                Contáctame
              </h3>
              <button
                onClick={closeModal}
                aria-label="Cerrar modal de contacto"
                className="p-2 rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
});
