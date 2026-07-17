"use client";

import {
  useEffect,
  useRef,
} from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Headphones,
} from "lucide-react";

import FadeIn from "@/components/common/FadeIn";

import {
  productCategories,
  productSliderContent,
} from "@/data/products";

type ProductSliderProps = {
  selectedCategorySlug: string;
  onSelectCategory: (
    slug: string,
    shouldScroll?: boolean,
  ) => void;
};

type NavigationItemProps = {
  isSelected: boolean;
  code: string;
  label: string;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function NavigationItem({
  isSelected,
  code,
  label,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: NavigationItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative flex w-full items-center border-b border-zinc-200 px-5 py-4 text-left transition-colors duration-300 last:border-b-0 ${
        isSelected
          ? "bg-[#005BAC] text-white"
          : "bg-white text-zinc-700 hover:bg-[#EFF6FB] hover:text-[#005BAC]"
      }`}
    >
      <span
        className={`mr-4 font-mono text-[10px] font-bold tracking-[0.12em] ${
          isSelected
            ? "text-blue-100"
            : "text-zinc-400"
        }`}
      >
        {code}
      </span>

      <span className="min-w-0 flex-1 truncate text-sm font-semibold">
        {label}
      </span>

      <ChevronRight
        className={`ml-4 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${
          isSelected
            ? "text-white"
            : "text-zinc-300 group-hover:text-[#005BAC]"
        }`}
      />

      {isSelected && (
        <span className="absolute bottom-0 left-0 top-0 w-1 bg-[#78C5F5]" />
      )}
    </button>
  );
}

export default function ProductSlider({
  selectedCategorySlug,
  onSelectCategory,
}: ProductSliderProps) {
  const hoverTimeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearHoverTimeout();
    };
  }, []);

  const handleMouseEnter = (slug: string) => {
    const supportsHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    if (!supportsHover) {
      return;
    }

    clearHoverTimeout();

    hoverTimeoutRef.current = setTimeout(() => {
      onSelectCategory(slug, false);
      hoverTimeoutRef.current = null;
    }, 90);
  };

  const handleMouseLeave = () => {
    clearHoverTimeout();
  };

  const handleCategoryClick = (slug: string) => {
    clearHoverTimeout();
    onSelectCategory(slug, true);
  };

  const navigationItems = [
    {
      slug: "all",
      label:
        productSliderContent.allCategoriesLabel,
      code:
        productSliderContent.allCategoriesCode,
    },
    ...productCategories.map(
      (category, index) => ({
        slug: category.slug,
        label: category.name,
        code: String(index + 1).padStart(
          2,
          "0",
        ),
      }),
    ),
  ];

  return (
    <aside className="lg:col-span-3">
      <div className="space-y-6 lg:sticky lg:top-24">
        <FadeIn>
          <div className="overflow-hidden border border-zinc-200 bg-white shadow-[0_18px_45px_-35px_rgba(15,23,42,0.35)]">
            <div className="relative overflow-hidden bg-zinc-950 px-6 py-7 text-white">
              <div className="absolute bottom-0 left-0 h-1 w-20 bg-[#005BAC]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#75BCEB]">
                {productSliderContent.eyebrow}
              </p>

              <h3 className="mt-3 text-xl font-bold leading-tight tracking-[-0.02em]">
                {productSliderContent.title}
              </h3>

              <p className="mt-3 text-xs leading-6 text-zinc-400">
                {
                  productSliderContent.description
                }
              </p>
            </div>

            <nav
              aria-label={
                productSliderContent.title
              }
            >
              {navigationItems.map((item) => (
                <NavigationItem
                  key={item.slug}
                  isSelected={
                    selectedCategorySlug ===
                    item.slug
                  }
                  code={item.code}
                  label={item.label}
                  onClick={() =>
                    handleCategoryClick(item.slug)
                  }
                  onMouseEnter={() =>
                    handleMouseEnter(item.slug)
                  }
                  onMouseLeave={
                    handleMouseLeave
                  }
                />
              ))}
            </nav>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border border-[#BFD9EC] bg-[#EEF6FC] p-6">
            <div className="flex h-11 w-11 items-center justify-center bg-[#005BAC] text-white">
              <Headphones className="h-5 w-5" />
            </div>

            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.24em] text-[#005BAC]">
              {
                productSliderContent.assistance
                  .eyebrow
              }
            </p>

            <h4 className="mt-3 text-xl font-bold leading-tight tracking-[-0.02em] text-zinc-950">
              {
                productSliderContent.assistance
                  .title
              }
            </h4>

            <p className="mt-3 text-sm leading-7 text-zinc-600">
              {
                productSliderContent.assistance
                  .description
              }
            </p>

            <Link
              href={
                productSliderContent.assistance
                  .action.href
              }
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-[#005BAC] px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#004A8D]"
            >
              {
                productSliderContent.assistance
                  .action.label
              }

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </aside>
  );
}

