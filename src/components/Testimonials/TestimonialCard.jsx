import { memo } from "react";

export const TestimonialCard = memo(({ name, role, content, avatar }) => {
  return (
    <div
      className="relative p-6 rounded-xl bg-gradient-to-b from-[#14020A] to-[#050505] backdrop-blur-sm border border-[#77001A]/40 shadow-md shadow-black/40 hover:shadow-[#77001A]/60 hover:border-[#FF4D6A]/80 hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-300 group"
      data-aos="fade-up">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#330008] via-[#77001A] to-[#FF4D6A] rounded-xl blur opacity-20 group-hover:opacity-40 group-hover:blur-md transition-all duration-300"></div>
      <div className="relative flex items-start gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-black/40 border border-white/10 ring-2 ring-transparent group-hover:ring-[#FF4D6A]/60 transition-all duration-300">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full"></div>
          )}
        </div>
        <div className="flex-1">
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
            {content}
          </p>
          <div className="mt-4">
            <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BBBBBB]">
              {name}
            </div>
            <div className="text-xs text-gray-400">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
});
