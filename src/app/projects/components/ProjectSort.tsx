"use client";

import type { ProjectSort } from "../types/project";

export default function ProjectSortSelect({
  value,
  onChange,
}: {
  value: ProjectSort;
  onChange: (v: ProjectSort) => void;
}) {
  return (
    <div className="flex justify-center mb-10">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as ProjectSort)}
        className="
          rounded-xl bg-white/[0.06]
          border border-white/10
          px-5 py-2
          text-sm text-white
          outline-none transition
          hover:border-pink-500/40
          focus:border-pink-500/60
          focus:ring-2 focus:ring-pink-500/20
        "
      >
        <option value="featured">Featured First</option>
        <option value="beginner">Beginner Friendly</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
}
