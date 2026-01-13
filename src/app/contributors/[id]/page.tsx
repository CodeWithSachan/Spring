"use client";

import Link from "next/link";

// 🔹 TEMP MOCK DATA (replace later with DB / API)
const contributors = [
  {
    id: "ayush-sachan",
    name: "Ayush Sachan",
    role: "Contributor",
    bio: "Full-stack developer passionate about open source and real-world software.",
    score: 420,
    badges: ["Top Contributor", "First PR", "Consistent"],
    projects: ["Civic Sense", "DaanSetu"],
    github: "https://github.com/CodeWithSachan",
  },
  {
    id: "silicality-core",
    name: "Silicality Core",
    role: "Mentor",
    bio: "Maintainers and mentors guiding contributors through production-grade OSS.",
    score: 980,
    badges: ["Mentor", "Reviewer"],
    projects: ["Civic Sense"],
    github: "https://github.com/silicality",
  },
];

export default function ContributorProfile({
  params,
}: {
  params: { id: string };
}) {
  const contributor = contributors.find((c) => c.id === params.id);

  if (!contributor) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Contributor not found
      </div>
    );
  }

  return (
    <section className="relative w-full px-6 py-32 bg-[#0b0f14]">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            {contributor.name}
          </h1>
          <p className="mt-2 text-gray-400">{contributor.role}</p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8">

          {/* Bio */}
          <p className="text-gray-300 leading-relaxed mb-6">
            {contributor.bio}
          </p>

          {/* Score */}
          <div className="mb-6">
            <span className="text-sm text-gray-400">Contribution Score</span>
            <div className="text-3xl font-bold text-pink-400">
              {contributor.score}
            </div>
          </div>

          {/* Badges */}
          <div className="mb-6">
            <h3 className="text-sm text-gray-400 mb-2">Badges</h3>
            <div className="flex flex-wrap gap-2">
              {contributor.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-pink-500/15 border border-pink-500/30 px-3 py-1 text-xs text-pink-300"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h3 className="text-sm text-gray-400 mb-2">Projects</h3>
            <div className="flex flex-wrap gap-2">
              {contributor.projects.map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-8">
            <Link
              href={contributor.github}
              target="_blank"
              className="text-pink-400 hover:text-pink-300 transition"
            >
              View GitHub →
            </Link>

            <Link
              href="/leaderboard"
              className="text-gray-400 hover:text-white transition"
            >
              View Leaderboard →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
