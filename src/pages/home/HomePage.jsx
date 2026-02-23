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
    <Layout title="Portfolio - Frontend Developer">
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
