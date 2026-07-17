"use client";

import {
  useRef,
  useState,
} from "react";

import ProductCategory from "@/components/products/ProductCategory";
import ProductSlider from "@/components/products/ProductSlider";

export default function ProductCatalogue() {
  const [selectedCategorySlug, setSelectedCategorySlug] =
    useState("all");

  const catalogueContentRef =
    useRef<HTMLDivElement | null>(null);

  const handleSelectCategory = (
    slug: string,
    shouldScroll = false,
  ) => {
    setSelectedCategorySlug(slug);

    if (!shouldScroll) {
      return;
    }

    window.setTimeout(() => {
      catalogueContentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <section className="relative overflow-visible border-t border-zinc-200 bg-[#F6F8FB] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#005BAC]/35 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 border-b border-zinc-200 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
         

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl">
              Explore the UNV product portfolio.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-zinc-600 lg:justify-self-end">
            Select a product category to review its available
            series and continue through the nested catalogue
            structure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <ProductSlider
            selectedCategorySlug={selectedCategorySlug}
            onSelectCategory={handleSelectCategory}
          />

          <div
            ref={catalogueContentRef}
            className="scroll-mt-28 lg:col-span-9"
          >
            <ProductCategory
              selectedCategorySlug={
                selectedCategorySlug
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}