import { memo, useEffect, useState } from "react";
import SectionTitle from "../components/assets/SectionTitle";
import { GlassCard } from "../components/assets/GlassCard";
import { supabase } from "../utils/supabaseClient";
import { LoadingState } from "../components/Portfolio/LoadingState";
import { ErrorState } from "../components/Portfolio/ErrorState";

const TABLE_NAME = "productos";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from(TABLE_NAME)
          .select(
            "id,nombre,descripcion,logo_url,sitio_url,activo,orden,created_at",
          )
          .eq("activo", true)
          .order("orden", { ascending: true })
          .order("created_at", { ascending: false });

        if (fetchError) throw fetchError;

        const formatted = (data || []).map((p) => ({
          id: p.id,
          name: p.nombre || "",
          description: p.descripcion || "",
          logo: p.logo_url || "",
          href: p.sitio_url || "",
        }));

        if (isMounted) setProducts(formatted);
      } catch (err) {
        if (!isMounted) return;
        console.error("Error loading products:", err);
        setError(
          "No se pudieron cargar los productos. Por favor, inténtalo de nuevo más tarde.",
        );
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="Products" className="py-20 md:py-28">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <SectionTitle
          title="Productos"
          description="Productos de mi marca, con acceso directo al sitio."
        />

        <LoadingState isLoading={loading} />
        <ErrorState error={error} />

        {!loading && !error && products.length === 0 && (
          <div className="mt-10 text-sm text-center text-gray-400">
            Aún no hay productos publicados.
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
              const content = (
                <div className="p-6 space-y-4">
                  <div className="flex gap-4 items-center">
                    <div className="flex overflow-hidden justify-center items-center w-28 h-28 rounded-2xl border bg-white/5 border-white/10 shrink-0">
                      <img
                        src={product.logo}
                        alt={product.name}
                        loading="lazy"
                        className="object-contain p-2 w-full h-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-white truncate">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              );

              if (!product.href) {
                return (
                  <GlassCard
                    key={product.id}
                    className="rounded-2xl opacity-60"
                    overlayRoundedClass="rounded-2xl"
                    hover={false}
                    data-aos="fade-up"
                    data-aos-delay={index * 120}>
                    {content}
                  </GlassCard>
                );
              }

              return (
                <GlassCard
                  key={product.id}
                  as="a"
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D6A]/60"
                  overlayRoundedClass="rounded-2xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 120}>
                  {content}
                </GlassCard>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Products);
