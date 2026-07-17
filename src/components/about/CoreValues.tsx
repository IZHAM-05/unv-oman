"use client";

import { useState } from "react";

import CoreValueDisplay from "@/components/about/CoreValueDisplay";
import CoreValuesTabs from "@/components/about/CoreValuesTabs";
import FadeIn from "@/components/common/FadeIn";
import { aboutCoreValuesContent } from "@/data/about";

export default function CoreValues() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeValue =
    aboutCoreValuesContent.values[activeIndex] ??
    aboutCoreValuesContent.values[0];

  if (!activeValue) {
    return null;
  }

  return (
    <section className="relative overflow-hidden border-t border-blue-100 bg-white px-6 py-20 lg:px-8 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #005BAC 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-14 grid gap-8 border-b border-zinc-200 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              

              <h2 className="mt-7 max-w-4xl text-4xl font-bold leading-[0.98] tracking-[-0.06em] text-zinc-950 sm:text-5xl lg:text-6xl">
                {aboutCoreValuesContent.heading}
              </h2>
            </div>

            <p className="max-w-xl text-sm font-light leading-8 text-zinc-600 sm:text-base">
              {aboutCoreValuesContent.description}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8">
          <FadeIn>
            <div className="h-full">
              <CoreValuesTabs
                values={aboutCoreValuesContent.values}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="h-full">
              <CoreValueDisplay
                value={activeValue}
                activeIndex={activeIndex}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}