"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const roles = [
  {
    title: "Join as a Contributor",
    desc: "Work on real production codebases used by real users and ship meaningful features.",
    icon: "/icons/Contributor.png",
    href: "https://forms.gle/K3njXShxxrb7tRLo6",
    accent: "hover:border-pink-500/50",
  },
  {
    title: "Join as a Project Admin",
    desc: "Maintain repositories, review PRs, and help guide contributors.",
    icon: "/icons/admin.png",
    href: "https://forms.gle/kqUuFX8F5tAbb4uJA",
    accent: "hover:border-purple-500/50",
  },
  {
    title: "Join as a Mentor",
    desc: "Guide contributors through reviews, feedback, and best practices.",
    icon: "/icons/mentor.png",
    href: "https://forms.gle/Kb5PgrryEi75Rjp56",
    accent: "hover:border-emerald-500/50",
  },
];

export default function Features() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("features");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      className={`
        relative px-6 py-32 bg-[#0b0f14]
        transition-all duration-700
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Header */}
      <div
        className={`
          mx-auto mb-16 max-w-3xl text-center
          transition-all duration-700
          ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
        `}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          <span className="text-pink-400">//</span> Choose How You Want to Join
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          Select the role that best fits your experience and interests.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {roles.map((role, i) => (
          <a
            key={role.title}
            href={role.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group
              rounded-2xl
              bg-white/5
              border border-white/10
              p-8
              backdrop-blur
              transition-all duration-500 ease-out
              hover:-translate-y-2
              ${role.accent}
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {/* ICON */}
            <div className="mb-5 flex justify-center">
              <Image
                src={role.icon}
                alt={role.title}
                width={64}
                height={64}
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-white mb-3 text-center">
              {role.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-400 leading-relaxed text-center mb-6">
              {role.desc}
            </p>

            {/* CTA */}
            <div className="text-center text-sm font-medium text-pink-400 opacity-80 group-hover:opacity-100 transition">
              Apply →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
