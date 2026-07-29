"use client";

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#005BAC]">
            UNV Oman Administration
          </p>

          <h1 className="mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Welcome back to the admin panel.
          </p>
        </div>

        <div className="rounded-xl bg-zinc-100 px-4 py-3 text-center sm:text-right">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Today
          </p>

          <p className="mt-1 text-sm font-semibold text-zinc-800">
            {today}
          </p>
        </div>
      </div>
    </header>
  );
}