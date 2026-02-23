import React from "react";
import { Layout, Footer } from "../../layout";
import Background from "../../components/assets/Background";
import { PROCESS_STEPS } from "../../constants/howIWorkData";
import { Link } from "react-router-dom";
import { useContactModal } from "../../context/ContactModalContext";
import { Search, ClipboardList, Hammer, Rocket } from "lucide-react";

export default function HowIWorkPage() {
  return (
    <Layout
      title="Cómo trabajo - Caso de estudio"
      description="Conoce en detalle el proceso que sigo para llevar un proyecto web desde la idea hasta el lanzamiento."
      keywords="cómo trabajo, proceso de trabajo, desarrollo web orientado a negocio, caso de estudio, acha dev">
      <Background />
      <HowIWorkContent />
      <Footer />
    </Layout>
  );
}

function HowIWorkContent() {
  const { openModal } = useContactModal();

  const ICONS = {
    discover: Search,
    plan: ClipboardList,
    build: Hammer,
    launch: Rocket,
  };

  return (
    <main className="relative min-h-screen scroll-smooth">
      <section className="pt-24 pb-20">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <header className="mb-10 max-w-3xl" data-aos="fade-up">
            <p className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-[#77001A]/15 text-[#FF4D6A] ring-1 ring-[#FF4D6A]/30">
              Caso de estudio
            </p>
            <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Cómo trabajo proyectos
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6A] via-[#FF9A8B] to-[#FFE29F] py-2">
                web orientados a negocio
              </span>
            </h1>
            <p className="mt-4 text-sm text-gray-400 md:text-base">
              Más que solo diseño o código, el foco está en entender qué quieres
              lograr con el proyecto y construir algo que realmente lo soporte.
            </p>
            <div className="flex flex-wrap gap-3 items-center mt-6">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex h-12 items-center justify-center gap-2 px-6 rounded-lg font-medium text-white bg-gradient-to-r from-[#77001A] to-[#AA0020] hover:from-[#AA0020] hover:to-[#77001A] shadow-lg shadow-[#77001A]/30 transform transition-all duration-300 hover:scale-105 active:scale-95">
                Iniciar proyecto
              </button>
              <Link
                to="/"
                className="inline-flex h-11 min-w-[44px] items-center justify-center gap-2 px-4 rounded-lg bg-black/60 backdrop-blur-sm border border-white/15 text-xs font-medium text-white hover:bg-black/80 hover:border-[#77001A]/60 transition-all duration-300"
                aria-label="Volver a la página principal">
                <span>Volver al inicio</span>
              </Link>
            </div>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <article className="space-y-8">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = ICONS[step.id] || Search;

                return (
                  <React.Fragment key={step.id}>
                    <section
                      className="relative p-6 rounded-xl bg-[#0A0A0A]/70 backdrop-blur-sm border border-[#77001A]/20"
                      data-aos="fade-up"
                      data-aos-delay={index * 120}>
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#330008] to-[#77001A] rounded-xl blur opacity-20" />
                      <div className="flex relative gap-4">
                        <div className="flex flex-col flex-shrink-0 items-center">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#77001A] text-xs font-semibold text-white shadow-md shadow-[#77001A]/40">
                            {index + 1}
                          </div>
                          {index < PROCESS_STEPS.length - 1 && (
                            <div className="mt-1 w-px flex-1 bg-gradient-to-b from-[#77001A] via-[#77001A]/40 to-transparent" />
                          )}
                        </div>
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#330008]/80 to-[#77001A]/60 text-white shadow-lg shadow-[#77001A]/40 ring-1 ring-white/10">
                              <Icon className="w-5 h-5" />
                            </div>
                          </div>
                          <div>
                            <h2 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BBBBBB]">
                              {step.title}
                            </h2>
                            <p className="mt-2 text-sm text-gray-300">
                              {step.description}
                            </p>
                            <div className="mt-4 space-y-2 text-sm text-gray-400">
                              {step.details.map((detail, indexDetail) => (
                                <p key={indexDetail}>{detail}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {index === 1 && (
                      <div
                        className="relative p-5 rounded-xl bg-[#0A0A0A]/80 backdrop-blur-md border border-[#77001A]/30"
                        data-aos="fade-up">
                        <p className="text-sm text-gray-300">
                          Si ves que este enfoque encaja con tu proyecto,
                          podemos revisar tu caso concreto y priorizar los
                          siguientes pasos juntos.
                        </p>
                        <button
                          type="button"
                          onClick={openModal}
                          className="mt-4 inline-flex h-12 items-center justify-center gap-2 px-6 rounded-lg font-medium text-white bg-gradient-to-r from-[#77001A] to-[#AA0020] hover:from-[#AA0020] hover:to-[#77001A] shadow-lg shadow-[#77001A]/30 transform transition-all duration-300 hover:scale-105 active:scale-95">
                          Contáctame
                        </button>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}

              <section className="space-y-3 text-sm text-gray-300">
                <h2 className="text-base font-semibold text-white">
                  Cómo se ve en un proyecto real
                </h2>
                <p>
                  En mis proyectos suelo empezar con una sesión breve donde
                  revisamos tu negocio, productos o servicios y qué papel tiene
                  la web o la plataforma en todo eso.
                </p>
                <p>
                  A partir de ahí, bajamos a tierra el alcance, priorizamos
                  funcionalidades y definimos entregables claros. Esto reduce
                  cambios de última hora y hace que el desarrollo sea más
                  fluido.
                </p>
              </section>
            </article>

            <aside className="space-y-6">
              <div className="p-6 rounded-xl bg-[#0A0A0A]/70 backdrop-blur-sm border border-[#77001A]/20">
                <h3 className="text-sm font-semibold text-white">
                  Qué puedes esperar trabajando conmigo
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-400">
                  <li>• Comunicación clara y actualizaciones periódicas.</li>
                  <li>
                    • Enfoque en resultados de negocio, no solo en estética.
                  </li>
                  <li>
                    • Propuestas honestas: lo que necesitas ahora y lo que puede
                    esperar.
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-[#0A0A0A]/70 backdrop-blur-sm border border-[#77001A]/20">
                <h3 className="text-sm font-semibold text-white">
                  ¿Te gustaría aplicar este proceso a tu proyecto?
                </h3>
                <p className="mt-3 text-sm text-gray-400">
                  Cuéntame brevemente sobre tu idea y vemos juntos si encaja con
                  este tipo de trabajo.
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex h-12 items-center justify-center gap-2 px-4 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#77001A] to-[#AA0020] hover:from-[#AA0020] hover:to-[#77001A] shadow-lg shadow-[#77001A]/30 transform transition-all duration-300 hover:scale-105 active:scale-95">
                    Hablar sobre tu proyecto
                  </button>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-gray-300 border border-white/10 rounded-lg hover:border-[#77001A]/60 hover:text-white transition-colors">
                    Volver al inicio
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
