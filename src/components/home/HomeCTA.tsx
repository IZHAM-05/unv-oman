import Link from "next/link";

import FadeIn from "@/components/common/FadeIn";
import { homeCTAContent } from "@/data/home";

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-100 bg-[#F8F9FB] pt-16 lg:pt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Centered heading */}
      <div className="relative mx-auto max-w-[96rem] px-2 lg:px-4">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              {homeCTAContent.heading}
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base font-light leading-relaxed text-zinc-500">
              {homeCTAContent.description}
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Full-width CTA card with no bottom gap */}
     {/* CTA Card */}
<div className="relative mx-auto max-w-7xl px-8 pb-20 lg:px-8 lg:pb-28">
  <FadeIn delay={0.1}>
    <div className="group relative grid overflow-hidden border-zinc-200/70 bg-white shadow-sm transition-all duration-300 hover:shadow-xl lg:grid-cols-2">
      <div className="relative min-h-[280px] overflow-hidden sm:min-h-[340px] lg:min-h-[420px]">      
              <img
              src={homeCTAContent.image}
              alt={homeCTAContent.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 rounded-full border border-white/30 bg-black/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md lg:bottom-8 lg:left-8">
              {homeCTAContent.imageLabel}
            </div>
          </div>

      <div className="relative flex min-h-[380px] flex-col justify-center px-6 py-8 sm:px-10 lg:min-h-[420px] lg:px-16 xl:px-24">
              <div className="absolute bottom-0 left-0 top-0 z-20 w-0.5 origin-center scale-y-0 bg-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

            <div className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-600">
                {homeCTAContent.eyebrow}
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                {homeCTAContent.title}
              </h3>

              <p className="mt-4 max-w-xl text-base font-light leading-8 text-zinc-500 lg:text-lg">
                {homeCTAContent.body}
              </p>

              <div className="mt-6 space-y-3">
                {homeCTAContent.points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>

                    <span className="text-sm font-medium text-zinc-700 sm:text-base">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={homeCTAContent.primaryAction.href}
                  className="group/button inline-flex items-center justify-center bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                >
                  {homeCTAContent.primaryAction.label}

                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <Link
                  href={homeCTAContent.secondaryAction.href}
                  className="inline-flex items-center justify-center border border-zinc-300 bg-white px-7 py-4 text-sm font-semibold text-zinc-800 transition-all duration-300 hover:border-blue-600 hover:bg-blue-50/40 hover:text-blue-600"                >
                  {homeCTAContent.secondaryAction.label}
                </Link>
              </div>
            </div>
          </div>
            </div>
  </FadeIn>
</div>
</section>
  );
}