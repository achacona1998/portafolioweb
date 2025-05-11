import { memo } from "react";

export const CertificatesGrid = memo(({ certificates, isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 md:grid-cols-3">
      {certificates.length > 0 &&
        certificates.map((certificate, index) => (
          <div
            className="overflow-hidden rounded-sm border backdrop-blur-sm bg-gradient-to-r from-[#330008]/40 to-[#77001A]/40 border-white/10 aspect-auto flex justify-center items-center p-1"
            data-aos="fade-up"
            key={index}>
            <img
              alt={certificate.name || "Certificate"}
              src={certificate.foto}
              loading="lazy"
              className="object-contain"
            />
          </div>
        ))}
    </div>
  );
});