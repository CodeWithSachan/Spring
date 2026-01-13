"use client";

import { useEffect, useRef, useState } from "react";

export default function WhoIsThisFor() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full px-6 py-28 bg-[#0b0f14]"
    >
      {/* Header */}
      <div
        className={`
          mb-16 max-w-3xl mx-auto text-center
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
          <span className="text-pink-400">//</span> Who This Is For
        </h2>
        <p className="text-gray-400 text-lg">
          Spring Contribution is built for developers who value
          learning, collaboration, and real impact.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Good fit */}
        <AnimatedCard
          visible={visible}
          direction="left"
          delay={150}
          title="This is a good fit if you"
          icon="✓"
          iconColor="text-emerald-400"
          items={[
            "You are a student or early-career developer",
            "You know basic Git and GitHub workflows",
            "You want to understand how real teams ship software",
            "You are open to feedback and code reviews",
            "You care more about learning than speed",
          ]}
        />

        {/* Not a fit */}
        <AnimatedCard
          visible={visible}
          direction="right"
          delay={300}
          title="This may not be a fit if you"
          icon="✕"
          iconColor="text-red-400"
          items={[
            "You are only looking for certificates or badges",
            "You prefer competitive programming or hackathons",
            "You want to rush contributions without understanding",
            "You are not interested in reviews or collaboration",
            "You are looking for shortcuts to pad a resume",
          ]}
        />
      </div>
    </section>
  );
}

/* Card component */
function AnimatedCard({
  visible,
  direction,
  delay,
  title,
  icon,
  iconColor,
  items,
}: {
  visible: boolean;
  direction: "left" | "right";
  delay: number;
  title: string;
  icon: string;
  iconColor: string;
  items: string[];
}) {
  const offset = direction === "left" ? "-translate-x-10" : "translate-x-10";

  return (
    <div
      className={`
        bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-x-0" : `opacity-0 ${offset}`}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
        <span className={iconColor}>{icon}</span>
        {title}
      </h3>

      <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
        {items.map((item, i) => (
          <li
            key={item}
            className={`
              transition-all duration-500
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
            `}
            style={{ transitionDelay: `${delay + i * 80}ms` }}
          >
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
