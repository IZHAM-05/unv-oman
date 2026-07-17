import Link from "next/link";

import FadeIn from "@/components/common/FadeIn";
import { subcategoryCardContent } from "@/data/products";
import type { Subcategory } from "@/types/product";

type SubcategoryCardProps = {
  subcategory: Subcategory;
  categorySlug: string;
  index?: number;
};

export default function SubcategoryCard({
  subcategory,
  categorySlug,
  index = 0,
}: SubcategoryCardProps) {
  return (
    <FadeIn delay={index * 0.08}>
      <Link
        href={`/products/${categorySlug}/${subcategory.slug}`}
        className="group relative flex min-h-[280px] cursor-pointer flex-col justify-end overflow-hidden"
      >
        <img
          src={subcategory.image}
          alt={subcategory.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/45 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

        <div className="absolute inset-0 bg-blue-600/0 transition-colors duration-700 group-hover:bg-blue-600/10" />

        <div className="absolute right-4 top-4 z-10 text-[44px] font-black leading-none tracking-tighter text-white/[0.06] transition-colors duration-500 group-hover:text-white/10">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="relative z-10 translate-y-[56px] p-5 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0">
          <h3 className="text-xl font-bold tracking-tight text-white">
            {subcategory.name}
          </h3>

          <div className="mb-3 mt-3 h-0.5 w-10 bg-blue-500 transition-all duration-500 group-hover:w-20" />

          <div className="opacity-0 transition-all duration-500 group-hover:opacity-100">
            <p className="max-w-md text-xs leading-6 text-white/70">
              {subcategoryCardContent.descriptionPrefix}{" "}
              {subcategory.name}.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold tracking-wide text-white">
              <span>
                {subcategoryCardContent.actionLabel}
              </span>

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
  );
}