// import Link from "next/link";
// import {
//   ArrowUpRight,
//   Banknote,
//   Building2,
//   Check,
//   GraduationCap,
//   Hospital,
//   Hotel,
//   Landmark,
//   ShoppingBag,
//   Store,
//   Warehouse,
// } from "lucide-react";

// import type {
//   Solution,
//   SolutionIconName,
// } from "@/types/solution";

// type SolutionCardProps = {
//   solution: Solution;
//   actionLabel: string;
//   index: number;
// };

// const iconMap: Record<
//   SolutionIconName,
//   typeof GraduationCap
// > = {
//   "graduation-cap": GraduationCap,
//   landmark: Landmark,
//   "shopping-bag": ShoppingBag,
//   hospital: Hospital,
//   building: Building2,
//   store: Store,
//   banknote: Banknote,
//   hotel: Hotel,
//   warehouse: Warehouse,
// };

// export default function SolutionCard({
//   solution,
//   actionLabel,
//   index,
// }: SolutionCardProps) {
//   const Icon = iconMap[solution.icon];

//   return (
//     <article className="group relative flex h-full flex-col overflow-hidden border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#005BAC]/50 hover:shadow-[0_24px_60px_-30px_rgba(0,91,172,0.4)]">
//       <Link
//         href={`/solutions/${solution.slug}`}
//         aria-label={`View ${solution.name}`}
//         className="relative block h-60 overflow-hidden bg-zinc-900 sm:h-64"
//       >
//         <img
//           src={solution.cardImage}
//           alt={solution.name}
//           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

//         <div className="absolute left-0 top-0 flex h-12 min-w-12 items-center justify-center bg-[#005BAC] px-3 font-mono text-xs font-bold text-white">
//           {String(index + 1).padStart(2, "0")}
//         </div>

//         <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center border border-white/30 bg-black/40 text-white backdrop-blur-md">
//           <Icon className="h-5 w-5" />
//         </div>
//       </Link>

//       <div className="flex flex-1 flex-col p-6 sm:p-7">
//         <h3 className="text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
//           {solution.name}
//         </h3>

//         <p className="mt-4 text-sm leading-7 text-zinc-600">
//           {solution.cardDescription}
//         </p>

//         <div className="mt-6 space-y-3 border-t border-zinc-200 pt-5">
//           {solution.cardFeatures.map((feature) => (
//             <div
//               key={feature}
//               className="flex items-start gap-3"
//             >
//               <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#EAF4FB] text-[#005BAC]">
//                 <Check className="h-3.5 w-3.5" />
//               </span>

//               <span className="text-sm font-medium leading-5 text-zinc-700">
//                 {feature}
//               </span>
//             </div>
//           ))}
//         </div>

//         <div className="mt-auto pt-7">
//           <Link
//             href={`/solutions/${solution.slug}`}
//             className="flex items-center justify-between border-t border-zinc-200 pt-5 text-sm font-bold text-zinc-950 transition-colors duration-300 group-hover:text-[#005BAC]"
//           >
//             {actionLabel}

//             <span className="flex h-9 w-9 items-center justify-center bg-zinc-950 text-white transition-all duration-300 group-hover:bg-[#005BAC]">
//               <ArrowUpRight className="h-4 w-4" />
//             </span>
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// }