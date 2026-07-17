// import Link from "next/link";
// import {
//   ArrowLeft,
//   ArrowRight,
//   ChevronRight,
// } from "lucide-react";

// import type { Solution } from "@/types/solution";

// type SolutionDetailHeroProps = {
//   solution: Solution;
// };

// export default function SolutionDetailHero({
//   solution,
// }: SolutionDetailHeroProps) {
//   return (
//     <section
//       id="hero"
//       className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-zinc-950"
//     >
//       <img
//         src={solution.heroImage}
//         alt={solution.name}
//         className="absolute inset-0 h-full w-full object-cover"
//       />

//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

//       <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:72px_72px]" />

//       <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-36 sm:pb-18 lg:px-8 lg:pb-20">
//         <nav
//           aria-label="Breadcrumb"
//           className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400"
//         >
//           <Link
//             href="/solutions"
//             className="transition-colors hover:text-white"
//           >
//             Solutions
//           </Link>

//           <ChevronRight className="h-3.5 w-3.5" />

//           <span className="text-[#86C5F4]">
//             {solution.shortName}
//           </span>
//         </nav>

//         <div className="max-w-4xl">
//           <div className="flex items-center gap-3">
//             <span className="h-px w-10 bg-[#4DA3E6]" />

//             <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#86C5F4]">
//               {solution.heroEyebrow}
//             </p>
//           </div>

//           <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
//             {solution.heroTitle}
//           </h1>

//           <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
//             {solution.heroDescription}
//           </p>

//           <div className="mt-10 flex flex-col gap-3 sm:flex-row">
//             <Link
//               href="#solution-overview"
//               className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#005BAC] px-7 text-sm font-bold text-white transition-colors hover:bg-[#004A8C]"
//             >
//               Explore Solution
//               <ArrowRight className="h-4 w-4" />
//             </Link>

//             <Link
//               href="/solutions"
//               className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/30 bg-white/5 px-7 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-zinc-950"
//             >
//               <ArrowLeft className="h-4 w-4" />
//               All Solutions
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#005BAC] via-[#4DA3E6] to-transparent" />
//     </section>
//   );
// }


import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import type { Solution } from "@/types/solution";

type SolutionDetailHeroProps = {
  solution: Solution;
};

export default function SolutionDetailHero({
  solution,
}: SolutionDetailHeroProps) {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-end overflow-hidden bg-zinc-950"
    >
      <img
        src={solution.heroImage}
        alt={solution.name}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/25" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/20" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28">
        <div className="-translate-y-10 sm:-translate-y-12 lg:-translate-y-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400"
          >
            <Link
              href="/solutions"
              className="transition-colors duration-300 hover:text-white"
            >
              Solutions
            </Link>

            <ChevronRight className="h-3.5 w-3.5" />

            <span className="text-[#86C5F4]">
              {solution.shortName}
            </span>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {solution.hero.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              {solution.hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#solution-overview"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#005BAC] px-7 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#004A8D]"
              >
                View Architecture
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/solutions"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/30 bg-white/5 px-7 text-sm font-bold text-white backdrop-blur-sm transition-colors duration-300 hover:border-white hover:bg-white hover:text-zinc-950"
              >
                <ArrowLeft className="h-4 w-4" />
                All Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#005BAC] via-[#4DA3E6] to-transparent" />
    </section>
  );
}