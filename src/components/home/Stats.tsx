"use client";
import { useEffect, useRef, useState } from "react";

import FadeIn from "@/components/common/FadeIn";
import { homeStats, homeStatsSectionContent } from "@/data/home";
import type { HomeStatIcon } from "@/types/home";

type AnimatedCounterProps = {
  value: string;
  trigger: boolean;
};

type StatIconProps = {
  icon: HomeStatIcon;
};

function StatIcon({ icon }: StatIconProps) {
  switch (icon) {
    case "clock":
      return (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );

    case "tag":
      return (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
          />

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6h.008v.008H6V6z"
          />
        </svg>
      );

    case "building":
      return (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
      );

    case "phone":
      return (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      );
  }
}

function AnimatedCounter({ value, trigger }: AnimatedCounterProps) {
  // If there are no numbers, just display the text.
  if (!/\d/.test(value)) {
    return <span>{value}</span>;
  }

  const [count, setCount] = useState(0);

  const numericTarget = Number.parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[\d,]/g, "").replace("/", "");
  const hasComma = value.includes(",");

  useEffect(() => {
    if (!trigger || Number.isNaN(numericTarget)) return;

    let start: number | null = null;
    let animationFrame = 0;

    const step = (timestamp: number) => {
      if (start === null) {
        start = timestamp;
      }

      const progress = Math.min(
        (timestamp - start) / homeStatsSectionContent.counterDuration,
        1,
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * numericTarget));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setCount(numericTarget);
      }
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [trigger, numericTarget]);

  if (value === "24/7") {
    return (
      <span>
        24<span className="text-zinc-400">/7</span>
      </span>
    );
  }

  return (
    <span className="tabular-nums">
      {hasComma ? count.toLocaleString() : count}
      {suffix}
    </span>
  );
}


export default function Stats() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: homeStatsSectionContent.observerThreshold,
      },
    );

    observer.observe(currentSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-zinc-100 bg-[#F8F9FB]"
    >
      {/* Gradient top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              {homeStatsSectionContent.heading}
            </h2>

            <p className="mt-4 max-w-lg text-base font-light leading-relaxed text-zinc-500">
              {homeStatsSectionContent.description}
            </p>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map((stat, index) => (
            <FadeIn
              key={stat.label}
              delay={index * homeStatsSectionContent.animationDelayStep}
            >
              <div className="group relative rounded-xl border border-zinc-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-200 hover:shadow-lg">
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 top-0 w-0.5 origin-center scale-y-0 bg-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

                {/* Icon */}
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]">
                  <StatIcon icon={stat.icon} />
                </div>

                {/* Counter */}
                <p className="font-mono text-4xl font-light tracking-[-0.04em] text-zinc-900 transition-colors duration-300 group-hover:text-blue-600">
                  <AnimatedCounter value={stat.value} trigger={isInView} />
                </p>

                {/* Text */}
                <h3 className="mt-3 text-sm font-semibold text-zinc-900">
                  {stat.label}
                </h3>

                <p className="mt-1 text-xs font-light leading-relaxed text-zinc-400">
                  {stat.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}