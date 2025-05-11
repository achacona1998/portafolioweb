import { memo } from "react";

export const ProjectImage = memo(({ image, title }) => {
  if (!image) return null;
  
  return (
    <div className="overflow-hidden mb-8 rounded-xl border shadow-xl border-white/10">
      <img
        src={image}
        alt={`Image of ${title}`}
        className="w-full h-auto object-cover max-h-[500px]"
        loading="lazy"
      />
    </div>
  );
});