"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  LayoutDashboard,
  Mail,
  PackageSearch,
  LogOut,
  X,
} from "lucide-react";

type AdminSidebarProps = {
  mobile?: boolean;
  onClose?: () =>void;
};

export default function AdminSidebar({
  mobile = false,
  onClose,
}: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/admin/login");
    router.refresh();

    onClose?.();
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
    <aside className="flex h-screen w-72 flex-col bg-[#005BAC] text-white">
      {/* Mobile Close Button */}
      {mobile && (
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="rounded-md p-2 transition hover:bg-white/10"
          >
            <X size={22} />
          </button>
        </div>
      )}

      {/* Logo */}
      <div className="border-b border-white/20 px-6 pb-6">
        <h1 className="text-2xl font-bold tracking-wide">
          UNV Oman
        </h1>

        <p className="mt-1 text-sm text-white/70">
          Administration Panel
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-white/50">
          Navigation
        </p>

        <nav className="space-y-2">
          {links.map((link) => {
            const Icon = link.icon;

            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => onClose?.()}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-white text-[#005BAC] shadow-md"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Icon size={19} />

                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="border-t border-white/20 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold transition hover:bg-red-700"
        >
          <LogOut size={18} />

          Logout
        </button>
      </div>
    </aside>
  );
}