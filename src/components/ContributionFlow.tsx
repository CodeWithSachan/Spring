"use client";

import { useEffect, useRef, useState } from "react";

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full px-6 py-32 bg-[#0b0f14]"
    >
      {/* Header */}
      <div className="mb-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          <span className="text-pink-400">//</span> How Contributions Turn Into Production
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          Not practice. Not demos. Real code shipped with real teams.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">

        {/* Top nodes */}
        <div className="relative grid grid-cols-3 mb-14">
          {["01", "02", "03"].map((n, i) => (
            <div key={n} className="flex justify-center">
              <div
                className={`
                  w-16 h-16 rounded-2xl
                  bg-gradient-to-br from-pink-500 to-purple-600
                  text-white font-mono text-xl
                  flex items-center justify-center
                  shadow-lg shadow-pink-500/30
                  transition-all duration-700
                  ${active ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                `}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {n}
              </div>
            </div>
          ))}
        </div>

        {/* Animated line */}
        <div className="absolute left-[8%] right-[8%] top-[92px] h-[3px] bg-white/10 overflow-hidden">
          <div
            className={`
              h-full bg-gradient-to-r from-pink-500 via-purple-500 to-emerald-400
              transition-all duration-[2200ms] ease-out
              ${active ? "w-full" : "w-0"}
            `}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <Card
            title="Choose"
            code="selectProject()"
            delay={300}
            active={active}
            desc="Browse available projects and select one that matches your interests and skill level."
          />

          {/* Card 2 */}
          <Card
            title="Build"
            code="buildFeature()"
            delay={500}
            active={active}
            desc="Work on your feature with guidance from maintainers. Get code reviews and iterate."
          />

          {/* Card 3 */}
          <Card
            title="Ship"
            code="deploy()"
            delay={700}
            active={active}
            desc="Merge your code to production. See your contribution go live and make real impact."
          />
        </div>
      </div>
    </section>
  );
}

/* Card component */
function Card({
  title,
  code,
  desc,
  delay,
  active,
}: {
  title: string;
  code: string;
  desc: string;
  delay: number;
  active: boolean;
}) {
  return (
    <div
      className={`
        rounded-2xl bg-white/5 border border-white/10
        p-8 shadow-lg backdrop-blur
        transition-all duration-700 ease-out
        ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-pink-400 font-mono mb-4">{code}</p>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}
