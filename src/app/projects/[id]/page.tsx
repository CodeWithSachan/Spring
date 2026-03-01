// import JoinProjectButton from "../components/JoinProjectButton";
// import { projects } from "../data";
// import Link from "next/link";
// import { phaseGuard } from "@/lib/season/phaseGuard";

// export default async function ProjectDetail({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const project = projects.find((p) => p.id === params.id);

//   if (!project) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-400">
//         Project not found
//       </div>
//     );
//   }

//   // 🔐 Server-side phase guard
//   const gate = await phaseGuard("CONTRIBUTION");

//   return (
//     <section className="relative min-h-screen px-6 py-32 bg-[#0b0f14] overflow-hidden">
//       {/* Ambient glow */}
//       <div className="pointer-events-none absolute inset-0 flex justify-center">
//         <div className="mt-24 h-[520px] w-[520px] rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-[220px]" />
//       </div>

//       <div className="relative mx-auto max-w-4xl">

//         {/* ===== CONTRIBUTION LOCK NOTICE ===== */}
//         {!gate.allowed && (
//           <div className="mb-10 rounded-2xl border border-pink-500/30 bg-pink-500/10 p-5 text-sm text-pink-200">
//             🌸 <strong>Contributions not open yet</strong>
//             <p className="mt-2 text-pink-100">
//               Contributions start on <strong>March 1, 2026</strong>.
//               Please complete registration to participate.
//             </p>

//             <div className="mt-4">
//               <Link
//                 href="https://forms.gle/K3njXShxxrb7tRLo6"
//                 target="_blank"
//                 className="inline-flex rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 text-white text-sm font-medium hover:scale-[1.03] transition"
//               >
//                 Register for Spring 2026 →
//               </Link>
//             </div>
//           </div>
//         )}

//         {/* ===== HEADER ===== */}
//         <div className="mb-10">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             {project.title}
//           </h1>

//           <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
//             {project.description}
//           </p>
//         </div>

//         {/* ===== META ===== */}
//         <div className="mb-10 flex flex-wrap gap-4">
//           <span
//             className={`text-sm px-4 py-1.5 rounded-full ${
//               project.difficulty === "Beginner"
//                 ? "bg-emerald-500/20 text-emerald-400"
//                 : project.difficulty === "Intermediate"
//                 ? "bg-yellow-500/20 text-yellow-400"
//                 : "bg-red-500/20 text-red-400"
//             }`}
//           >
//             {project.difficulty}
//           </span>

//           <span
//             className={`text-sm px-4 py-1.5 rounded-full ${
//               gate.allowed
//                 ? "bg-pink-500/20 text-pink-400"
//                 : "bg-white/10 text-gray-400"
//             }`}
//           >
//             {gate.allowed ? "Contributions Open" : "Locked"}
//           </span>
//         </div>

//         {/* ===== TECH STACK ===== */}
//         <div className="mb-12">
//           <h3 className="text-white font-semibold mb-3">Tech Stack</h3>
//           <div className="flex flex-wrap gap-2">
//             {project.tech.map((t) => (
//               <span
//                 key={t}
//                 className="text-xs rounded-full bg-white/10 px-3 py-1 text-gray-300"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* ===== MAINTAINER ===== */}
//         <div className="mb-12 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
//           <h3 className="text-white font-semibold mb-2">Maintained by</h3>
//           <p className="text-gray-400 text-sm">
//             <span className="text-white">{project.maintainer.name}</span> —{" "}
//             {project.maintainer.role}
//           </p>
//         </div>

//         {/* ===== HOW TO CONTRIBUTE ===== */}
//         <div className="mb-14">
//           <h3 className="text-white font-semibold mb-4">How to Contribute</h3>

//           <ol className="space-y-3 text-gray-400 text-sm list-decimal list-inside">
//             <li>Register for Spring 2026 using the Google Form.</li>
//             <li>Wait for the contribution phase to begin.</li>
//             <li>Pick an issue and coordinate with the maintainer.</li>
//             <li>Submit clean PRs and iterate based on feedback.</li>
//           </ol>
//         </div>


// <div className="flex flex-wrap items-center gap-4 mb-10">
//   {gate.allowed ? (
//     <>
//       <JoinProjectButton projectId={project.id} />

//       <Link
//         href={project.repo}
//         target="_blank"
//         className="text-pink-400 hover:text-pink-300 transition"
//       >
//         View Repository →
//       </Link>
//     </>
//   ) : (
//     <span className="text-sm text-gray-400">
//       Repository access unlocks on March 1, 2026
//     </span>
//   )}
// </div>

//         {/* ===== RECOGNITION ===== */}
//         <div className="border-t border-white/10 pt-6">
//           <p className="text-sm text-gray-400 mb-2">
//             🏆 Spring 2026 Recognition
//           </p>

//           <Link
//             href="/recognition"
//             className="text-pink-400 hover:text-pink-300 transition text-sm"
//           >
//             View recognized contributors →
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
import { prisma } from "@/lib/prisma";
import JoinProjectButton from "../components/JoinProjectButton";
import Link from "next/link";
import { phaseGuard } from "@/lib/season/phaseGuard";

export default async function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const project = await prisma.project.findUnique({
    where: { slug: params.id },
  });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Project not found
      </div>
    );
  }

  const gate = await phaseGuard("CONTRIBUTION");

  return (
    <section className="relative min-h-screen px-6 py-32 bg-[#0b0f14]">
      <div className="relative mx-auto max-w-4xl">

        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* META */}
        <div className="mb-10 flex flex-wrap gap-4">
          <span
            className={`text-sm px-4 py-1.5 rounded-full ${
              project.difficulty === "BEGINNER"
                ? "bg-emerald-500/20 text-emerald-400"
                : project.difficulty === "INTERMEDIATE"
                ? "bg-yellow-500/20 text-yellow-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {project.difficulty}
          </span>

          <span
            className={`text-sm px-4 py-1.5 rounded-full ${
              gate.allowed
                ? "bg-pink-500/20 text-pink-400"
                : "bg-white/10 text-gray-400"
            }`}
          >
            {gate.allowed ? "Contributions Open" : "Locked"}
          </span>
        </div>

        {/* TECH STACK */}
        <div className="mb-12">
          <h3 className="text-white font-semibold mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs rounded-full bg-white/10 px-3 py-1 text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* MAINTAINER */}
        <div className="mb-12 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-white font-semibold mb-2">Maintained by</h3>
          <p className="text-gray-400 text-sm">
            <span className="text-white">
              {project.maintainerName}
            </span>{" "}
            — {project.maintainerRole}
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          {gate.allowed ? (
            <>
              <JoinProjectButton projectId={project.slug} />

              <Link
                href={project.repoUrl}
                target="_blank"
                className="text-pink-400 hover:text-pink-300 transition"
              >
                View Repository →
              </Link>
            </>
          ) : (
            <span className="text-sm text-gray-400">
              Repository access unlocks soon
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
