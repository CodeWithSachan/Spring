"use client";

import Link from "next/link";
import type { Recognition } from "../data";

export default function RecognitionCard({
  recognition,
}: {
  recognition: Recognition;
}) {
  return (
    <Link
      href={`/projects/${recognition.projectId}`}
      className="
        group relative block
        rounded-2xl
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-6
        transition-all duration-300
        hover:-translate-y-2
        hover:border-pink-500/40
        hover:shadow-[0_0_0_1px_rgba(236,72,153,0.25)]
      "
    >
      {/* Category */}
      <span className="inline-block mb-3 text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-400">
        {recognition.category}
      </span>

      {/* Name */}
      <h3 className="text-lg font-semibold text-white mb-2">
        {recognition.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed mb-4">
        {recognition.description}
      </p>

      {/* Score */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">
          Score
        </span>
        <span className="text-lg font-bold text-pink-400">
          {recognition.score}
        </span>
      </div>

      {/* CTA */}
      <div className="mt-4 text-sm text-pink-400 group-hover:text-pink-300 transition">
        View Project →
      </div>
    </Link>
  );
}
