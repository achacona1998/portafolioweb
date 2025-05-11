import { Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/projects/ProjectPage";

// Map component names to actual components
const componentMap = {
  HomePage,
  ProjectPage,
};

export const mapRoutes = (routes) => {
  return routes.map((route, index) => {
    const Component = componentMap[route.element];
    return (
      <Route
        key={index}
        path={route.path}
        element={<Component />}
        exact={route.exact}
      />
    );
  });
};