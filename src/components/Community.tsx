"use client";

export default function Community() {
  return (
    <section className="relative w-full px-6 py-36 bg-[#0b0f14] overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="mt-24 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-sky-400/10 to-blue-500/10 blur-[200px]" />
      </div>

      {/* Card */}
      <div className="relative mx-auto max-w-5xl">
        <div
          className="
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            px-10 py-20
            shadow-2xl shadow-black/40
            text-center
            animate-fade-up
          "
        >
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-sky-400/40 bg-sky-400/10">
              <svg
                className="h-7 w-7 text-sky-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 20l1.8-4A7.87 7.87 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Community
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg text-gray-400 leading-relaxed mb-12">
            Connect with fellow developers, get help from mentors, and stay
            updated on the latest announcements in our Discord community.
          </p>

          {/* CTA Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Button */}
            <a
              href="https://discord.gg/JjcT9XSARV"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                px-8 py-4
                rounded-xl
                border border-sky-400/50
                bg-transparent
                text-lg font-semibold
                text-sky-300
                transition
                hover:bg-sky-400/10
                hover:text-sky-200
              "
            >
              Join Discord Community
            </a>

            {/* Tagline */}
            <span className="text-sm text-gray-400 tracking-wide">
              Cognize • Connect • Cultivate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
