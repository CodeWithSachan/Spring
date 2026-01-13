import Link from "next/link";
import { Project } from "../data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="
        group relative block rounded-2xl
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-6
        transition-all duration-300
        hover:-translate-y-2
        hover:border-pink-500/40
        hover:shadow-[0_0_0_1px_rgba(236,72,153,0.25)]
        focus:outline-none focus:ring-2 focus:ring-pink-500/40
      "
    >
      {/* Featured badge */}
      {project.featured && (
        <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-400">
          ⭐ Featured
        </span>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs rounded-full bg-white/10 px-3 py-1 text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between mb-5">
        <span
          className={`
            text-xs px-3 py-1 rounded-full
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

        <span
          className={`text-xs ${
            project.accepting
              ? "text-emerald-400"
              : "text-gray-500"
          }`}
        >
          {project.accepting ? "Accepting Contributors" : "Closed"}
        </span>
      </div>

      {/* Maintainer */}
      <div className="mb-5 text-xs text-gray-400">
        Maintained by{" "}
        <span className="text-white">
          {project.maintainer.name}
        </span>{" "}
        — {project.maintainer.role}
      </div>

      {/* Footer CTA */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-pink-400 group-hover:text-pink-300 transition">
          View Details →
        </span>

        {project.accepting && (
          <span
            className="
              text-sm font-medium
              text-white
              bg-gradient-to-r from-pink-500 to-purple-600
              px-4 py-1.5 rounded-full
            "
          >
            Apply
          </span>
        )}
      </div>
    </Link>
  );
}
