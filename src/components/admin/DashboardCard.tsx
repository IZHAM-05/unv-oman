import { ArrowUpRight } from "lucide-react";

type DashboardCardProps = {
  title: string;
  value: number;
};

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
      {/* Background Decoration */}
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#005BAC]/5 blur-2xl transition-all duration-300 group-hover:bg-[#005BAC]/10" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#005BAC] sm:text-4xl">
            {value}
          </h2>
        </div>

        <div className="rounded-xl bg-[#005BAC]/10 p-3 text-[#005BAC]">
          <ArrowUpRight size={22} />
        </div>
      </div>
    </div>
  );
}