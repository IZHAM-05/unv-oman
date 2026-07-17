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
      <img
        src={imageUrl}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

      <div className="absolute inset-0 bg-blue-600/0 transition-colors duration-700 group-hover:bg-blue-600/10" />

      <div className="absolute right-5 top-5 z-10 text-[44px] font-black leading-none tracking-tighter text-white/[0.06] transition-colors duration-500 group-hover:text-white/10">
        {categoryNumber}
      </div>

      <div className="relative z-10 h-[210px] translate-y-[116px] p-6 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0">
        <div className="flex h-[58px] items-end">
          <h3 className="line-clamp-2 text-xl font-bold leading-[1.25] tracking-tight text-white">
            {name}
          </h3>
        </div>

        <div className="mb-4 mt-4 h-0.5 w-10 bg-blue-500 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:w-20" />

        <div className="opacity-0 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:opacity-100">
          <p className="line-clamp-2 h-12 max-w-md text-xs leading-6 text-white/70">
            {description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold tracking-wide text-white">
            <span>
              {categoryCardContent.actionLabel}
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
  );
}