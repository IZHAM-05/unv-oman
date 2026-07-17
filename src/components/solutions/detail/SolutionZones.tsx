import {
  MapPin,
  ScanLine,
} from "lucide-react";

import FadeIn from "@/components/common/FadeIn";

import type { Solution } from "@/types/solution";

type SolutionZonesProps = {
  solution: Solution;
};

export default function SolutionZones({
  solution,
}: SolutionZonesProps) {
  return (
    <section className="bg-zinc-950 px-6 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
             

              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Security coverage aligned with operational priorities.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Each deployment should prioritise the environments where people, assets and operational activity face the highest risk.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-px border border-zinc-800 bg-zinc-800 md:grid-cols-2">
          {solution.zones.map((zone, index) => (
            <FadeIn key={zone.name}>
              <div className="group flex h-full gap-5 bg-zinc-950 p-7 transition-colors hover:bg-[#081827] sm:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-zinc-700 text-[#73B8EA] transition-colors group-hover:border-[#005BAC] group-hover:bg-[#005BAC] group-hover:text-white">
                  {index % 2 === 0 ? (
                    <MapPin className="h-5 w-5" />
                  ) : (
                    <ScanLine className="h-5 w-5" />
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {zone.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {zone.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}