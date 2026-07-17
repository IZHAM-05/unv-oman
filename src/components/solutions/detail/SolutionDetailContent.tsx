// import {
//   Camera,
//   Car,
//   ChartNoAxesCombined,
//   Database,
//   Flame,
//   LockKeyhole,
//   Monitor,
//   RadioTower,
//   ScanFace,
//   ShieldCheck,
//   Users,
//   Workflow,
// } from "lucide-react";

// import FadeIn from "@/components/common/FadeIn";

// import type {
//   Solution,
//   SolutionFeatureIconName,
// } from "@/types/solution";

// type SolutionDetailContentProps = {
//   solution: Solution;
// };

// const featureIconMap: Record<
//   SolutionFeatureIconName,
//   typeof Camera
// > = {
//   camera: Camera,
//   "shield-check": ShieldCheck,
//   "scan-face": ScanFace,
//   car: Car,
//   users: Users,
//   "chart-no-axes-combined": ChartNoAxesCombined,
//   monitor: Monitor,
//   database: Database,
//   flame: Flame,
//   "lock-keyhole": LockKeyhole,
//   "radio-tower": RadioTower,
//   workflow: Workflow,
// };

// export default function SolutionDetailContent({
//   solution,
// }: SolutionDetailContentProps) {
//   return (
//     <main>
//       <section
//         id="solution-overview"
//         className="border-b border-zinc-200 bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
//       >
//         <div className="mx-auto max-w-7xl">
//           <FadeIn>
//             <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
//               <div>
//                 <div className="flex items-center gap-3">
//                   <span className="h-px w-8 bg-[#005BAC]" />

//                   <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005BAC]">
//                     {solution.introduction.eyebrow}
//                   </p>
//                 </div>

//                 <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.025em] text-zinc-950 sm:text-4xl lg:text-5xl">
//                   {solution.introduction.title}
//                 </h2>
//               </div>

//               <div className="space-y-5 border-l-2 border-[#005BAC] pl-6 sm:pl-8">
//                 {solution.introduction.paragraphs.map(
//                   (paragraph) => (
//                     <p
//                       key={paragraph}
//                       className="text-base leading-8 text-zinc-600 sm:text-lg"
//                     >
//                       {paragraph}
//                     </p>
//                   ),
//                 )}
//               </div>
//             </div>
//           </FadeIn>

//           <div className="mt-14 grid gap-px bg-zinc-200 border border-zinc-200 md:grid-cols-3">
//             {solution.highlights.map((highlight) => {
//               const Icon = featureIconMap[highlight.icon];

//               return (
//                 <FadeIn key={highlight.title}>
//                   <div className="group h-full bg-white p-7 transition-colors duration-300 hover:bg-[#F4F9FD] sm:p-8">
//                     <div className="flex h-12 w-12 items-center justify-center bg-[#EAF4FB] text-[#005BAC] transition-colors duration-300 group-hover:bg-[#005BAC] group-hover:text-white">
//                       <Icon className="h-5 w-5" />
//                     </div>

//                     <h3 className="mt-6 text-xl font-bold text-zinc-950">
//                       {highlight.title}
//                     </h3>

//                     <p className="mt-3 text-sm leading-7 text-zinc-600">
//                       {highlight.description}
//                     </p>
//                   </div>
//                 </FadeIn>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {solution.sections.map((section, sectionIndex) => {
//         const imageOnLeft =
//           section.imagePosition === "left";

//         return (
//           <section
//             id={section.id}
//             key={section.id}
//             className={
//               sectionIndex % 2 === 0
//                 ? "bg-[#F6F8FB] px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
//                 : "bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
//             }
//           >
//             <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
//               <FadeIn>
//                 <div
//                   className={[
//                     "relative min-h-[360px] overflow-hidden bg-zinc-200 sm:min-h-[460px]",
//                     imageOnLeft
//                       ? "lg:order-1"
//                       : "lg:order-2",
//                   ].join(" ")}
//                 >
//                   <img
//                     src={section.image}
//                     alt={section.imageAlt}
//                     className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

//                   <div className="absolute bottom-0 left-0 h-1 w-2/3 bg-[#005BAC]" />
//                 </div>
//               </FadeIn>

//               <FadeIn>
//                 <div
//                   className={
//                     imageOnLeft
//                       ? "lg:order-2"
//                       : "lg:order-1"
//                   }
//                 >
//                   <div className="flex items-center gap-3">
//                     <span className="h-px w-8 bg-[#005BAC]" />

//                     <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005BAC]">
//                       {section.eyebrow}
//                     </p>
//                   </div>

//                   <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.025em] text-zinc-950 sm:text-4xl">
//                     {section.title}
//                   </h2>

//                   <p className="mt-5 text-base leading-8 text-zinc-600">
//                     {section.description}
//                   </p>

//                   <div className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200">
//                     {section.features.map((feature) => {
//                       const Icon =
//                         featureIconMap[feature.icon];

//                       return (
//                         <div
//                           key={feature.title}
//                           className="group flex gap-4 py-5"
//                         >
//                           <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#EAF4FB] text-[#005BAC] transition-colors duration-300 group-hover:bg-[#005BAC] group-hover:text-white">
//                             <Icon className="h-5 w-5" />
//                           </div>

//                           <div>
//                             <h3 className="font-bold text-zinc-950">
//                               {feature.title}
//                             </h3>

//                             <p className="mt-1 text-sm leading-6 text-zinc-600">
//                               {feature.description}
//                             </p>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </FadeIn>
//             </div>
//           </section>
//         );
//       })}
//     </main>
//   );
// }