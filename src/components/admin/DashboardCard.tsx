type DashboardCardProps = {
  title: string;
  value: number;
};

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-zinc-500">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-[#005BAC]">
        {value}
      </h2>
    </div>
  );
}