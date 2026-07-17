import Link from "next/link";

import FadeIn from "@/components/common/FadeIn";
import { categoryHeroContent } from "@/data/products";
import type { Category } from "@/types/product";

type CategoryHeroProps = {
  category: Category;
};

export default function CategoryHero({
  category,
}: CategoryHeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-zinc-950"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{
          backgroundImage: `url('${category.image}')`,
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
              <div className="flex max-w-full flex-wrap items-center gap-x-2 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-300 sm:text-xs sm:tracking-[0.18em]">
                <Link
                  href={
                    categoryHeroContent.breadcrumb.href
                  }
                  className="text-blue-400 transition-colors duration-300 hover:text-blue-300"
                >
                  {
                    categoryHeroContent.breadcrumb
                      .label
                  }
                </Link>

                <span className="text-zinc-500">
                  /
                </span>

                <span className="break-words">
                  {category.name}
                </span>
              </div>

              {/* Title */}
              <h1 className="mt-8 max-w-4xl break-words text-[2.7rem] font-bold leading-[0.98] tracking-[-0.045em] text-white sm:mt-10 sm:text-[3.7rem] md:text-[4.5rem] lg:text-[5.4rem] xl:text-[6.5rem]">
                {category.name}
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base font-light leading-7 text-zinc-300 sm:mt-7 sm:text-lg sm:leading-8">
                {category.description}
              </p>

              {/* Actions */}
              <div className="mt-8 flex flex-col items-stretch gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5 md:mt-12">
                <a
                  href={
                    categoryHeroContent.primaryAction
                      .href
                  }
                  className="group inline-flex min-h-12 w-full items-center justify-center bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-zinc-900 shadow-[0_16px_50px_-12px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-zinc-100 sm:w-auto sm:px-8 sm:py-4"
                >
                  {
                    categoryHeroContent.primaryAction
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
                </a>

                <Link
                  href={
                    categoryHeroContent
                      .secondaryAction.href
                  }
                  className="inline-flex min-h-10 w-fit items-center border-b border-zinc-500 pb-1 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white hover:text-white"
                >
                  {
                    categoryHeroContent
                      .secondaryAction.label
                  }
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}