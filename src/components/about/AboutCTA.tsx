import Link from "next/link";

import FadeIn from "@/components/common/FadeIn";
import { aboutCTAContent } from "@/data/about";

export default function AboutCTA() {
  return (
    <section
      className="relative w-full overflow-hidden bg-zinc-950"
      style={{
        backgroundImage: `url(${aboutCTAContent.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/30" />

      <div className="relative z-10 mx-auto flex min-h-[420px] w-full max-w-7xl items-center px-4 py-16 sm:min-h-[460px] sm:px-6 sm:py-20 lg:min-h-[500px] lg:px-8 lg:py-24 xl:px-10">
        <FadeIn>
          <div className="w-full min-w-0 max-w-3xl">
         
            <h2 className="mt-5 max-w-3xl break-words text-3xl font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              {aboutCTAContent.heading}
            </h2>

            <p className="mt-6 max-w-2xl text-sm font-light leading-7 text-zinc-300 sm:text-base sm:leading-8">
              {aboutCTAContent.description}
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Link
                href={aboutCTAContent.primaryAction.href}
                className="group/button inline-flex w-full items-center justify-center bg-white px-6 py-4 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 sm:w-auto"
              >
                {aboutCTAContent.primaryAction.label}

                <span className="ml-3 transition-transform duration-300 group-hover/button:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href={aboutCTAContent.secondaryAction.href}
                className="inline-flex w-full items-center justify-center border border-white/25 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-blue-300 hover:text-blue-200 sm:w-auto"
              >
                {aboutCTAContent.secondaryAction.label}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}