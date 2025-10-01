import React from "react";
import { useParams } from "react-router-dom";
import Background from "../../components/assets/Background";
import Navbar from "../../sections/Navbar";
import Footer from "../../sections/Footer";
import Layout from "../../layout/Layout";
import ProjectDetail from "../../sections/ProjectDetail";
import { useProjectDetails } from "../../hooks/useProjectDetails";
import { ErrorState } from "../../components/ProjectPage/ErrorState";
import { getProjectPageTitle } from "../../utils/pageUtils";
import { LoadingState } from "../../components/Portfolio/LoadingState";

export default function ProjectPage() {
  const { id } = useParams();
  const { project, error, loading } = useProjectDetails(id);
  const pageTitle = getProjectPageTitle(project);

  return (
    <Layout title={pageTitle}>
      <Background />
      <main className="relative pt-5 min-h-screen">
        <LoadingState isLoading={loading} />
        {!loading && project && <ProjectDetail project={project} />}
        {!loading && error && <ErrorState errorMessage={error} />}
      </main>
      <Footer />
    </Layout>
  );
}
