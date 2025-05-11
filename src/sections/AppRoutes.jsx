import { Routes, Route } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/projects/ProjectPage";

export const AppRoutes = () => {
  const location = useScrollToTop();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
    </Routes>
  );
};