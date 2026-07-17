import FadeIn from "@/components/common/FadeIn";
import { aboutHero } from "@/data/about";

export default function AboutHero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950"
    >
      {/* Background Image */}
      <img
        src={aboutHero.image}
        alt={aboutHero.imageAlt}
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />

      {/* Hero Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/40" />

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />

      <div className="relative z-10 flex min-h-screen w-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="relative max-w-3xl">
            <FadeIn>
              <h1 className="text-[3.5rem] font-bold leading-[0.9] tracking-[-0.05em] text-white sm:text-[4.5rem] lg:text-[6.5rem]">
                {aboutHero.title}
              </h1>

              <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-zinc-300">
                {aboutHero.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}