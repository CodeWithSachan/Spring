"use client";

const mockUser = {
  name: "Ayush Sachan",
  role: "Contributor",
  season: "Spring Contribution 2026",
};

const stats = [
  { label: "Projects", value: 2 },
  { label: "PRs Opened", value: 6 },
  { label: "PRs Merged", value: 3 },
  { label: "Badges", value: 1 },
];

export default function DashboardPage() {
  return (
    <section className="min-h-screen px-6 py-28 bg-[#0b0f14]">
      <div className="mx-auto max-w-7xl space-y-16">

        {/* ===== HEADER ===== */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Welcome back,{" "}
            <span className="text-pink-400">{mockUser.name}</span>
          </h1>

          <p className="text-gray-400">
            {mockUser.season} · {mockUser.role}
          </p>
        </div>

        {/* ===== STATS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="
                rounded-2xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur
                p-6
              "
            >
              <div className="text-3xl font-bold text-white">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-gray-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ===== APPLIED PROJECTS ===== */}
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

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-medium mb-2">
                DaanSetu
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Status: <span className="text-yellow-400">Review Pending</span>
              </p>
              <span className="text-xs text-gray-500">
                Mentor: Ayush Sachan
              </span>
            </div>
          </div>
        </div>

        {/* ===== RECOGNITION ===== */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-6">
            Recognition
          </h2>

          <div className="flex flex-wrap gap-4">
            <span className="rounded-full bg-pink-500/20 text-pink-400 px-4 py-2 text-sm">
              🌸 First PR Merged
            </span>

            <span className="rounded-full bg-white/10 text-gray-300 px-4 py-2 text-sm">
              Consistent Contributor (locked)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
