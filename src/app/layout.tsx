import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import AuthButton from "@/components/header-auth";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased transition-colors duration-300">
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
          <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-3">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-2xl font-bold text-blue-700 tracking-tight hover:text-blue-900 transition">
                ClassSync
              </Link>
              <Link href="/dashboard" className="font-medium text-slate-700 hover:text-blue-700 transition">
                Dashboard
              </Link>
              <Link href="/dashboard/assignments" className="font-medium text-slate-700 hover:text-pink-700 transition">
                Assignments
              </Link>
              <Link href="/dashboard/collaboration" className="font-medium text-slate-700 hover:text-indigo-700 transition">
                Collaboration Rooms
              </Link>
              <Link href="/dashboard/templates" className="font-medium text-slate-700 hover:text-emerald-700 transition">
                Templates
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <AuthButton />
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
