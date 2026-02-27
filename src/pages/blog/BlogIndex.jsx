import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Footer } from "../../layout";
import Background from "../../components/assets/Background";
import { ArrowLeft } from "lucide-react";
import { getPublishedPosts } from "../../services/blogService";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

export default function BlogIndex() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { posts: data } = await getPublishedPosts({
          page: 1,
          pageSize: 30,
          featuredFirst: true,
        });
        setPosts(data);
        setError(null);
      } catch (err) {
        console.error("Error loading blog posts:", err);
        setError("No se pudieron cargar los artículos del blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Layout
      title="Blog - Artículos sobre web, SaaS y e-commerce"
      description="Artículos donde comparto aprendizajes y buenas prácticas sobre desarrollo web, plataformas SaaS y e-commerce.">
      <Background />
      <main className="relative min-h-screen">
        <section className="pt-24 pb-20">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 mb-10 md:flex-row md:items-start md:justify-between">
              <header className="max-w-2xl" data-aos="fade-up">
                <p className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-[#77001A]/15 text-[#FF4D6A] ring-1 ring-[#FF4D6A]/30">
                  Artículos recientes
                </p>
                <h1 className="mt-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6A] via-[#FF9A8B] to-[#FFE29F] md:text-4xl lg:text-5xl py-2">
                  Blog
                </h1>
                <p className="mt-3 text-sm text-transparent bg-clip-text bg-white md:text-base">
                  Ideas, procesos y buenas prácticas para proyectos web
                  orientados a negocio.
                </p>
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

            {error && (
              <p className="mb-6 text-sm text-red-400">{error}</p>
            )}

            {loading && (
              <p className="text-sm text-gray-400">Cargando artículos...</p>
            )}

            {!loading && !error && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
               <article
  key={post.slug}
  className="relative overflow-hidden rounded-xl border border-white/10 bg-[#050505]/80 backdrop-blur-md shadow-inner shadow-black/40 transition-transform duration-300 group hover:-translate-y-0.5"
  data-aos="fade-up"
>
  <div className="absolute inset-0 opacity-40 pointer-events-none bg-gradient-to-r from-[#330008]/40 to-[#77001A]/40" />

  <div className="relative">
    {/* Imagen */}
    {post.featured_image && (
      <div className="overflow-hidden relative h-48 sm:h-56">
        <img
          src={post.featured_image}
          alt={`Imagen de ${post.title}`}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>
    )}

    <div className="p-6">
      <div className="flex gap-2 items-center mb-3 text-xs text-gray-400">
        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px]">
          {post.published_at
            ? formatDate(post.published_at)
            : "Sin fecha"}
        </span>
        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px]">
          {post.reading_time
            ? `${post.reading_time} min`
            : "Lectura rápida"}
        </span>
      </div>

      <h2 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BBBBBB]">
        {post.title}
      </h2>

      <p className="mt-2 text-sm text-gray-300">
        {post.excerpt}
      </p>

      {post.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] rounded-full bg-[#77001A]/20 border border-[#77001A]/40 text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-6">
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-gradient-to-r from-[#77001A] to-[#AA0020] hover:from-[#AA0020] hover:to-[#77001A] shadow-lg shadow-[#77001A]/30 transition-all duration-300"
        >
          Leer artículo →
        </Link>
      </div>
    </div>
  </div>
</article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
