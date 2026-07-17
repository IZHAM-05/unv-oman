// import Link from "next/link";
// import {
//   ArrowRight,
//   ArrowUpRight,
// } from "lucide-react";

// import FadeIn from "@/components/common/FadeIn";
// import type { Solution } from "@/types/solution";

// type SolutionDetailCTAProps = {
//   solution: Solution;
// };

// export default function SolutionDetailCTA({
//   solution,
// }: SolutionDetailCTAProps) {
//   const { cta } = solution;

//   return (
//     <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
//       <FadeIn>
//         <div className="relative mx-auto max-w-7xl overflow-hidden bg-zinc-950 px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
//           <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#005BAC] via-[#4DA3E6] to-transparent" />

//           <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border-[70px] border-white/[0.04]" />

//           <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
//             <div className="max-w-3xl">
//               <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#73B8EA]">
//                 {cta.eyebrow}
//               </p>

//               <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
//                 {cta.title}
//               </h2>

//               <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
//                 {cta.description}
//               </p>
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
//               <Link
//                 href={cta.primaryAction.href}
//                 className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#005BAC] px-6 text-sm font-bold text-white transition-colors hover:bg-[#0874C9]"
//               >
//                 {cta.primaryAction.label}
//                 <ArrowRight className="h-4 w-4" />
//               </Link>

//               <Link
//                 href={cta.secondaryAction.href}
//                 className="inline-flex min-h-12 items-center justify-center gap-2 border border-zinc-700 px-6 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-zinc-950"
//               >
//                 {cta.secondaryAction.label}
//                 <ArrowUpRight className="h-4 w-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </FadeIn>
//     </section>
//   );
// }


import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import FadeIn from "@/components/common/FadeIn";

import type { Solution } from "@/types/solution";

type SolutionDetailCTAProps = {
  solution: Solution;
};

export default function SolutionDetailCTA({
  solution,
}: SolutionDetailCTAProps) {
  const { cta } = solution;

  return (
    <section className="overflow-hidden bg-[#F6F8FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <FadeIn>
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#005BAC] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="pointer-events-none absolute -right-20 -top-36 h-96 w-96 rounded-full border-[70px] border-white/10" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-100">
                {cta.eyebrow}
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                {cta.title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100">
                {cta.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href={cta.primaryAction.href}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 text-sm font-bold text-[#005BAC] transition-colors hover:bg-zinc-950 hover:text-white"
              >
                {cta.primaryAction.label}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={cta.secondaryAction.href}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/40 px-6 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#005BAC]"
              >
                {cta.secondaryAction.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}