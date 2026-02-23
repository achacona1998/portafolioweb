import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout, Footer } from "../../layout";
import Background from "../../components/assets/Background";
import { ServicesMiniSection } from "../../components/Services/ServicesMiniSection";

export default function ServicesPage() {
  return (
    <Layout
      title="Servicios - Soluciones para tu negocio"
      description="Detalle de los servicios que ofrezco: páginas web, tiendas online, sistemas a medida y mejoras sobre proyectos existentes."
      keywords="servicios desarrollo web, tiendas online, sistemas a medida, mejoras de sitios, acha dev">
      <Background />
      <main className="relative min-h-screen">
        <section className="pt-24 pb-20">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 mb-10 md:flex-row md:items-start md:justify-between">
              <header className="max-w-3xl" data-aos="fade-up">
                <p className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-[#77001A]/15 text-[#FF4D6A] ring-1 ring-[#FF4D6A]/30">
                  Servicios en detalle
                </p>
                <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  Proyectos digitales que
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6A] via-[#FF9A8B] to-[#FFE29F]">
                    hacen crecer tu negocio
                  </span>
                </h1>
                <p className="mt-4 text-sm text-gray-400 md:text-base">
                  Aquí tienes una descripción más concreta de cada servicio,
                  para que veas exactamente cómo puede ayudarte a conseguir más
                  clientes, ahorrar tiempo y profesionalizar tu presencia
                  online.
                </p>
                <div className="flex flex-wrap gap-3 mt-6 text-xs md:text-sm">
                  <span className="px-3 py-1 text-gray-300 rounded-full border bg-white/5 border-white/10">
                    Páginas web modernas
                  </span>
                  <span className="px-3 py-1 text-gray-300 rounded-full border bg-white/5 border-white/10">
                    Tiendas online listas para vender
                  </span>
                  <span className="px-3 py-1 text-gray-300 rounded-full border bg-white/5 border-white/10">
                    Sistemas a medida para tu negocio
                  </span>
                </div>
              </header>

              <div className="md:pt-2" data-aos="fade-left">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-200 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#FF4D6A]/60 transition-colors duration-300 backdrop-blur-md">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Volver al inicio</span>
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <ServicesMiniSection />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
