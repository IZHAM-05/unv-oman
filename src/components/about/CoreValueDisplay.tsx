import type { AboutCoreValue } from "@/types/about";

type CoreValueDisplayProps = {
  value: AboutCoreValue;
  activeIndex: number;
};

export default function CoreValueDisplay({
  value,
  activeIndex,
}: CoreValueDisplayProps) {
  return (
    <div
      id={`core-value-panel-${activeIndex}`}
      role="tabpanel"
      aria-labelledby={`core-value-tab-${activeIndex}`}
      key={`${value.code}-${activeIndex}`}
      className="relative flex h-full overflow-hidden border border-zinc-200 bg-white shadow-[0_24px_80px_-55px_rgba(15,23,42,0.35)] animate-[coreValueContent_500ms_ease-out]"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-100/80 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-28 -left-24 h-60 w-60 rounded-full bg-cyan-100/60 blur-[100px]" />

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#005BAC] via-blue-400 to-cyan-300" />

     

      <div className="relative z-10 flex w-full  flex-col justify-center p-7 sm:p-9 lg:p-10">
       

        <h3 className="mt-7 max-w-xl text-3xl font-bold leading-[0.98] tracking-[-0.055em] text-zinc-950 sm:text-4xl lg:text-5xl">
          {value.title}
        </h3>

        <div className="my-6 h-0.5 w-16 bg-[#005BAC]" />

        <p className="max-w-xl text-sm font-light leading-7 text-zinc-600 sm:text-base sm:leading-8">
          {value.description}
        </p>

        <div className="mt-8 flex items-center gap-3 border-t border-zinc-200 pt-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF5FD] text-[#005BAC]">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="m5 13 4 4L19 7"
              />
            </svg>
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Professional Principle
          </span>
        </div>
      </div>
    </div>
  );
}