"use client";
import CountUp from "@/components/CountUp";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* ===== VIDEO BACKGROUND ===== */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/cherry.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* ===== SOFT OVERLAY ===== */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f14]/15 to-[#0b0f14]/30" />

      {/* ===== HERO CONTENT ===== */}
      <div
        className="
          relative z-10 flex min-h-screen flex-col items-center justify-center
          px-4 sm:px-6 text-center
          pt-28 sm:pt-0   /* 🔥 NAVBAR OFFSET FIX */
        "
      >

        {/* Badge */}
        <span className="mb-4 inline-flex items-center gap-2 rounded-full
          border border-pink-500/40 bg-pink-500/10
          px-4 py-1.5 text-xs sm:text-sm text-white animate-fade-up">
          🌸 Spring 2026 — Enrollment Open
        </span>

        {/* Heading */}
        <h1
          className="
            font-extrabold text-white leading-tight
            animate-fade-up animate-delay-100
            text-[2rem] sm:text-5xl md:text-7xl
          "
        >
          Make real contributions to
          <br />
          <span className="block mt-1 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            &lt;Production Software /&gt;
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 sm:mt-6 max-w-xl sm:max-w-2xl
          text-sm sm:text-lg text-gray-300
          animate-fade-up animate-delay-200">
          Build meaningful features, ship to production, and grow your impact.
        </p>

        {/* CTA */}
        <button
          onClick={() => {
            const el = document.getElementById("features");
            if (!el) return;

            el.classList.add("apply-highlight");
            el.scrollIntoView({ behavior: "smooth", block: "start" });

            setTimeout(() => el.classList.remove("apply-highlight"), 2000);
          }}
          className="mt-6 sm:mt-10 inline-flex items-center justify-center
            rounded-xl bg-gradient-to-r from-pink-500 to-purple-600
            px-7 py-3 sm:px-10 sm:py-4
            text-sm sm:text-lg font-semibold text-white
            transition hover:scale-[1.03] active:scale-[0.97]
            animate-fade-up animate-delay-300"
        >
          Apply for Spring Contribution →
        </button>

        {/* Dates */}
        <div className="mt-6 sm:mt-10 w-full max-w-xl
          flex flex-col gap-2 sm:flex-row sm:justify-between
          animate-fade-up animate-delay-350">

          <span className="rounded-full border border-pink-500/40 bg-pink-500/10
            px-4 py-1.5 text-xs sm:text-sm text-white">
            🌸 Registration: Feb 1 – Feb 28, 2026
          </span>

          <span className="rounded-full border border-pink-500/40 bg-pink-500/10
            px-4 py-1.5 text-xs sm:text-sm text-white">
            🌸 Coding: Mar 1 – May 30, 2026
          </span>
        </div>

        {/* Stats */}
        <div
          className="
            mt-8 sm:mt-14
            grid grid-cols-2 sm:flex gap-4 sm:gap-6
            animate-fade-up animate-delay-400
          "
        >
          {[
            { to: 10000, label: "Developers" },
            { to: 1500, label: "Resources" },
            { to: 500, label: "PRs" },
            { to: 50, label: "Events" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5
                px-6 py-4 text-center backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white">
                <CountUp to={s.to} suffix="+" />
              </div>
              <div className="mt-1 text-xs sm:text-sm text-gray-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
