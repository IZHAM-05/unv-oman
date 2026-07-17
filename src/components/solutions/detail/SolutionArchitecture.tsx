import {
  BrainCircuit,
  Camera,
  Car,
  Database,
  Monitor,
  Network,
  ScanFace,
  ShieldCheck,
  Thermometer,
  Users,
} from "lucide-react";

import FadeIn from "@/components/common/FadeIn";

import type {
  CapabilityIconName,
  Solution,
} from "@/types/solution";

type SolutionArchitectureProps = {
  solution: Solution;
};

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
  "shield-check": ShieldCheck,
  users: Users,
  network: Network,
};

export default function SolutionArchitecture({
  solution,
}: SolutionArchitectureProps) {
  return (
    <section className="bg-[#F6F8FB] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="max-w-3xl">
           
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl">
              A coordinated security framework for{" "}
              {solution.shortName.toLowerCase()}.
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-px border border-zinc-200 bg-zinc-200 md:grid-cols-2">
          {solution.architecture.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <FadeIn key={item.number}>
                <div className="group h-full bg-white p-7 transition-colors hover:bg-[#F5FAFD] sm:p-9">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#EAF4FB] text-[#005BAC] transition-colors group-hover:bg-[#005BAC] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <p className="font-mono text-xs font-bold text-zinc-400">
                      {item.number}
                    </p>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-zinc-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
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