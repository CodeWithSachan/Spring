"use client";

import { useSession } from "next-auth/react";
import StatsCard from "./components/stats/StatsCard";
import ContributorTimeline from "./components/timeline/ContributorTimeline";

export default function DashboardPage() {
  const { data: session } = useSession();

  const stats = [
    { label: "Projects", value: 2 },
    { label: "PRs Opened", value: 6 },
    { label: "PRs Merged", value: 3 },
    { label: "Badges", value: 1 },
  ];

  return (
    <section className="min-h-screen px-6 py-28 bg-[#0b0f14]">
      <div className="mx-auto max-w-7xl space-y-16">

        {/* ===== HEADER ===== */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Welcome back,{" "}
            <span className="text-pink-400">
              {session?.user?.name}
            </span>
          </h1>

          <p className="text-gray-400">
            Spring Contribution 2026 · Contributor
          </p>
        </div>

        {/* ===== STATS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StatsCard
              key={s.label}
              label={s.label}
              value={s.value}
            />
          ))}
        </div>

        {/* ===== PROJECTS ===== */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-6">
            Your Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-medium mb-2">
                Civic Sense
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Status: <span className="text-emerald-400">Active</span>
              </p>
              <span className="text-xs text-gray-500">
                Mentor: Silicality Core
              </span>
            </div>

          </div>
        </div>

        {/* ===== ACTIVITY ===== */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-6">
            Recent Activity
          </h2>

          <ContributorTimeline />
        </div>

      </div>
    </section>
  );
}
