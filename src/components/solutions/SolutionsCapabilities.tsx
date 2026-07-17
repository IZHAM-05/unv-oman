import {
  BrainCircuit,
  Camera,
  Car,
  Database,
  Monitor,
  Network,
  ScanFace,
  Thermometer,
} from "lucide-react";

import FadeIn from "@/components/common/FadeIn";

import { solutionsPageContent } from "@/data/solutions";

import type { CapabilityIconName } from "@/types/solution";

const iconMap: Record<
  CapabilityIconName,
  typeof Camera
> = {
  camera: Camera,
  "scan-face": ScanFace,
  "brain-circuit": BrainCircuit,
  car: Car,
  monitor: Monitor,
  thermometer: Thermometer,
  database: Database,
  "shield-check": Camera,
  users: Camera,
  network: Network,
};

export default function SolutionsCapabilities() {
  const { capabilities } = solutionsPageContent;

  return (
    <section className="bg-zinc-950 px-6 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
             

              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                {capabilities.title}
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              {capabilities.description}
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-px border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.items.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <FadeIn key={item.title}>
                <div className="group h-full bg-zinc-950 p-7 transition-colors duration-300 hover:bg-[#081827] sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center border border-zinc-700 text-[#73B8EA] transition-colors group-hover:border-[#005BAC] group-hover:bg-[#005BAC] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}