"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  LayoutDashboard,
  Mail,
  PackageSearch,
  LogOut,
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/admin/login");
    router.refresh();
  }

  const links = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Contact Forms",
      href: "/admin/contacts",
      icon: Mail,
    },
    {
      name: "Product Enquiries",
      href: "/admin/product-enquiries",
      icon: PackageSearch,
    },
  ];

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-zinc-200 bg-white">
      <div className="border-b border-zinc-200 p-6">
        <h2 className="text-2xl font-bold text-[#005BAC]">
          UNV Oman
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Admin Panel
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {links.map((link) => {
          const Icon = link.icon;

          const active =
            pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition ${
                active
                  ? "bg-[#005BAC] text-white"
                  : "text-zinc-700 hover:bg-zinc-100"
              }`}
            >
              <Icon size={18} />

              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-zinc-200 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-md bg-red-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-red-700"
        >
          <LogOut size={18} />

          Logout
        </button>
      </div>
    </aside>
  );
}