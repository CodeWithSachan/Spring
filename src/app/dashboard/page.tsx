"use client";

import { useEffect, useState } from "react";
import StatsCard from "./components/stats/StatsCard";
import ContributorTimeline from "./components/timeline/ContributorTimeline";
import Link from "next/link";

type DashboardStats = {
  projects: number;
  prsOpened: number;
  prsMerged: number;
  badges: number;
  contributions: any[];
};

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading dashboard...
      </div>
    );
  }

  const isNewUser =
    stats!.projects === 0 &&
    stats!.prsOpened === 0 &&
    stats!.prsMerged === 0;

  return (
    <section className="min-h-screen px-6 py-28 bg-[#0b0f14]">
      <div className="mx-auto max-w-7xl space-y-16">

        {/* ===== NEW USER STATE ===== */}
        {isNewUser ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Welcome to Silicality Spring 🌸
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              You haven’t joined any projects yet. Start by exploring
              beginner-friendly open-source projects.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/projects"
                className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-semibold text-white"
              >
                Explore Projects
              </Link>

              <Link
                href="/#timeline"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                How Spring Works
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* ===== STATS ===== */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatsCard label="Projects" value={stats!.projects} />
              <StatsCard label="PRs Opened" value={stats!.prsOpened} />
              <StatsCard label="PRs Merged" value={stats!.prsMerged} />
              <StatsCard label="Badges" value={stats!.badges} />
            </div>

            {/* ===== ACTIVITY ===== */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">
                Recent Activity
              </h2>

              <ContributorTimeline
                contributions={stats!.contributions}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
