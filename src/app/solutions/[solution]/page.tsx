import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SolutionArchitecture from "@/components/solutions/detail/SolutionArchitecture";
import SolutionBenefits from "@/components/solutions/detail/SolutionBenefits";
import SolutionChallenges from "@/components/solutions/detail/SolutionChallenges";
import SolutionDetailCTA from "@/components/solutions/detail/SolutionDetailCTA";
import SolutionDetailHero from "@/components/solutions/detail/SolutionDetailHero";
import SolutionZones from "@/components/solutions/detail/SolutionZones";

import {
  getSolutionBySlug,
  solutions,
} from "@/data/solutions";

type SolutionPageProps = {
  params: Promise<{
    solution: string;
  }>;
};

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { solution: solutionSlug } = await params;

  const solution = getSolutionBySlug(solutionSlug);

  if (!solution) {
    return {
      title: "Solution Not Found | UNV Oman",
      description: "The requested security solution could not be found.",
    };
  }

  return {
    title: `${solution.name} | Solutions | UNV Oman`,
    description: solution.summary,
  };
}


export function generateStaticParams() {
  return solutions.map((solution) => ({
    solution: solution.slug,
  }));
}

export default async function SolutionPage({
  params,
}: SolutionPageProps) {
  const { solution: solutionSlug } = await params;

  const solution = getSolutionBySlug(solutionSlug);

  if (!solution) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden bg-white text-zinc-900">
      <SolutionDetailHero solution={solution} />
      <SolutionChallenges solution={solution} />
      <SolutionArchitecture solution={solution} />
      <SolutionZones solution={solution} />
      <SolutionBenefits solution={solution} />
      <SolutionDetailCTA solution={solution} />
    </main>
  );
}