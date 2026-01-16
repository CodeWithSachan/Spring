"use client";

import { signOut, useSession } from "next-auth/react";

export default function DashboardHeader() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0f14]/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <div className="text-lg font-semibold tracking-tight">
          🌸 Silicality <span className="text-pink-400">Dashboard</span>
        </div>

        {/* User */}
        <div className="flex items-center gap-4">

          <span className="text-sm text-gray-400">
            Contributor
          </span>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="text-pink-400">●</span>
            <span className="text-sm">{session?.user?.name}</span>
          </div>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-sm text-red-400 hover:text-red-300 transition"
          >
            Sign Out
          </button>
        </div>

      </div>
    </header>
  );
}
