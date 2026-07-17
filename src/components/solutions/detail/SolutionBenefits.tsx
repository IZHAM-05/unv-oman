import FadeIn from "@/components/common/FadeIn";

import type { Solution } from "@/types/solution";

type SolutionBenefitsProps = {
  solution: Solution;
};

export default function SolutionBenefits({
  solution,
}: SolutionBenefitsProps) {
  return (
    <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="max-w-3xl">
           

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl">
              Security improvements that support daily operations.
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-px border-y border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
          {solution.benefits.map((benefit) => (
            <FadeIn key={benefit.value}>
              <div className="h-full bg-white p-7 sm:p-8">
                <p className="text-4xl font-bold tracking-tight text-[#005BAC]">
                  {benefit.value}
                </p>

                <h3 className="mt-6 text-lg font-bold text-zinc-950">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {benefit.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}