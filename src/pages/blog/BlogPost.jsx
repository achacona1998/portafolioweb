import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../../layout";
import Background from "../../components/assets/Background";
import {
  getPostBySlug,
  incrementBlogViewCount,
} from "../../services/blogService";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await getPostBySlug(slug);

        if (!data) {
          setPost(null);
          setError("Artículo no encontrado.");
          return;
        }

        setPost(data);
        setError(null);

        if (data.id) {
          incrementBlogViewCount(data.id).catch((err) =>
            console.error("Error incrementing view count:", err),
          );
        }
      } catch (err) {
        console.error("Error loading blog post:", err);
        setError("No se pudo cargar el artículo.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const title = post ? `${post.title} | Blog` : "Artículo no encontrado | Blog";

  return (
    <Layout title={title} description={post?.excerpt}>
      <Background />
      <main className="relative min-h-screen">
        <section className="pt-24 pb-20">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            {loading && (
              <p className="text-sm text-gray-400">Cargando artículo...</p>
            )}

            {!loading && error && !post && (
              <div className="max-w-2xl">
                <h1 className="text-3xl font-bold text-white">
                  Artículo no encontrado
                </h1>
                <p className="mt-4 text-gray-400">
                  {error}
                </p>
                <Link
                  to="/blog"
                  className="inline-flex mt-6 text-sm font-medium text-[#FF4D6A] hover:text-[#FF6F8A]">
                  Volver al blog
                </Link>
              </div>
            )}

           {!loading && post && (
  <article className="max-w-3xl mx-auto">

    <Link
      to="/blog"
      className="inline-flex mb-6 text-sm font-medium text-[#FF4D6A] hover:text-[#FF6F8A]"
    >
      ← Volver al blog
    </Link>

    {/* IMAGEN DESTACADA */}
    {post.featured_image && (
      <div className="overflow-hidden mb-8 rounded-2xl border border-[#77001A]/30 shadow-inner shadow-black/40">
        <img
          src={post.featured_image}
          alt={post.title}
          className="object-cover w-full max-h-[420px]"
          loading="lazy"
        />
      </div>
    )}

    {/* TÍTULO */}
    <h1 className="text-3xl font-bold text-white md:text-4xl">
      {post.title}
    </h1>

    {/* META INFO */}
    <div className="flex flex-wrap gap-3 items-center mt-4 text-sm text-gray-400">
      <span>
        {post.published_at
          ? formatDate(post.published_at)
          : "Sin fecha"}
      </span>
      <span>•</span>
      <span>
        {post.reading_time
          ? `${post.reading_time} min`
          : "Lectura rápida"}
      </span>
    </div>

    {/* TAGS */}
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

    {/* CONTENIDO */}
    <div className="mt-8 space-y-4 leading-relaxed text-gray-300 whitespace-pre-line">
      {post.content}
    </div>

  </article>
)}
          </div>
        </section>
      </main>
    </Layout>
  );
}
