"use client";

import { useState } from "react";
import Link from "next/link";

import FadeIn from "@/components/common/FadeIn";
import ProductEnquiryModal from "@/components/product/ProductEnquiryModal";
import { productHeroContent } from "@/data/products";

import type {
  Category,
  Product,
  Subcategory,
} from "@/types/product";

type ProductHeroProps = {
  category: Category;
  subcategory: Subcategory;
  product: Product;
};

export default function ProductHero({
  category,
  subcategory,
  product,
}: ProductHeroProps) {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] =
    useState(false);

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-zinc-950"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${product.image}')`,
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-zinc-950/55" />
        <div className="absolute inset-0 bg-zinc-950/10 lg:hidden" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen w-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 pt-28 sm:px-8 sm:pb-14 sm:pt-32 md:px-10 md:pb-16 md:pt-28 lg:px-8 lg:pb-20 lg:pt-28">
            <FadeIn>
              <div className="max-w-4xl">
                {/* Breadcrumb */}
                <div className="flex max-w-full flex-wrap items-center gap-x-2 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-400 sm:text-xs sm:tracking-[0.18em]">
                  <Link
                    href={
                      productHeroContent
                        .productsBreadcrumb.href
                    }
                    className="transition-colors hover:text-blue-300 text-blue-400"
                  >
                    {
                      productHeroContent
                        .productsBreadcrumb.label
                    }
                  </Link>

                  <span className="text-zinc-600">
                    /
                  </span>

                  <Link
                    href={`/products/${category.slug}`}
                    className="transition-colors hover:text-blue-300 text-blue-400"
                  >
                    {category.name}
                  </Link>

                  <span className="text-zinc-600">
                    /
                  </span>

                  <Link
                    href={`/products/${category.slug}/${subcategory.slug}`}
                    className="transition-colors hover:text-blue-300 text-blue-400"
                  >
                    {subcategory.name}
                  </Link>
                </div>

                {/* Product title */}
                <h1 className="mt-8 max-w-4xl break-words text-[2.6rem] font-bold leading-[0.98] tracking-[-0.045em] text-white sm:mt-10 sm:text-[3.6rem] md:text-[4.4rem] lg:text-[5.2rem] xl:text-[6rem]">
                  {product.name}
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-2xl text-base font-light leading-7 text-zinc-300 sm:mt-7 sm:text-lg sm:leading-8">
                  {productHeroContent.description}
                </p>

                {/* Actions */}
                <div className="mt-8 flex flex-col items-stretch gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5 md:mt-12">
                  <button
                    type="button"
                    onClick={() =>
                      setIsEnquiryModalOpen(true)
                    }
                    className="group inline-flex min-h-12 w-full items-center justify-center bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-zinc-900 shadow-[0_16px_50px_-12px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-zinc-100 sm:w-auto sm:px-8 sm:py-4"
                  >
                    {
                      productHeroContent.primaryAction
                        .label
                    }

                    <svg
                      className="ml-3 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
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
                  </button>

                  <a
                    href={
                      productHeroContent.secondaryAction
                        .href
                    }
                    className="inline-flex min-h-10 w-fit items-center border-b border-zinc-500 pb-1 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white hover:text-white"
                  >
                    {
                      productHeroContent.secondaryAction
                        .label
                    }
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <ProductEnquiryModal
        category={category}
        subcategory={subcategory}
        product={product}
        isOpen={isEnquiryModalOpen}
        onClose={() =>
          setIsEnquiryModalOpen(false)
        }
      />
    </>
  );
}