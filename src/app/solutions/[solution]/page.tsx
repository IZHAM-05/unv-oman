import { notFound } from "next/navigation";

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