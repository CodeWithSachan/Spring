"use client";

import Link from "next/link";

// 🔹 TEMP DATA (same source as contributor profiles for now)
const contributors = [
  {
    id: "silicality-core",
    name: "Silicality Core",
    role: "Mentor",
    score: 980,
  },
  {
    id: "ayush-sachan",
    name: "Ayush Sachan",
    role: "Contributor",
    score: 420,
  },
  {
    id: "open-source-ninja",
    name: "Open Source Ninja",
    role: "Contributor",
    score: 310,
  },
];

// sort by score DESC
const ranked = [...contributors].sort((a, b) => b.score - a.score);

export default function LeaderboardPage() {
  return (
    <section className="relative w-full px-6 py-32 bg-[#0b0f14]">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contributor{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Leaderboard
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Ranked by real impact — merged PRs, reviews, and consistency.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 text-sm text-gray-400">
                <th className="px-6 py-4 text-left">Rank</th>
                <th className="px-6 py-4 text-left">Contributor</th>
                <th className="px-6 py-4 text-left">Role</th>
                <th className="px-6 py-4 text-right">Score</th>
              </tr>
            </thead>

            <tbody>
              {ranked.map((c, i) => (
                <tr
                  key={c.id}
                  className="
                    border-b border-white/5
                    hover:bg-white/[0.03]
                    transition
                  "
                >
                  {/* Rank */}
                  <td className="px-6 py-4 text-gray-400">
                    #{i + 1}
                  </td>

                  {/* Name */}
                  <td className="px-6 py-4">
                    <Link
                      href={`/contributors/${c.id}`}
                      className="text-white hover:text-pink-400 transition font-medium"
                    >
                      {c.name}
                    </Link>
                  </td>

                  {/* Role */}
                  <td className="px-6 py-4 text-gray-400">
                    {c.role}
                  </td>

                  {/* Score */}
                  <td className="px-6 py-4 text-right font-semibold text-pink-400">
                    {c.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Rankings update based on verified contributions only.
        </p>
      </div>
    </section>
  );
}
