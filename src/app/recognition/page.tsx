// "use client";

// import RecognitionCard from "./components/RecognitionCard";
// import { recognitions } from "./data";

// export default function RecognitionPage() {
//   return (
//     <section className="relative w-full px-6 py-32 bg-[#0b0f14]">
//       <div className="mx-auto max-w-7xl">

//         {/* Header */}
//         <div className="mb-16 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Spring{" "}
//             <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
//               Recognition
//             </span>
//           </h1>
//           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//             Celebrating contributors who made real impact in production code.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {recognitions.map((r) => (
//             <RecognitionCard key={r.id} recognition={r} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function RecognitionPage() {
  const { data: session } = useSession();

  return (
    <section className="min-h-screen px-6 py-28 bg-[#0b0f14]">
      <div className="mx-auto max-w-7xl space-y-16">

        {/* ===== HEADER ===== */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Spring Recognition 🌸
          </h1>

          <p className="text-gray-400">
            Celebrating contributors who made real impact in production code.
          </p>
        </div>

        {/* ===== MAIN CARD ===== */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Recognition will be announced soon
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Spring 2026 recognition is awarded after the contribution phase ends.
            Complete your contributions, get your pull requests merged, and your
            work will be reviewed for badges and highlights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="
                rounded-full
                bg-gradient-to-r from-pink-500 to-purple-600
                px-6 py-3
                text-white font-medium
                hover:scale-[1.03] transition
              "
            >
              Explore Projects →
            </Link>

            <Link
              href="/dashboard"
              className="
                rounded-full
                border border-white/15
                px-6 py-3
                text-white
                hover:bg-white/5 transition
              "
            >
              Go to Dashboard
            </Link>
          </div>
        </div>

        {/* ===== USER CONTEXT (OPTIONAL, SIMPLE) ===== */}
        {session && (
          <div className="text-sm text-gray-500 text-center">
            Logged in as <span className="text-gray-300">{session.user?.name}</span>
          </div>
        )}

      </div>
    </section>
  );
}
