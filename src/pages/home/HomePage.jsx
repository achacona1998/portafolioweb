import Background from "../../components/assets/Background";
import { Layout, Navbar, Footer } from "../../layout";
import {
  Home,
  About,
  HowIWork,
  Services,
  Testimonials,
  Portfolio,
  Contact,
} from "../../sections";

export default function HomePage() {
  return (
    <Layout
      title="Portfolio - Desarrollador Frontend"
      description="Desarrollador frontend orientado a resultados: proyectos web, e-commerce y sistemas pensados para hacer crecer tu negocio."
      keywords="desarrollador frontend, desarrollo web, portfolio, React, performance, SEO técnico, e-commerce, acha dev">
      <Background />
      <main className="relative">
        <Navbar />
        <Home />
        <About />
        <HowIWork />
        <Services />
        <Testimonials />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </Layout>
  );
}
