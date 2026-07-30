import Link from "next/link";

import FadeIn from "@/components/common/FadeIn";
import { featuredProductsContent } from "@/data/home";
import { productCategories } from "@/data/products";

export default function FeaturedProducts() {
  const featuredProducts = productCategories.flatMap((category) => {
    const firstSubcategory = category.subcategories[0];

    if (
      !firstSubcategory ||
      firstSubcategory.products.length === 0
    ) {
      return [];
    }

    return [
      {
        category,
        subcategory: firstSubcategory,
        product: firstSubcategory.products[0],
      },
    ];
  });

  return (
    <section className="relative overflow-hidden border-t border-zinc-100 bg-[#F8F9FB]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <FadeIn>
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              {featuredProductsContent.heading}
            </h2>

            <p className="mt-4 max-w-lg text-base font-light leading-relaxed text-zinc-500">
              {featuredProductsContent.description}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {featuredProducts
            .slice(0, 5)
            .map(({ product, category, subcategory }, index) => (
              <FadeIn key={product.id} delay={index * 0.06}>
                <Link
                  href={`/products/${category.slug}/${subcategory.slug}/${product.slug}`}
                  className="group relative flex aspect-[3/4] cursor-pointer flex-col justify-end overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-zinc-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-zinc-300"
                >
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
                  />

                  {/* Light gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 top-0 z-20 w-0.5 origin-center scale-y-0 bg-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

                

                  {/* Content */}
                  <div className="relative z-10 translate-y-[58px] p-4 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0">
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-blue-600">
                      {category.name}
                    </span>

                    <h3 className="mt-2 line-clamp-2 text-[13px] font-semibold leading-tight tracking-tight text-zinc-900">
                      {product.name}
                    </h3>

                    <div className="mb-3 mt-3 h-px w-6 bg-blue-500 transition-all duration-500 group-hover:w-14" />

                    <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <p className="line-clamp-2 text-[10px] leading-5 text-zinc-600">
                        {subcategory.name}
                      </p>

                      <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold tracking-wide text-blue-600">
                        <span>{featuredProductsContent.actionLabel}</span>

                        <svg
                          className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
}