// "use client";

// import { useSession } from "next-auth/react";
// import StatsCard from "./components/stats/StatsCard";
// import ContributorTimeline from "./components/timeline/ContributorTimeline";
// import Link from "next/link";

// export default function DashboardPage() {
//   const { data: session, status } = useSession();

//   // 🔹 TEMPORARY LOGIC (later comes from DB)
//   const userStats = {
//     projects: 0,
//     prsOpened: 0,
//     prsMerged: 0,
//     badges: 0,
//   };

//   const isNewUser =
//     userStats.projects === 0 &&
//     userStats.prsOpened === 0 &&
//     userStats.prsMerged === 0;

//   if (status === "loading") {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-400">
//         Loading dashboard...
//       </div>
//     );
//   }

//   return (
//     <section className="min-h-screen px-6 py-28 bg-[#0b0f14]">
//       <div className="mx-auto max-w-7xl space-y-16">

//         {/* ===== HEADER ===== */}
//         <div className="flex flex-col gap-3">
//           <h1 className="text-3xl md:text-4xl font-bold text-white">
//             Welcome back,{" "}
//             <span className="text-pink-400">
//               {session?.user?.name}
//             </span>
//           </h1>

//           <p className="text-gray-400">
//             Spring Contribution 2026 · Contributor
//           </p>
//         </div>

//         {/* ===== NEW USER EMPTY STATE ===== */}
//         {isNewUser ? (
//           <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
//             <h2 className="text-2xl font-bold text-white mb-3">
//               Welcome to Silicality Spring 🌸
//             </h2>

//             <p className="text-gray-400 max-w-xl mx-auto mb-8">
//               You haven’t joined any projects yet. Start by exploring
//               beginner-friendly open-source projects and make your first real
//               contribution.
//             </p>

//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <Link
//                 href="/projects"
//                 className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-semibold text-white"
//               >
//                 Explore Projects
//               </Link>

//               <Link
//                 href="/#timeline"
//                 className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10"
//               >
//                 How Spring Works
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <>
//             {/* ===== STATS ===== */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <StatsCard label="Projects" value={userStats.projects} />
//               <StatsCard label="PRs Opened" value={userStats.prsOpened} />
//               <StatsCard label="PRs Merged" value={userStats.prsMerged} />
//               <StatsCard label="Badges" value={userStats.badges} />
//             </div>

//             {/* ===== PROJECTS ===== */}
//             <div>
//               <h2 className="text-xl font-semibold text-white mb-6">
//                 Your Projects
//               </h2>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
//                   <h3 className="text-white font-medium mb-2">
//                     Civic Sense
//                   </h3>
//                   <p className="text-sm text-gray-400 mb-4">
//                     Status:{" "}
//                     <span className="text-emerald-400">Active</span>
//                   </p>
//                   <span className="text-xs text-gray-500">
//                     Mentor: Silicality Core
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* ===== ACTIVITY ===== */}
//             <div>
//               <h2 className="text-xl font-semibold text-white mb-6">
//                 Recent Activity
//               </h2>

//               <ContributorTimeline />
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useSession } from "next-auth/react";
// import { useEffect, useState } from "react";
// import Link from "next/link";

// import StatsCard from "./components/stats/StatsCard";
// import ContributorTimeline from "./components/timeline/ContributorTimeline";

// type DashboardStats = {
//   projects: number;
//   prsOpened: number;
//   prsMerged: number;
//   badges: number;
// };

// export default function DashboardPage() {
//   const { data: session, status } = useSession();

//   const [stats, setStats] = useState<DashboardStats | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!session?.user) return;

//     // 🔹 Later this will call a real API (Step 10)
//     // For now, this represents a fresh user correctly
//     setStats({
//       projects: 0,
//       prsOpened: 0,
//       prsMerged: 0,
//       badges: 0,
//     });

//     setLoading(false);
//   }, [session]);

//   if (status === "loading" || loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-400">
//         Loading dashboard…
//       </div>
//     );
//   }

//   if (!session) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-400">
//         Please sign in to view your dashboard.
//       </div>
//     );
//   }

//   const isNewUser =
//     stats?.projects === 0 &&
//     stats?.prsOpened === 0 &&
//     stats?.prsMerged === 0;

//   return (
//     <section className="min-h-screen px-6 py-28 bg-[#0b0f14]">
//       <div className="mx-auto max-w-7xl space-y-16">

//         {/* ===== HEADER ===== */}
//         <div className="flex flex-col gap-3">
//           <h1 className="text-3xl md:text-4xl font-bold text-white">
//             Welcome back,{" "}
//             <span className="text-pink-400">
//               {session.user.name}
//             </span>
//           </h1>

//           <p className="text-gray-400">
//             Spring Contribution 2026 · Contributor
//           </p>
//         </div>

//         {/* ===== EMPTY STATE (NEW USER) ===== */}
//         {isNewUser ? (
//           <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
//             <h2 className="text-2xl font-bold text-white mb-3">
//               Welcome to Silicality Spring 🌸
//             </h2>

//             <p className="text-gray-400 max-w-xl mx-auto mb-8">
//               You haven’t joined any projects yet.  
//               Start by exploring beginner-friendly projects and register
//               to participate in Spring 2026.
//             </p>

//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <Link
//                 href="/projects"
//                 className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-semibold text-white"
//               >
//                 Explore Projects
//               </Link>

//               <Link
//                 href="/#timeline"
//                 className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10"
//               >
//                 How Spring Works
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <>
//             {/* ===== STATS ===== */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <StatsCard label="Projects" value={stats.projects} />
//               <StatsCard label="PRs Opened" value={stats.prsOpened} />
//               <StatsCard label="PRs Merged" value={stats.prsMerged} />
//               <StatsCard label="Badges" value={stats.badges} />
//             </div>

//             {/* ===== PROJECTS (will be DB-driven later) ===== */}
//             <div>
//               <h2 className="text-xl font-semibold text-white mb-6">
//                 Your Projects
//               </h2>

//               <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-gray-400">
//                 Project data will appear here once you start contributing.
//               </div>
//             </div>

//             {/* ===== ACTIVITY ===== */}
//             <div>
//               <h2 className="text-xl font-semibold text-white mb-6">
//                 Recent Activity
//               </h2>

//               <ContributorTimeline />
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// }
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
