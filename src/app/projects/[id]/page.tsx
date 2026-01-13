import { projects } from "../data";
import Link from "next/link";

export default function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Project not found
      </div>
    );
  }

  return (
    <section className="relative min-h-screen px-6 py-32 bg-[#0b0f14] overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="mt-24 h-[520px] w-[520px] rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-[220px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* ===== HERO HEADER ===== */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* ===== META BADGES ===== */}
        <div className="mb-10 flex flex-wrap gap-4">
          {/* Difficulty */}
          <span
            className={`
              text-sm px-4 py-1.5 rounded-full
              ${
                project.difficulty === "Beginner"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : project.difficulty === "Intermediate"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-red-500/20 text-red-400"
              }
            `}
          >
            {project.difficulty}
          </span>

          {/* Accepting */}
          <span
            className={`
              text-sm px-4 py-1.5 rounded-full
              ${
                project.accepting
                  ? "bg-pink-500/20 text-pink-400"
                  : "bg-white/10 text-gray-400"
              }
            `}
          >
            {project.accepting ? "Accepting Contributors" : "Currently Closed"}
          </span>
        </div>

        {/* ===== TECH STACK ===== */}
        <div className="mb-12">
          <h3 className="text-white font-semibold mb-3">
            Tech Stack
          </h3>
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

        {/* ===== MAINTAINER ===== */}
        <div className="mb-12 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-white font-semibold mb-2">
            Maintained by
          </h3>
          <p className="text-gray-400 text-sm">
            <span className="text-white">
              {project.maintainer.name}
            </span>{" "}
            — {project.maintainer.role}
          </p>
        </div>

        {/* ===== HOW TO CONTRIBUTE ===== */}
        <div className="mb-14">
          <h3 className="text-white font-semibold mb-4">
            How to Contribute
          </h3>

          <ol className="space-y-3 text-gray-400 text-sm list-decimal list-inside">
            <li>Read the repository README and contribution guidelines.</li>
            <li>Pick a beginner-friendly issue or discuss with the maintainer.</li>
            <li>Submit a clean pull request with context.</li>
            <li>Iterate based on review feedback.</li>
          </ol>
        </div>

        {/* ===== CTAs ===== */}
        <div className="flex flex-wrap gap-4 mb-10">
          <Link
            href={project.repo}
            target="_blank"
            className="text-pink-400 hover:text-pink-300 transition"
          >
            View Repository →
          </Link>

          {project.accepting && (
            <Link
              href="https://forms.gle/YOUR_CONTRIBUTOR_FORM_LINK"
              target="_blank"
              className="
                rounded-full
                bg-gradient-to-r from-pink-500 to-purple-600
                px-6 py-2
                text-white text-sm font-medium
                hover:scale-[1.03] transition
              "
            >
              Apply as Contributor
            </Link>
          )}
        </div>

        {/* ===== RECOGNITION PREVIEW ===== */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-sm text-gray-400 mb-2">
            🏆 Spring 2026 Recognition
          </p>

          <Link
            href={`/spring/recognition`}
            className="text-pink-400 hover:text-pink-300 transition text-sm"
          >
            View recognized contributors →
          </Link>
        </div>
      </div>

      {/* ===== STICKY APPLY (DESKTOP) ===== */}
      {project.accepting && (
        <div className="hidden lg:block fixed bottom-6 right-6">
          <Link
            href="https://forms.gle/YOUR_CONTRIBUTOR_FORM_LINK"
            target="_blank"
            className="
              rounded-full
              bg-gradient-to-r from-pink-500 to-purple-600
              px-6 py-3
              text-white font-medium
              shadow-lg
              hover:scale-[1.04] transition
            "
          >
            Apply →
          </Link>
        </div>
      )}
    </section>
  );
}