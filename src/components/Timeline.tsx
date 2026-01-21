"use client";

import { useEffect, useRef, useState } from "react";

const timeline = [
  {
    title: "Registration Opens",
    desc: "Projects, and Mentors can start registering",
    date: "January 20",
    icon: "👥",
    highlight: true,
  },
  {
    title: "Contributor Registration Opens",
    desc: "Contributors can now register and browse available projects",
    date: "January 20",
    icon: "</>",
    highlight: true,
  },
  {
    title: "Coding Period Begins",
    desc: "The official coding period starts. Let the collaboration begin!",
    date: "March 1",
    icon: "</>",
    highlight: false,
  },
  {
    title: "Coding Period Ends",
    desc: "Final submissions and project evaluations",
    date: "May 30",
    icon: "📅",
    highlight: false,
  },
  {
    title: "Certificates Awarded",
    desc: "Recognition and certificates distributed to participants",
    date: "May 31",
    icon: "🎖️",
    highlight: false,
  },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative w-full px-6 py-32 bg-black overflow-hidden"
    >
      {/* Subtle pink ambient glow (palette-safe) */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="mt-40 h-[420px] w-[420px] rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-[180px]" />
      </div>

      {/* Header */}
      <div
        className={`mb-20 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Event <span className="text-blue-300">Timeline</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Track the journey from registration to rewards. Here's what to expect
          throughout Winter of Code Social.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 h-full w-[2px] bg-white/10" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <div
              key={i}
              className={`relative flex gap-6 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Icon */}
              <div
                className={`
                  z-10 flex h-12 w-12 items-center justify-center rounded-full
                  transition-all duration-300
                  ${
                    item.highlight
                      ? "bg-blue-300 text-black"
                      : "bg-[#0b0f14] text-gray-300 border border-white/10"
                  }
                `}
              >
                {item.icon === "</>" ? (
                  <span className="font-mono text-sm">&lt;/&gt;</span>
                ) : (
                  item.icon
                )}
              </div>

              {/* Card */}
              <div
                className="
                  group
                  flex-1 rounded-xl
                  bg-[#0b0f14]
                  border border-white/10
                  px-6 py-5
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-pink-500/40
                  hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]
                "
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">
                    {item.title}
                  </h3>

                  <span
                    className={`
                      text-xs px-3 py-1 rounded-full
                      ${
                        item.highlight
                          ? "bg-green-500/20 text-green-400"
                          : "text-gray-400"
                      }
                    `}
                  >
                    {item.date}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
