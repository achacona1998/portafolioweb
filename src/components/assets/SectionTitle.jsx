import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="mb-12 text-center" data-aos="fade-up">
      <h1 className="mb-2 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BBBBBB] sm:text-5xl py-2">
        {title}
      </h1>
      <p className="mx-auto max-w-2xl text-gray-400">{description}</p>
    </div>
  );
};

export default SectionTitle;
