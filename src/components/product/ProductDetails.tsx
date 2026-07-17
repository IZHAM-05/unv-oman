// import Link from "next/link";
// import {
//   ArrowRight,
//   Check,
//   ChevronRight,
//   FileText,
//   MessageSquareText,
//   ShieldCheck,
// } from "lucide-react";

// import FadeIn from "@/components/common/FadeIn";
// import { productDetailsContent } from "@/data/products";

// import type {
//   Category,
//   Product,
//   Subcategory,
// } from "@/types/product";

// type ProductDetailsProps = {
//   category: Category;
//   subcategory: Subcategory;
//   product: Product;
// };

// export default function ProductDetails({
//   category,
//   subcategory,
//   product,
// }: ProductDetailsProps) {
//   return (
//     <section
//       id="product-details"
//       className="relative scroll-mt-24 overflow-hidden border-t border-zinc-200 bg-white px-6 py-16 sm:py-20 lg:px-8 lg:py-24"
//     >
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.025]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
//           backgroundSize: "30px 30px",
//         }}
//       />

//       <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#005BAC]/40 to-transparent" />

//       <div className="relative z-10 mx-auto max-w-7xl">
        

//         <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
//           <FadeIn>
//             <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden border border-zinc-200 bg-[#F6F8FB] p-6 sm:min-h-[480px] sm:p-10 lg:min-h-[560px]">
//               <div className="absolute left-0 top-0 h-1 w-28 bg-[#005BAC]" />

//               <div className="absolute right-6 top-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
//                 {category.name}
//               </div>

//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="max-h-[440px] w-full object-contain transition-transform duration-700 hover:scale-[1.03]"
//               />

//               <div className="absolute bottom-6 left-6 flex items-center gap-3 border-l-2 border-[#005BAC] pl-4">
//                 <div>
//                   <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-400">
//                     {subcategory.name}
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-zinc-950">
//                     {product.name}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </FadeIn>

//           <FadeIn delay={0.08}>
//             <div className="flex h-full flex-col">
            
//               <h1 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.035em] text-zinc-950 sm:text-4xl lg:text-5xl">
//                 {product.name}
//               </h1>

//               <p className="mt-6 text-base leading-8 text-zinc-600">
//                 {product.description}
//               </p>

//               {product.features.length > 0 && (
//                 <div className="mt-8 border-y border-zinc-200 py-6">
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     {product.features
//                       .slice(0, 6)
//                       .map((feature) => (
//                         <div
//                           key={feature}
//                           className="flex items-start gap-3"
//                         >
//                           <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#EAF4FB] text-[#005BAC]">
//                             <Check className="h-3.5 w-3.5" />
//                           </span>

//                           <p className="text-sm font-medium leading-6 text-zinc-700">
//                             {feature}
//                           </p>
//                         </div>
//                       ))}
//                   </div>
//                 </div>
//               )}

//               {product.applications.length > 0 && (
//                 <div className="mt-7">
//                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
//                     {
//                       productDetailsContent.applicationsLabel
//                     }
//                   </p>

//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {product.applications.map(
//                       (application) => (
//                         <span
//                           key={application}
//                           className="border border-zinc-200 bg-[#F6F8FB] px-3 py-2 text-xs font-semibold text-zinc-600"
//                         >
//                           {application}
//                         </span>
//                       ),
//                     )}
//                   </div>
//                 </div>
//               )}

//               <div className="mt-8 border border-[#BFD9EC] bg-[#EFF7FC]">
//                 <div className="grid sm:grid-cols-[1fr_auto] sm:items-center">
//                   <div className="flex gap-4 p-5 sm:p-6">
//                     <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#005BAC] text-white">
//                       <MessageSquareText className="h-5 w-5" />
//                     </div>

//                     <div>
//                       <p className="text-sm font-bold text-zinc-950">
//                         {
//                           productDetailsContent
//                             .descriptionHeading
//                         }
//                       </p>

//                       <p className="mt-1 text-xs leading-6 text-zinc-600">
//                         {
//                           productDetailsContent
//                             .descriptionEyebrow
//                         }
//                       </p>
//                     </div>
//                   </div>

//                   <Link
//                     href={
//                       productDetailsContent.contactAction
//                         .href
//                     }
//                     className="inline-flex min-h-14 items-center justify-center gap-2 bg-[#005BAC] px-6 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#004A8D] sm:min-h-full"
//                   >
//                     {
//                       productDetailsContent.contactAction
//                         .label
//                     }

//                     <ArrowRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </FadeIn>
//         </div>

//         <div className="mt-16 border-t border-zinc-200 pt-14 sm:mt-20 sm:pt-16">
//           <FadeIn>
//             <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
//               <div>
//                 <div className="flex h-12 w-12 items-center justify-center bg-[#EAF4FB] text-[#005BAC]">
//                   <FileText className="h-5 w-5" />
//                 </div>

//                 <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.24em] text-[#005BAC]">
//                   {
//                     productDetailsContent
//                       .descriptionEyebrow
//                   }
//                 </p>

//                 <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-zinc-950 sm:text-4xl">
//                   {
//                     productDetailsContent
//                       .descriptionHeading
//                   }
//                 </h2>
//               </div>

//               <div className="border-l-2 border-[#005BAC] pl-6 sm:pl-8">
//                 <p className="text-base leading-8 text-zinc-600 sm:text-lg">
//                   {product.description}
//                 </p>

//                 {product.applications.length > 0 && (
//                   <div className="mt-7 grid gap-3 sm:grid-cols-2">
//                     {product.applications.map(
//                       (application) => (
//                         <div
//                           key={application}
//                           className="flex items-center gap-3 border-b border-zinc-200 pb-3"
//                         >
//                           <ShieldCheck className="h-4 w-4 shrink-0 text-[#005BAC]" />

//                           <span className="text-sm font-medium text-zinc-700">
//                             {application}
//                           </span>
//                         </div>
//                       ),
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </FadeIn>
//         </div>

//         <FadeIn>
//           <div className="mt-16 border border-zinc-200 bg-white sm:mt-20">
//             <div className="flex flex-col gap-4 border-b border-zinc-200 bg-zinc-950 px-6 py-6 text-white sm:flex-row sm:items-end sm:justify-between sm:px-8">
//               <div>
//                 <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#73B8EA]">
//                   {
//                     productDetailsContent
//                       .specificationsEyebrow
//                   }
//                 </p>

//                 <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
//                   {
//                     productDetailsContent
//                       .specificationsHeading
//                   }
//                 </h2>
//               </div>

//               <p className="font-mono text-xs text-zinc-400">
//                 {String(
//                   product.specifications.length,
//                 ).padStart(2, "0")}{" "}
//                 {
//                   productDetailsContent
//                     .specificationsCountLabel
//                 }
//               </p>
//             </div>

//             <div className="divide-y divide-zinc-200">
//               {product.specifications.map(
//                 (specification, index) => (
//                   <div
//                     key={`${specification.label}-${specification.value}`}
//                     className="grid transition-colors duration-300 hover:bg-[#F4F9FD] sm:grid-cols-[0.42fr_0.58fr]"
//                   >
//                     <div className="flex items-center gap-4 border-b border-zinc-200 bg-[#F7F8FA] px-5 py-4 sm:border-b-0 sm:border-r sm:px-7">
//                       <span className="font-mono text-[10px] font-bold text-zinc-400">
//                         {String(index + 1).padStart(
//                           2,
//                           "0",
//                         )}
//                       </span>

//                       <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-600">
//                         {specification.label}
//                       </p>
//                     </div>

//                     <div className="flex items-center px-5 py-4 sm:px-7">
//                       <p className="text-sm font-semibold leading-6 text-zinc-950 sm:text-base">
//                         {specification.value}
//                       </p>
//                     </div>
//                   </div>
//                 ),
//               )}
//             </div>
//           </div>
//         </FadeIn>

//         {product.features.length > 0 && (
//           <FadeIn>
//             <div className="mt-16 sm:mt-20">
//               <div className="mb-8 flex items-end justify-between gap-6 border-b border-zinc-200 pb-6">
//                 <div>
//                   <div className="flex items-center gap-3">
//                     <span className="h-px w-8 bg-[#005BAC]" />

//                     <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#005BAC]">
//                       {
//                         productDetailsContent
//                           .overviewEyebrow
//                       }
//                     </p>
//                   </div>

//                   <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-zinc-950">
//                     {product.name}
//                   </h2>
//                 </div>

//                 <span className="hidden font-mono text-xs text-zinc-400 sm:block">
//                   {String(
//                     product.features.length,
//                   ).padStart(2, "0")}
//                 </span>
//               </div>

//               <div className="grid border-l border-t border-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
//                 {product.features.map(
//                   (feature, index) => (
//                     <div
//                       key={feature}
//                       className="group min-h-[140px] border-b border-r border-zinc-200 bg-white p-6 transition-colors duration-300 hover:bg-[#F4F9FD]"
//                     >
//                       <div className="flex items-center justify-between gap-4">
//                         <span className="flex h-9 w-9 items-center justify-center bg-[#EAF4FB] font-mono text-[10px] font-bold text-[#005BAC] transition-colors duration-300 group-hover:bg-[#005BAC] group-hover:text-white">
//                           {String(index + 1).padStart(
//                             2,
//                             "0",
//                           )}
//                         </span>

//                         <span className="h-px w-8 bg-zinc-200 transition-all duration-300 group-hover:w-14 group-hover:bg-[#005BAC]" />
//                       </div>

//                       <p className="mt-6 text-sm font-semibold leading-6 text-zinc-800">
//                         {feature}
//                       </p>
//                     </div>
//                   ),
//                 )}
//               </div>
//             </div>
//           </FadeIn>
//         )}
//       </div>
//     </section>
//   );
// }


import {
  Check,
  FileText,
  ShieldCheck,
} from "lucide-react";

import FadeIn from "@/components/common/FadeIn";
import ProductEnquiryButton from "@/components/product/ProductEnquiryButton";
import { productDetailsContent } from "@/data/products";

import type {
  Category,
  Product,
  Subcategory,
} from "@/types/product";

type ProductDetailsProps = {
  category: Category;
  subcategory: Subcategory;
  product: Product;
};

export default function ProductDetails({
  category,
  subcategory,
  product,
}: ProductDetailsProps) {
  return (
    <section
      id="product-details"
      className="relative scroll-mt-24 overflow-hidden border-t border-zinc-200 bg-white px-6 py-16 sm:py-20 lg:px-8 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#005BAC]/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <FadeIn>
            <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden border border-zinc-200 bg-[#F6F8FB] p-6 sm:min-h-[480px] sm:p-10 lg:min-h-[560px]">
              <div className="absolute left-0 top-0 h-1 w-28 bg-[#005BAC]" />

              <div className="absolute right-6 top-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                {category.name}
              </div>

              <img
                src={product.image}
                alt={product.name}
                className="max-h-[440px] w-full object-contain transition-transform duration-700 hover:scale-[1.03]"
              />

              <div className="absolute bottom-6 left-6 flex items-center gap-3 border-l-2 border-[#005BAC] pl-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                    {subcategory.name}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-zinc-950">
                    {product.name}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="flex h-full flex-col">
              <h1 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.035em] text-zinc-950 sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>

              <p className="mt-6 text-base leading-8 text-zinc-600">
                {product.description}
              </p>

              {product.features.length > 0 && (
                <div className="mt-8 border-y border-zinc-200 py-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {product.features
                      .slice(0, 6)
                      .map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#EAF4FB] text-[#005BAC]">
                            <Check className="h-3.5 w-3.5" />
                          </span>

                          <p className="text-sm font-medium leading-6 text-zinc-700">
                            {feature}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {product.applications.length > 0 && (
                <div className="mt-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    {
                      productDetailsContent
                        .applicationsLabel
                    }
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.applications.map(
                      (application) => (
                        <span
                          key={application}
                          className="border border-zinc-200 bg-[#F6F8FB] px-3 py-2 text-xs font-semibold text-zinc-600"
                        >
                          {application}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              )}

              <ProductEnquiryButton
                category={category}
                subcategory={subcategory}
                product={product}
              />
            </div>
          </FadeIn>
        </div>

        <div className="mt-16 border-t border-zinc-200 pt-14 sm:mt-20 sm:pt-16">
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <div className="flex h-12 w-12 items-center justify-center bg-[#EAF4FB] text-[#005BAC]">
                  <FileText className="h-5 w-5" />
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.24em] text-[#005BAC]">
                  {
                    productDetailsContent
                      .descriptionEyebrow
                  }
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-zinc-950 sm:text-4xl">
                  {
                    productDetailsContent
                      .descriptionHeading
                  }
                </h2>
              </div>

              <div className="border-l-2 border-[#005BAC] pl-6 sm:pl-8">
                <p className="text-base leading-8 text-zinc-600 sm:text-lg">
                  {product.description}
                </p>

                {product.applications.length > 0 && (
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {product.applications.map(
                      (application) => (
                        <div
                          key={application}
                          className="flex items-center gap-3 border-b border-zinc-200 pb-3"
                        >
                          <ShieldCheck className="h-4 w-4 shrink-0 text-[#005BAC]" />

                          <span className="text-sm font-medium text-zinc-700">
                            {application}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mt-16 border border-zinc-200 bg-white sm:mt-20">
            <div className="flex flex-col gap-4 border-b border-zinc-200 bg-zinc-950 px-6 py-6 text-white sm:flex-row sm:items-end sm:justify-between sm:px-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#73B8EA]">
                  {
                    productDetailsContent
                      .specificationsEyebrow
                  }
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                  {
                    productDetailsContent
                      .specificationsHeading
                  }
                </h2>
              </div>

              <p className="font-mono text-xs text-zinc-400">
                {String(
                  product.specifications.length,
                ).padStart(2, "0")}{" "}
                {
                  productDetailsContent
                    .specificationsCountLabel
                }
              </p>
            </div>

            <div className="divide-y divide-zinc-200">
              {product.specifications.map(
                (specification, index) => (
                  <div
                    key={`${specification.label}-${specification.value}`}
                    className="grid transition-colors duration-300 hover:bg-[#F4F9FD] sm:grid-cols-[0.42fr_0.58fr]"
                  >
                    <div className="flex items-center gap-4 border-b border-zinc-200 bg-[#F7F8FA] px-5 py-4 sm:border-b-0 sm:border-r sm:px-7">
                      <span className="font-mono text-[10px] font-bold text-zinc-400">
                        {String(index + 1).padStart(
                          2,
                          "0",
                        )}
                      </span>

                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-600">
                        {specification.label}
                      </p>
                    </div>

                    <div className="flex items-center px-5 py-4 sm:px-7">
                      <p className="text-sm font-semibold leading-6 text-zinc-950 sm:text-base">
                        {specification.value}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </FadeIn>

        {product.features.length > 0 && (
          <FadeIn>
            <div className="mt-16 sm:mt-20">
              <div className="mb-8 flex items-end justify-between gap-6 border-b border-zinc-200 pb-6">
                <div>
                

                  <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-zinc-950">
                    {product.name}
                  </h2>
                </div>

                <span className="hidden font-mono text-xs text-zinc-400 sm:block">
                  {String(
                    product.features.length,
                  ).padStart(2, "0")}
                </span>
              </div>

              <div className="grid border-l border-t border-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
                {product.features.map(
                  (feature, index) => (
                    <div
                      key={feature}
                      className="group min-h-[140px] border-b border-r border-zinc-200 bg-white p-6 transition-colors duration-300 hover:bg-[#F4F9FD]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="flex h-9 w-9 items-center justify-center bg-[#EAF4FB] font-mono text-[10px] font-bold text-[#005BAC] transition-colors duration-300 group-hover:bg-[#005BAC] group-hover:text-white">
                          {String(index + 1).padStart(
                            2,
                            "0",
                          )}
                        </span>

                        <span className="h-px w-8 bg-zinc-200 transition-all duration-300 group-hover:w-14 group-hover:bg-[#005BAC]" />
                      </div>

                      <p className="mt-6 text-sm font-semibold leading-6 text-zinc-800">
                        {feature}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}