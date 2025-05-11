import About from "../sections/About";
import Background from "../components/assets/Background";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Home from "../sections/Home";
import Navbar from "../sections/Navbar";
import Portfolio from "../sections/Portfolio";
import Layout from "../layout/Layout";

export default function HomePage() {
  return (
    <Layout title="Portfolio - Frontend Developer">
      <Background />
      <main className="relative">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </Layout>
  );
}
