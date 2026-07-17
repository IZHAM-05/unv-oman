import Link from "next/link";

import { productCardContent } from "@/data/products";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  categorySlug: string;
  subcategorySlug: string;
  index?: number;
};

export default function ProductCard({
  product,
  categorySlug,
  subcategorySlug,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${categorySlug}/${subcategorySlug}/${product.slug}`}
      className="group relative flex min-h-[300px] cursor-pointer flex-col justify-end overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/45 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

      <div className="absolute inset-0 bg-blue-600/0 transition-colors duration-700 group-hover:bg-blue-600/10" />

      <div className="absolute right-4 top-4 z-10 text-[40px] font-black leading-none tracking-tighter text-white/[0.06] transition-colors duration-500 group-hover:text-white/10">
        {productCardContent.backgroundLabel}
      </div>

      <div className="relative z-10 translate-y-[85px] p-5 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0">
        <h3 className="text-xl font-bold tracking-tight text-white">
          {product.name}
        </h3>

        <div className="mb-3 mt-3 h-0.5 w-10 bg-blue-500 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:w-20" />

        <div className="opacity-0 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:opacity-100">
          <p className="line-clamp-2 max-w-md text-xs leading-6 text-white/70">
            {product.description}
          </p>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white">
              <span>{productCardContent.actionLabel}</span>

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

            <span className="border border-white/15 bg-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/70 backdrop-blur-sm">
              {subcategorySlug.replace(/-/g, " ")}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}