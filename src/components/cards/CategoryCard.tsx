import Link from "next/link";

import { categoryCardContent } from "@/data/products";

type CategoryCardProps = {
  name: string;
  slug: string;
  description: string;
  index: number;
  imageUrl: string;
};

export default function CategoryCard({
  name,
  slug,
  description,
  index,
  imageUrl,
}: CategoryCardProps) {
  const categoryNumber = String(index + 1).padStart(
    categoryCardContent.numberPadding,
    categoryCardContent.numberPaddingCharacter,
  );

  return (
    <Link
      href={`/products/${slug}`}
      className={`group relative flex min-h-[300px] cursor-pointer flex-col justify-end overflow-hidden ${
        index === 0 || index === 1
          ? "md:col-span-2"
          : "md:col-span-2 lg:col-span-2"
      }`}
    >
      {/* Image - clear and full */}
      <img
        src={imageUrl}
        alt={name}
        className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
      />

      {/* Very subtle bottom gradient for text readability (almost invisible) */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/10 via-zinc-950/5 to-transparent" />

      {/* Decorative left accent line */}
      <div className="absolute bottom-0 left-0 top-0 z-20 w-0.5 origin-center scale-y-0 bg-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

  

      {/* Content - text now black */}
      <div className="relative z-10 h-[210px] translate-y-[116px] p-6 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0">
        <div className="flex h-[58px] items-end">
          <h3 className="line-clamp-2 text-xl font-bold leading-[1.25] tracking-tight text-black">
            {name}
          </h3>
        </div>

        <div className="mb-4 mt-4 h-0.5 w-10 bg-blue-500 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:w-20" />

        <div className="opacity-0 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:opacity-100">
          <p className="line-clamp-2 h-12 max-w-md text-xs leading-6 text-black/70">
            {description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600">
            <span>{categoryCardContent.actionLabel}</span>

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
  );
}