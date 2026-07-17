// import FadeIn from "@/components/common/FadeIn";
// import { solutionsPageContent } from "@/data/solutions";

// export default function SolutionsStats() {
//   const { stats } = solutionsPageContent;

//   return (
//     <section className="border-y border-zinc-800 bg-zinc-950 px-6 lg:px-8">
//       <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
//         {stats.map((stat, index) => (
//           <FadeIn key={stat.label}>
//             <div
//               className={[
//                 "h-full py-10 sm:px-7 sm:py-12",
//                 index !== stats.length - 1
//                   ? "border-b border-zinc-800 sm:border-b-0 sm:border-r"
//                   : "",
//                 index === 1
//                   ? "sm:border-r-0 lg:border-r"
//                   : "",
//               ].join(" ")}
//             >
//               <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
//                 {stat.value}
//               </p>

//               <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-[#73B8EA]">
//                 {stat.label}
//               </h3>

//               <p className="mt-3 text-sm leading-6 text-zinc-400">
//                 {stat.description}
//               </p>
//             </div>
//           </FadeIn>
//         ))}
//       </div>
//     </section>
//   );
// }