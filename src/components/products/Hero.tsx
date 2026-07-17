import FadeIn from "@/components/common/FadeIn";
import { productsHeroContent } from "@/data/products";

export default function ProductsHero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen overflow-hidden bg-zinc-950"
    >
      <div
        className="absolute inset-0 animate-[heroZoom_12s_ease-in-out_infinite_alternate] bg-cover bg-center"
        style={{
          backgroundImage: `url('${productsHeroContent.image}')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/40" />

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />

      <div className="relative z-10 flex min-h-screen w-full items-center">
        <div className="-mt-18 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="relative h-[340px] md:h-[380px] lg:h-[420px]">
            <FadeIn>
              <div className="absolute inset-x-0 top-30 max-w-3xl">
                <h1 className="text-[3.5rem] font-bold leading-[0.9] tracking-[-0.05em] text-white sm:text-[4.5rem] lg:whitespace-nowrap lg:text-[6.5rem]">
                  {productsHeroContent.title}
                </h1>

                <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-zinc-300">
                  {productsHeroContent.description}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}