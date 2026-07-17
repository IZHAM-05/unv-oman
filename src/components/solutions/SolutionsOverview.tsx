// import {
//   Blocks,
//   Network,
//   ShieldCheck,
// } from "lucide-react";

// import FadeIn from "@/components/common/FadeIn";
// import { solutionsPageContent } from "@/data/solutions";

// const overviewPoints = [
//   {
//     icon: ShieldCheck,
//     label: "Security",
//     description:
//       "Protect people, property and operational assets.",
//   },
//   {
//     icon: Network,
//     label: "Integration",
//     description:
//       "Connect surveillance, access and management systems.",
//   },
//   {
//     icon: Blocks,
//     label: "Scalability",
//     description:
//       "Build an architecture that grows with your requirements.",
//   },
// ];

// export default function SolutionsOverview() {
//   const { overview } = solutionsPageContent;

//   return (
//     <section className="border-b border-zinc-200 bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
//       <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
//         <FadeIn>
//           <div>
//             <div className="flex items-center gap-3">
//               <span className="h-px w-8 bg-[#005BAC]" />

//               <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005BAC]">
//                 {overview.eyebrow}
//               </p>
//             </div>

//             <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.025em] text-zinc-950 sm:text-4xl lg:text-5xl">
//               {overview.title}
//             </h2>

//             <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
//               {overview.description}
//             </p>
//           </div>
//         </FadeIn>

//         <FadeIn>
//           <div className="grid border-y border-zinc-200 sm:grid-cols-3 lg:grid-cols-1">
//             {overviewPoints.map((point) => {
//               const Icon = point.icon;

//               return (
//                 <div
//                   key={point.label}
//                   className="group flex gap-4 border-b border-zinc-200 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0 lg:border-b lg:border-r-0 lg:px-0 lg:first:pl-0"
//                 >
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#EAF4FB] text-[#005BAC] transition-colors duration-300 group-hover:bg-[#005BAC] group-hover:text-white">
//                     <Icon className="h-5 w-5" />
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-zinc-950">
//                       {point.label}
//                     </h3>

//                     <p className="mt-1 text-sm leading-6 text-zinc-600">
//                       {point.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </FadeIn>
//       </div>
//     </section>
//   );
// }