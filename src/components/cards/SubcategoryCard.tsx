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
        className="group relative flex min-h-[280px] cursor-pointer flex-col justify-end overflow-hidden rounded-xl shadow-sm ring-1 ring-zinc-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-zinc-300"
      >
        {/* Image - clear and full */}
        <img
          src={subcategory.image}
          alt={subcategory.name}
          className="absolute inset-0 h-full w-full object-contain p-10 transition-transform duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
        />

        {/* Very subtle bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/10 via-zinc-950/5 to-transparent" />

        {/* Decorative left accent line */}
        <div className="absolute bottom-0 left-0 top-0 z-20 w-0.5 origin-center scale-y-0 bg-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

     
        {/* Content - text now black */}
        <div className="relative z-10 translate-y-[56px] p-5 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0">
          <h3 className="text-xl font-bold tracking-tight text-black">
            {subcategory.name}
          </h3>

          <div className="mb-3 mt-3 h-0.5 w-10 bg-blue-500 transition-all duration-500 group-hover:w-20" />

          <div className="opacity-0 transition-all duration-500 group-hover:opacity-100">
            <p className="max-w-md text-xs leading-6 text-black/70">
              {subcategoryCardContent.descriptionPrefix}{" "}
              {subcategory.name}.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600">
              <span>{subcategoryCardContent.actionLabel}</span>

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