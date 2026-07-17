import Link from "next/link";

import {
  ArrowUpRight,
  Banknote,
  Building2,
  GraduationCap,
  Hospital,
  Hotel,
  Landmark,
  ShoppingBag,
  Store,
  Warehouse,
} from "lucide-react";

import FadeIn from "@/components/common/FadeIn";

import {
  solutions,
  solutionsPageContent,
} from "@/data/solutions";

import type { SolutionIconName } from "@/types/solution";

const iconMap: Record<
  SolutionIconName,
  typeof GraduationCap
> = {
  "graduation-cap": GraduationCap,
  landmark: Landmark,
  "shopping-bag": ShoppingBag,
  hospital: Hospital,
  building: Building2,
  store: Store,
  banknote: Banknote,
  hotel: Hotel,
  warehouse: Warehouse,
};

export default function SolutionsDirectory() {
  const { directory } = solutionsPageContent;

  return (
    <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="max-w-3xl">
       

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl">
              {directory.title}
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-600 sm:text-lg">
              {directory.description}
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 border-y border-zinc-200">
          {solutions.map((solution, index) => {
            const Icon = iconMap[solution.icon];

            return (
              <FadeIn key={solution.slug}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="group grid gap-5 border-b border-zinc-200 py-7 last:border-b-0 md:grid-cols-[80px_1fr_1.2fr_auto] md:items-center"
                >
                  <p className="font-mono text-xs font-bold text-zinc-400">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#EAF4FB] text-[#005BAC] transition-colors group-hover:bg-[#005BAC] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>

                    <h3 className="font-bold text-zinc-950 transition-colors group-hover:text-[#005BAC]">
                      {solution.name}
                    </h3>
                  </div>

                  <p className="text-sm leading-7 text-zinc-600">
                    {solution.directoryDescription}
                  </p>

                  <span className="inline-flex items-center justify-center border border-zinc-300 bg-white px-7 py-4 text-sm font-semibold text-zinc-800 transition-all duration-300 hover:border-blue-600 hover:bg-blue-50/40 hover:text-blue-600">
                    {directory.actionLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}