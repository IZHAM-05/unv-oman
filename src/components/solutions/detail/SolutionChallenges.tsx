import FadeIn from "@/components/common/FadeIn";

import type { Solution } from "@/types/solution";

type SolutionChallengesProps = {
  solution: Solution;
};

export default function SolutionChallenges({
  solution,
}: SolutionChallengesProps) {
  return (
    <section
      id="solution-overview"
      className="border-b border-zinc-200 bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
             

              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl">
                {solution.overview.title}
              </h2>
            </div>

            <div className="space-y-5 border-l-2 border-[#005BAC] pl-6 sm:pl-8">
              {solution.overview.paragraphs.map(
                (paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-8 text-zinc-600 sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ),
              )}
            </div>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-px border border-zinc-200 bg-zinc-200 md:grid-cols-3">
          {solution.challenges.map((challenge) => (
            <FadeIn key={challenge.number}>
              <div className="h-full bg-white p-7 sm:p-8">
                <p className="font-mono text-xs font-bold text-[#005BAC]">
                  {challenge.number}
                </p>

                <h3 className="mt-5 text-xl font-bold text-zinc-950">
                  {challenge.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {challenge.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}