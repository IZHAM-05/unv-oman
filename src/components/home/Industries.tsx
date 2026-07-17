import Link from "next/link";

import FadeIn from "@/components/common/FadeIn";
import SectionTitle from "@/components/common/SectionTitle";
import { industriesContent } from "@/data/home";

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FB] px-6 py-24 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn>
          <SectionTitle
            light={false}
            title={industriesContent.heading}
            description={industriesContent.description}
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industriesContent.items.map((industry, index) => (
            <FadeIn key={industry.name} delay={index * 0.06}>
              <Link
                href={industriesContent.action.href}
                className="group relative flex min-h-[280px] overflow-hidden rounded-[2rem] bg-zinc-950"
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-[900ms] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                <div className="absolute inset-0 bg-blue-600/0 transition-colors duration-500 group-hover:bg-blue-600/10" />

                <div className="relative z-10 mt-auto p-6">
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {industry.name}
                  </h3>

                  <div className="mt-4 h-px w-10 bg-blue-400 transition-all duration-500 group-hover:w-20" />

                  <p className="mt-5 text-sm font-semibold text-blue-300">
                    {industriesContent.action.label} →
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}