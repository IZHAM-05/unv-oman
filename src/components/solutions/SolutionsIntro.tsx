import FadeIn from "@/components/common/FadeIn";
import { solutionsPageContent } from "@/data/solutions";

export default function SolutionsIntro() {
  const { intro } = solutionsPageContent;

  return (
    <section className="border-b border-zinc-200 bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <FadeIn>
            <div>
            

              <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl">
                {intro.title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
                {intro.description}
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="border-l-2 border-[#005BAC] bg-[#F5F9FC] p-7 sm:p-9">
              <p className="text-lg font-semibold leading-8 text-zinc-900 sm:text-xl">
                {intro.statement}
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-px border border-zinc-200 bg-zinc-200 md:grid-cols-3">
          {intro.points.map((point) => (
            <FadeIn key={point.number}>
              <div className="h-full bg-white p-7 sm:p-8">
                <p className="font-mono text-xs font-bold text-[#005BAC]">
                  {point.number}
                </p>

                <h3 className="mt-5 text-xl font-bold text-zinc-950">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {point.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}