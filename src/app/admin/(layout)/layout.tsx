import type { ReactNode } from "react";

import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Fixed Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-72">
        <AdminSidebar />
      </aside>

      {/* Main Content */}
      <main className="ml-72 min-h-screen">
        {children}
      </main>
    </div>
  );
}