import Link from "next/link";
import {
  ArrowUpRight,
  Check,
} from "lucide-react";

import FadeIn from "@/components/common/FadeIn";

import {
  solutions,
  solutionsPageContent,
} from "@/data/solutions";

export default function FeaturedSolutions() {
  const { featured } = solutionsPageContent;

  const featuredSolutions = solutions.filter(
    (solution) => solution.featured,
  );

  return (
    <section
      id="featured-solutions"
      className="bg-[#F6F8FB] px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="max-w-3xl">
           

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl">
              {featured.title}
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-600 sm:text-lg">
              {featured.description}
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 space-y-8">
          {featuredSolutions.map((solution, index) => {
            const imageOnLeft = index % 2 === 0;

            return (
              <FadeIn key={solution.slug}>
                <article className="grid overflow-hidden border border-zinc-200 bg-white lg:grid-cols-2">
                  <div
                    className={[
                      "relative min-h-[330px] overflow-hidden bg-zinc-900 sm:min-h-[430px]",
                      imageOnLeft
                        ? "lg:order-1"
                        : "lg:order-2",
                    ].join(" ")}
                  >
                    <img
                      src={solution.cardImage}
                      alt={solution.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6">
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                        Industry {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </div>

                  <div
                    className={[
                      "flex flex-col justify-center p-7 sm:p-10 lg:p-12",
                      imageOnLeft
                        ? "lg:order-2"
                        : "lg:order-1",
                    ].join(" ")}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#005BAC]">
                      {solution.shortName}
                    </p>

                    <h3 className="mt-5 text-3xl font-bold tracking-[-0.025em] text-zinc-950">
                      {solution.name}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-zinc-600">
                      {solution.summary}
                    </p>

                    <div className="mt-7 space-y-3">
                      {solution.keyCapabilities.map(
                        (capability) => (
                          <div
                            key={capability}
                            className="flex items-center gap-3"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-[#E7F2FA] text-[#005BAC]">
                              <Check className="h-3.5 w-3.5" />
                            </span>

                            <span className="text-sm font-semibold text-zinc-700">
                              {capability}
                            </span>
                          </div>
                        ),
                      )}
                    </div>

                   <Link
                      href={`/solutions/${solution.slug}`}
                      className="group mt-9 inline-flex w-fit items-center gap-3 border border-[#005BAC] bg-white px-6 py-3 text-sm font-semibold text-[#005BAC] transition-all duration-300 hover:bg-[#005BAC] hover:text-white"
                    >
                      {featured.actionLabel}

                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}