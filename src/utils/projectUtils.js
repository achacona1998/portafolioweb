export const extractProjectData = (project) => {
  if (!project) return null;

  const { titulo, descripcion, imagen, tecnologias, enlace, github, análisis, datos, pruebas } = project;

  return {
    title: titulo,
    description: descripcion,
    image: imagen,
    technologies: tecnologias,
    liveUrl: enlace,
    githubUrl: github,
    analysis: análisis,
    data: datos,
    tests: pruebas,
  };
};
