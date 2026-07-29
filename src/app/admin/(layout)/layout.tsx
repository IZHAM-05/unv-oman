"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Menu } from "lucide-react";

import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-100">
      {/* ================= Desktop Sidebar ================= */}
      <aside className="fixed left-0 top-0 hidden h-screen w-72 lg:block">
        <AdminSidebar />
      </aside>

      {/* ================= Mobile Overlay ================= */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ================= Mobile Sidebar ================= */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 transform transition-transform duration-300 lg:hidden ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <AdminSidebar
          mobile
          onClose={() => setSidebarOpen(false)}
        />
      </aside>

      {/* ================= Main Content ================= */}
      <div className="lg:ml-72">
        {/* Mobile Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-white px-4 shadow-sm lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-md p-2 transition hover:bg-zinc-100"
          >
            <Menu size={24} />
          </button>

          <h1 className="ml-4 text-lg font-semibold text-zinc-800">
            Admin Panel
          </h1>
        </header>

        {/* Page Content */}
        <main className="min-h-screen p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}