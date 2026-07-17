import FadeIn from "@/components/common/FadeIn";
import {
  whyChooseUsReasons,
  whyChooseUsSectionContent,
} from "@/data/home";

export default function WhyChooseUs() {
  return (
    // Matching the Stats & Categories background, border, and top line
    <section className="relative overflow-hidden border-t border-zinc-100 bg-[#F8F9FB] px-6 py-20 lg:px-8 lg:py-28">
      {/* Gradient top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Dot pattern matching Stats & Categories */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Unified Header matching Stats/Categories layout */}
        <FadeIn>
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              {whyChooseUsSectionContent.heading}
            </h2>

            <p className="mt-4 max-w-lg text-base font-light leading-relaxed text-zinc-500">
              {whyChooseUsSectionContent.description}
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 space-y-6">
          {whyChooseUsReasons.map((reason, index) => {
            const reverse = index % 2 !== 0;

            return (
              <FadeIn
                key={reason.title}
                delay={
                  index * whyChooseUsSectionContent.animationDelayStep
                }
              >
                <div
                  className={`group grid overflow-hidden rounded-xl border border-zinc-200/50 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl lg:grid-cols-2 ${
                    reverse ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image Side - Removed heavy dark gradient overlay for a cleaner technical look */}
                  <div className="relative min-h-[280px] overflow-hidden lg:min-h-[360px]">
                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
                    />
                  </div>

                  {/* Content Side */}
                  <div className="relative flex flex-col justify-center p-8 lg:p-12">
                    {/* Left Hover Accent Line (From Stats/Cards) */}
                    <div className="absolute bottom-0 left-0 top-0 z-20 w-0.5 origin-center scale-y-0 bg-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

                    {/* Label matching unified style */}

                    <h3 className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
                      {reason.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-zinc-500 lg:text-base">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}