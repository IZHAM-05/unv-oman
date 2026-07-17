import type { AboutCoreValue } from "@/types/about";

type CoreValuesTabsProps = {
  values: AboutCoreValue[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

export default function CoreValuesTabs({
  values,
  activeIndex,
  onSelect,
}: CoreValuesTabsProps) {
  return (
    <div
      className="flex h-full flex-col overflow-hidden border border-zinc-200 bg-white shadow-[0_24px_80px_-55px_rgba(15,23,42,0.35)]"
      role="tablist"
      aria-label="Core values"
    >
      {values.map((value, index) => {
        const isActive = activeIndex === index;

        return (
          <button
            key={value.code}
            type="button"
            role="tab"
            id={`core-value-tab-${index}`}
            aria-selected={isActive}
            aria-controls={`core-value-panel-${index}`}
            onClick={() => onSelect(index)}
            className={`group relative flex flex-1 items-center gap-4 border-b border-zinc-200 px-5 py-5 text-left transition-all duration-300 last:border-b-0 sm:px-6 ${
              isActive
                ? "bg-[#EAF5FD]"
                : "bg-white hover:bg-zinc-50"
            }`}
          >
            <span
              className={`absolute bottom-0 left-0 top-0 w-1 origin-center transition-transform duration-300 ${
                isActive
                  ? "scale-y-100 bg-[#005BAC]"
                  : "scale-y-0 bg-[#005BAC] group-hover:scale-y-100"
              }`}
            />

            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-semibold transition-all duration-300 ${
                isActive
                  ? "border-[#005BAC] bg-[#005BAC] text-white"
                  : "border-zinc-200 bg-zinc-50 text-zinc-400 group-hover:border-blue-300 group-hover:text-[#005BAC]"
              }`}
            >
              {value.code}
            </span>

            <span
              className={`min-w-0 flex-1 text-sm font-semibold tracking-tight transition-colors duration-300 sm:text-base ${
                isActive
                  ? "text-[#005BAC]"
                  : "text-zinc-800 group-hover:text-[#005BAC]"
              }`}
            >
              {value.title}
            </span>

            <svg
              className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                isActive
                  ? "translate-x-1 text-[#005BAC]"
                  : "text-zinc-300 group-hover:translate-x-1 group-hover:text-[#005BAC]"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        );
      })}
    </div>
  );
}