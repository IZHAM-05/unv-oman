import Link from "next/link";

import FadeIn from "@/components/common/FadeIn";
import { featuredCategoriesContent } from "@/data/home";
import { productCategories } from "@/data/products";

export default function FeaturedCategories() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-100 bg-[#F8F9FB]">
      {/* Gradient top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Dot pattern matching Stats */}
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
              {featuredCategoriesContent.heading}
            </h2>

            <p className="mt-4 max-w-lg text-base font-light leading-relaxed text-zinc-500">
              {featuredCategoriesContent.description}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.slice(0, 4).map((category, index) => (
            <FadeIn key={category.id} delay={index * 0.1}>
              <Link
                href={`/products/${category.slug}`}
                className="group relative flex min-h-[420px] cursor-pointer flex-col justify-end overflow-hidden rounded-xl border border-zinc-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/10"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

                <div className="absolute inset-0 bg-blue-600/0 transition-colors duration-700 group-hover:bg-blue-600/10" />

                <div className="absolute bottom-0 left-0 top-0 z-20 w-0.5 origin-center scale-y-0 bg-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

                <div className="absolute right-4 top-4 z-10 font-mono text-[56px] font-light leading-none tracking-tighter text-white/[0.06] transition-colors duration-500 group-hover:text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10 translate-y-[80px] p-6 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0">
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {category.name}
                  </h3>

                  <div className="mb-4 mt-3 h-0.5 w-10 bg-blue-500 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:w-20" />

                  <div className="opacity-0 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:opacity-100">
                    <p className="max-w-md text-xs leading-6 text-white/70">
                      {category.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold tracking-wide text-white">
                      <span>{featuredCategoriesContent.actionLabel}</span>

                      <svg
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
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