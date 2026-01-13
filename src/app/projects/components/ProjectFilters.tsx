"use client";

import type { ProjectFilterState, ProjectDifficulty } from "../types/project";

export default function ProjectFilters({
  filters,
  setFilters,
}: {
  filters: ProjectFilterState;
  setFilters: (f: ProjectFilterState) => void;
}) {
  return (
    <div className="mb-12 flex flex-wrap items-center justify-center gap-4">

      {/* Difficulty */}
      <select
        value={filters.difficulty}
        onChange={(e) =>
          setFilters({
            ...filters,
            difficulty: e.target.value as ProjectDifficulty,
          })
        }
        className="
          rounded-xl bg-white/[0.06]
          border border-white/10
          px-4 py-2
          text-sm text-white
          outline-none
          hover:border-pink-500/40
          focus:ring-2 focus:ring-pink-500/20
        "
      >
        <option value="All">All Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      {/* Accepting Toggle */}
      <button
        onClick={() =>
          setFilters({
            ...filters,
            accepting: filters.accepting === true ? null : true,
          })
        }
        className={`
          rounded-xl px-5 py-2 text-sm border transition
          ${
            filters.accepting
              ? "border-pink-500/50 text-pink-400"
              : "border-white/10 text-gray-400 hover:text-white"
          }
        `}
      >
        Accepting Contributors
      </button>

    </div>
  );
}
