"use client";

import { ReactNode } from "react";
import Link from "next/link";

/**
 * TEMP MOCK AUTH
 * Later this will come from NextAuth / server session
 */
const mockUser = {
  name: "Ayush Sachan",
  role: "Contributor",
};

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  /**
   * FUTURE AUTH GUARD
   * -----------------
   * if (!session) redirect("/login")
   */

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">

      {/* ===== DASHBOARD NAVBAR ===== */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0f14]/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

          {/* Left: Brand */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight hover:text-pink-400 transition"
          >
            🌸 Silicality
          </Link>

          {/* Right: User */}
          <div className="flex items-center gap-6 text-sm">

            <span className="text-gray-400">
              {mockUser.role}
            </span>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <span className="text-pink-400">●</span>
              <span>{mockUser.name}</span>
            </div>

            {/* FUTURE LOGOUT */}
            <button
              className="text-gray-400 hover:text-white transition"
              onClick={() => {
                alert("Logout will be added with OAuth");
              }}
            >
              Logout
            </button>

          </div>
        </div>
      </header>

      {/* ===== PAGE CONTENT ===== */}
      <main className="relative">
        {children}
      </main>

    </div>
  );
}
