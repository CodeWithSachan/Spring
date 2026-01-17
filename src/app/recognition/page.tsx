// "use client";

// import { useSession } from "next-auth/react";
// import Link from "next/link";

// export default function RecognitionPage() {
//   const { data: session } = useSession();

//   return (
//     <section className="min-h-screen px-6 py-28 bg-[#0b0f14]">
//       <div className="mx-auto max-w-7xl space-y-16">

//         {/* ===== HEADER ===== */}
//         <div className="flex flex-col gap-3">
//           <h1 className="text-3xl md:text-4xl font-bold text-white">
//             Spring Recognition 🌸
//           </h1>

//           <p className="text-gray-400">
//             Celebrating contributors who made real impact in production code.
//           </p>
//         </div>

//         {/* ===== MAIN CARD ===== */}
//         <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
//           <h2 className="text-2xl font-semibold text-white mb-3">
//             Recognition will be announced soon
//           </h2>

//           <p className="text-gray-400 max-w-2xl mx-auto mb-8">
//             Spring 2026 recognition is awarded after the contribution phase ends.
//             Complete your contributions, get your pull requests merged, and your
//             work will be reviewed for badges and highlights.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/projects"
//               className="
//                 rounded-full
//                 bg-gradient-to-r from-pink-500 to-purple-600
//                 px-6 py-3
//                 text-white font-medium
//                 hover:scale-[1.03] transition
//               "
//             >
//               Explore Projects →
//             </Link>

//             <Link
//               href="/dashboard"
//               className="
//                 rounded-full
//                 border border-white/15
//                 px-6 py-3
//                 text-white
//                 hover:bg-white/5 transition
//               "
//             >
//               Go to Dashboard
//             </Link>
//           </div>
//         </div>

//         {/* ===== USER CONTEXT (OPTIONAL, SIMPLE) ===== */}
//         {session && (
//           <div className="text-sm text-gray-500 text-center">
//             Logged in as <span className="text-gray-300">{session.user?.name}</span>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }
import { prisma } from "@/lib/prisma";

export default async function RecognitionPage() {
  const recognitions = await prisma.recognition.findMany({
    include: {
      user: true,
    },
    orderBy: {
      score: "desc",
    },
  });

  return (
    <section className="min-h-screen px-6 py-28 bg-[#0b0f14]">
      <div className="mx-auto max-w-4xl space-y-10">

        <h1 className="text-3xl font-bold text-white">
          🌸 Spring 2026 Recognition
        </h1>

        {recognitions.length === 0 ? (
          <p className="text-gray-400">
            No recognitions yet.
          </p>
        ) : (
          <ul className="space-y-4">
            {recognitions.map((r) => (
              <li
                key={r.id}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-white font-medium">
                  {r.user.name}
                </p>

                <p className="text-sm text-gray-400">
                  {r.title}
                </p>

                <p className="text-xs text-gray-500">
                  Score: {r.score}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
