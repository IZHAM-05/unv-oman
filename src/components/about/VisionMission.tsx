import FadeIn from "@/components/common/FadeIn";
import { aboutVisionMissionContent } from "@/data/about";

export default function VisionMission() {
  return (
    <section className="relative overflow-hiddenbg-[#F4FAFF] text-zinc-900 px-6 py-20 text-zinc-950 lg:px-8 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #005BAC 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="pointer-events-none absolute -left-48 top-0 h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <div className="grid gap-10 border-b border-blue-100 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
           

              <h2 className="mt-7 max-w-4xl text-4xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                {aboutVisionMissionContent.heading}
              </h2>
            </div>

            <p className="max-w-xl text-sm font-light leading-8 text-zinc-600 sm:text-base">
              {aboutVisionMissionContent.description}
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <div className="group relative min-h-[420px] overflow-hidden rounded-md border border-blue-100 bg-white">
              <img
                src={aboutVisionMissionContent.image}
                alt={aboutVisionMissionContent.imageAlt}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-[1000ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t
                      from-[#00172D]/70
                      via-[#00172D]/10
                      to-transparent via-zinc-950/25 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-300">
                  UNV Oman
                </p>

                <p className="mt-3 max-w-lg text-2xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                  Professional technology for dependable surveillance.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-4">
            {aboutVisionMissionContent.items.map((item, index) => (
              <FadeIn key={item.code} delay={index * 0.1}>
                <article className="group relative flex h-full min-h-[200px] overflow-hidden rounded-md border border-blue-100 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#005BAC] hover:shadow-xl sm:p-8
                    border-blue-100 p-7 transition-all duration-500 hover:border-[#005BAC]
                                                hover:-translate-y-1
                                                hover:shadow-xl sm:p-8">
                                      <div className="absolute bottom-0 left-0 top-0 w-1 origin-center scale-y-0 bg-blue-400 transition-transform duration-500 group-hover:scale-y-100" />

                  <div className="flex w-full gap-6">
                    <span className="font-mono text-3xl font-light text-white/20 transition-colors duration-300 group-hover:text-blue-300">
                      {item.code}
                    </span>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-300">
                        {item.label}
                      </p>

                      <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-zinc-950">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm font-light leading-7 text-zinc-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}