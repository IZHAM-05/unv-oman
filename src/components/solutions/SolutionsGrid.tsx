// import FadeIn from "@/components/common/FadeIn";
// import SolutionCard from "@/components/solutions/SolutionCard";

// import {
//   solutions,
//   solutionsPageContent,
// } from "@/data/solutions";

// export default function SolutionsGrid() {
//   const { grid } = solutionsPageContent;

//   return (
//     <section
//       id="industry-solutions"
//       className="relative overflow-hidden bg-[#F6F8FB] px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
//     >
//       <div className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]" />

//       <div className="relative mx-auto max-w-7xl">
//         <FadeIn>
//           <div className="max-w-3xl">
//             <div className="flex items-center gap-3">
//               <span className="h-px w-8 bg-[#005BAC]" />

//               <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005BAC]">
//                 {grid.eyebrow}
//               </p>
//             </div>

//             <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.025em] text-zinc-950 sm:text-4xl lg:text-5xl">
//               {grid.title}
//             </h2>

//             <p className="mt-6 text-base leading-8 text-zinc-600 sm:text-lg">
//               {grid.description}
//             </p>
//           </div>
//         </FadeIn>

//         <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {solutions.map((solution, index) => (
//             <FadeIn key={solution.slug}>
//               <SolutionCard
//                 solution={solution}
//                 actionLabel={grid.actionLabel}
//                 index={index}
//               />
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }