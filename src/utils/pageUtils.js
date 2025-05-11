import { DEFAULT_PAGE_TITLE } from "../constants/projectPageData";

export const getProjectPageTitle = (project) => {
  return project && project.titulo
    ? `Project - ${project.titulo}`
    : DEFAULT_PAGE_TITLE;
};
