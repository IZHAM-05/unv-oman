import FadeIn from "@/components/common/FadeIn";
import { aboutWhyChooseContent } from "@/data/about";

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden border-y border-blue-100 bg-[#EAF5FD] px-6 py-16 lg:px-8 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #005BAC 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <div className="grid gap-6 border-b border-blue-200 pb-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
          
              <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-[1] tracking-[-0.05em] text-zinc-950 sm:text-4xl lg:text-5xl">
                {aboutWhyChooseContent.heading}
              </h2>
            </div>

            <p className="max-w-xl text-sm font-light leading-7 text-zinc-600 sm:text-base">
              {aboutWhyChooseContent.description}
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutWhyChooseContent.items.map((item, index) => (
            <FadeIn key={item.code} delay={index * 0.06}>
              <article className="group flex h-full min-h-[230px] flex-col border border-blue-200 bg-[#F4FAFF] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#005BAC] hover:bg-white hover:shadow-[0_18px_45px_-24px_rgba(0,91,172,0.35)]">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#005BAC] font-mono text-xs font-bold text-white">
                    {item.code}
                  </span>

                </div>

                <h3 className="mt-5 text-lg font-bold leading-tight tracking-[-0.03em] text-zinc-950">
                  {item.title}
                </h3>

                <div className="my-4 h-px w-10 bg-blue-200 transition-all duration-300 group-hover:w-16 group-hover:bg-[#005BAC]" />

                <p className="text-sm font-light leading-6 text-zinc-600">
                  {item.description}
                </p>

                <div className="mt-auto pt-5">
                  <div className="h-px w-full bg-blue-100" />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}