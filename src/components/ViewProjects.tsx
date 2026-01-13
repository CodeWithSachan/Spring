"use client";

import Link from "next/link";

export default function ProjectsGateway() {
  return (
    <section className="relative w-full px-6 py-28 bg-black overflow-hidden">
      
      {/* ===== SPRING AMBIENT GLOW ===== */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="mt-24 h-[480px] w-[480px] rounded-full 
          bg-gradient-to-r from-pink-500/20 to-purple-500/20 
          blur-[180px]" 
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Open Source{" "}
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          Jump into real-world coding with projects that welcome everyone,
          from first-time contributors to seasoned developers. Whether you
          want to fix a bug, add a feature, or build something entirely new,
          there&apos;s a place for you here.
        </p>

        {/* CTA */}
        <Link
          href="/projects"
          className="
            group
            inline-flex items-center gap-2
            rounded-xl
            border border-pink-500/40
            px-8 py-4
            text-pink-400 font-medium text-lg
            transition-all duration-300
            hover:bg-pink-500/10
            hover:scale-[1.04]
            hover:shadow-[0_0_40px_-10px_rgba(236,72,153,0.6)]
            active:scale-[0.97]
          "
        >
          View Projects
          <span className="text-xl transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </Link>

      </div>
    </section>
  );
}
