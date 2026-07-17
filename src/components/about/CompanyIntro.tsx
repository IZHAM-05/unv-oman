import Link from "next/link";

import FadeIn from "@/components/common/FadeIn";
import { aboutIntroductionContent } from "@/data/about";

export default function CompanyIntro() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-100 bg-white px-6 py-20 lg:px-8 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="pointer-events-none absolute -left-48 top-0 h-[440px] w-[440px] rounded-full bg-blue-100/70 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <FadeIn>
            <div className="max-w-2xl">
             

              <h2 className="mt-7 text-4xl font-bold leading-[0.98] tracking-[-0.055em] text-zinc-950 sm:text-5xl lg:text-6xl">
                {aboutIntroductionContent.heading}
              </h2>

              <div className="mt-8 space-y-5">
                {aboutIntroductionContent.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm font-light leading-8 text-zinc-600 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

            <Link
              href={aboutIntroductionContent.action.href}
              className="group mt-9 inline-flex w-fit items-center gap-3  border border-[#005BAC] bg-white px-6 py-3 text-sm font-semibold text-[#005BAC] transition-all duration-300 hover:bg-[#005BAC] hover:text-white"
            >
              <span>{aboutIntroductionContent.action.label}</span>

              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0-4 4m4-4H3"
                />
              </svg>
            </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-full w-full border border-blue-100 bg-[#EAF5FD]" />

              <div className="group relative min-h-[440px] overflow-hidden  bg-zinc-950 shadow-[0_35px_100px_-50px_rgba(15,23,42,0.55)] sm:min-h-[540px]">
                <img
                  src={aboutIntroductionContent.image}
                  alt={aboutIntroductionContent.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/5 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-white/20 pt-5 sm:bottom-8 sm:left-8 sm:right-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                    {aboutIntroductionContent.imageLabel}
                  </p>

                  <span className="h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.9)]" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}