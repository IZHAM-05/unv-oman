// import Link from "next/link";
// import {
//   ArrowDown,
//   ArrowUpRight,
// } from "lucide-react";

// import { solutionsPageContent } from "@/data/solutions";

// export default function SolutionsHero() {
//   const { hero } = solutionsPageContent;

//   return (
//     <section
//       id="hero"
//       className="relative isolate flex min-h-[82vh] items-end overflow-hidden bg-zinc-950"
//     >
//       <img
//         src={hero.backgroundImage}
//         alt=""
//         className="absolute inset-0 h-full w-full object-cover"
//       />

//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/25" />

//       <div className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:72px_72px]" />

//       <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-36 sm:pb-20 lg:px-8 lg:pb-24">
//         <div className="max-w-4xl">
//           <div className="mb-7 flex items-center gap-3">
//             <span className="h-px w-10 bg-[#4DA3E6]" />

//             <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#86C5F4]">
//               {hero.eyebrow}
//             </p>
//           </div>

//           <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
//             {hero.title}
//           </h1>

//           <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
//             {hero.description}
//           </p>

//           <div className="mt-10 flex flex-col gap-3 sm:flex-row">
//             <Link
//               href={hero.primaryAction.href}
//               className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#005BAC] px-7 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#004A8C]"
//             >
//               {hero.primaryAction.label}
//               <ArrowDown className="h-4 w-4" />
//             </Link>

//             <Link
//               href={hero.secondaryAction.href}
//               className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/30 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:border-white hover:bg-white hover:text-zinc-950"
//             >
//               {hero.secondaryAction.label}
//               <ArrowUpRight className="h-4 w-4" />
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
  ArrowDown,
  ArrowUpRight,
  Boxes,
  ScanLine,
} from "lucide-react";

import { solutionsPageContent } from "@/data/solutions";

export default function SolutionsHero() {
  const { hero } = solutionsPageContent;

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100vh] items-end overflow-hidden bg-zinc-950"
    >
      <img
        src={hero.backgroundImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/25" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 sm:pb-28 lg:px-8 lg:pb-32">        <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:items-end">
          <div className="-mt-14 max-w-4xl">
            {/* <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#4DA3E6]" />

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#86C5F4]">
                {hero.eyebrow}
              </p>
            </div> */}

            <h1 className="mt-7 text-4xl font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={hero.primaryAction.href}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#005BAC] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#004A8D]"
              >
                {hero.primaryAction.label}
                <ArrowDown className="h-4 w-4" />
              </Link>

              <Link
                href={hero.secondaryAction.href}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/30 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-zinc-950"
              >
                {hero.secondaryAction.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-px border border-white/15 bg-white/15 backdrop-blur-md">
            <div className="bg-black/45 p-6">
              <div className="flex items-center gap-3 text-[#73B8EA]">
                <Boxes className="h-5 w-5" />

                <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  {hero.systemLabel}
                </p>
              </div>

              <p className="mt-4 text-lg font-semibold text-white">
                {hero.systemValue}
              </p>
            </div>

            <div className="bg-black/45 p-6">
              <div className="flex items-center gap-3 text-[#73B8EA]">
                <ScanLine className="h-5 w-5" />

                <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  {hero.coverageLabel}
                </p>
              </div>

              <p className="mt-4 text-lg font-semibold text-white">
                {hero.coverageValue}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#005BAC] via-[#4DA3E6] to-transparent" />
    </section>
  );
}