export const extractProjectData = (project) => {
  if (!project) return null;

  const { titulo, descripcion, imagen, tecnologias, enlace, github } = project;

  return {
    title: titulo,
    description: descripcion,
    image: imagen,
    technologies: tecnologias,
    liveUrl: enlace,
    githubUrl: github,
  };
};
