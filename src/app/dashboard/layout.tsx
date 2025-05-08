import { ReactNode } from "react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 p-6 flex flex-col gap-4 shadow-sm">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          Dashboard
        </h2>
        <nav className="flex flex-col gap-3">
          <Link href="/dashboard" className="font-medium text-slate-700 hover:text-blue-700 transition">
            Overview
          </Link>
          <Link href="/dashboard/assignments" className="font-medium text-slate-700 hover:text-pink-700 transition">
            Assignments
          </Link>
          <Link href="/dashboard/collaboration" className="font-medium text-slate-700 hover:text-indigo-700 transition">
            Collaboration Rooms
          </Link>
          <Link href="/dashboard/templates" className="font-medium text-slate-700 hover:text-emerald-700 transition">
            Project Templates
          </Link>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen px-4 py-8">
        {children}
      </main>
    </div>
  );
}
