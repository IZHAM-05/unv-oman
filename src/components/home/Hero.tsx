"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { homeHeroContent } from "@/data/home";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const {
    slides,
    autoplayDelay,
    primaryAction,
    secondaryAction,
    pagination,
  } = homeHeroContent;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((previousSlide) =>
        previousSlide === slides.length - 1
          ? 0
          : previousSlide + 1,
      );
    }, autoplayDelay);

    return () => {
      window.clearInterval(interval);
    };
  }, [autoplayDelay, slides.length]);

  const activeSlideContent = slides[activeSlide];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-zinc-950"
    >
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === index
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          />
        </div>
      ))}

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/55" />

      <div className="absolute inset-0 bg-zinc-950/10 lg:hidden" />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen w-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28 md:px-10 md:pb-14 md:pt-24 lg:px-8 lg:pb-16 lg:pt-24">
          <div className="max-w-3xl">
            {/* Slide text */}
            <div
              key={activeSlideContent.title}
              className="transition-all duration-700"
            >
              <h1 className="max-w-3xl text-[2.55rem] font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-[3.3rem] md:text-[4rem] lg:text-[4.6rem] xl:text-[5rem]">
                {activeSlideContent.title}
              </h1>

              <p className="mt-5 max-w-xl text-base font-light leading-7 text-zinc-300 sm:mt-6 sm:text-lg sm:leading-8 md:max-w-2xl lg:max-w-xl">
                {activeSlideContent.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-start gap-4 sm:mt-9 sm:flex-row sm:items-center sm:gap-5 md:mt-10">
              <Link
                href={primaryAction.href}
                className="group inline-flex min-h-12 w-full items-center justify-center bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-zinc-900 shadow-[0_16px_50px_-12px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-zinc-100 sm:w-auto sm:px-8 sm:py-4"
              >
                {primaryAction.label}

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
              </Link>

              <Link
                href={secondaryAction.href}
                className="inline-flex min-h-10 items-center border-b border-zinc-500 pb-1 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white hover:text-white"
              >
                {secondaryAction.label}
              </Link>
            </div>

            {/* Pagination */}
            <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12 md:mt-12 lg:mt-14">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    activeSlide === index
                      ? "w-10 bg-blue-400"
                      : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`${pagination.slideButtonAriaLabel} ${
                    index + 1
                  }`}
                />
              ))}

              <span className="ml-2 font-mono text-[11px] tracking-wider text-zinc-500 sm:ml-4">
                {String(activeSlide + 1).padStart(
                  pagination.numberPadding,
                  pagination.paddingCharacter,
                )}{" "}
                {pagination.separator}{" "}
                {String(slides.length).padStart(
                  pagination.numberPadding,
                  pagination.paddingCharacter,
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}