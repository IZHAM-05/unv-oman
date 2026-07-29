"use client";

import { useRouter } from "next/navigation";

export default function DashboardHeader() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/admin/login");
    router.refresh();
  }

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col gap-6 border-b border-zinc-200 bg-white p-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-medium text-[#005BAC]">
          UNV Oman Administration
        </p>

        <h1 className="mt-2 text-3xl font-bold text-zinc-900">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          {today}
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}