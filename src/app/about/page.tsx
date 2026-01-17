export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#0b0f14] px-6 py-28">
      <div className="mx-auto max-w-5xl space-y-16">

        {/* ===== HERO ===== */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Silicality
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A beginner-first open-source learning platform built to turn
            confusion into real contribution.
          </p>
        </div>

        {/* ===== MISSION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Silicality exists to solve a real problem in tech education:
              beginners learn theory, but never ship real work.
              <br /><br />
              We help students move from tutorials to production by guiding
              them through real open-source contributions, real teams, and
              real impact.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <ul className="space-y-4 text-gray-300">
              <li>🌱 Beginner-friendly by design</li>
              <li>🚀 Real production projects</li>
              <li>🤝 Mentorship over competition</li>
              <li>🏆 Recognition for real work</li>
            </ul>
          </div>
        </div>

        {/* ===== WHY SILICALITY ===== */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Why Silicality?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-medium mb-2">
                Learn by Doing
              </h3>
              <p className="text-sm text-gray-400">
                No fake projects. Contributors work on real repositories
                used by real users.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-medium mb-2">
                Structured Growth
              </h3>
              <p className="text-sm text-gray-400">
                Seasonal programs with clear phases: registration,
                contribution, and recognition.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-medium mb-2">
                Career-Focused
              </h3>
              <p className="text-sm text-gray-400">
                Contributors gain proof of work, mentorship, and public
                recognition.
              </p>
            </div>
          </div>
        </div>

        {/* ===== STORY ===== */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Our Story
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Silicality was created by students who faced the same confusion:
            “I know how to code, but how do I contribute?”
            <br /><br />
            Instead of building another course or tutorial platform, we
            built a system where learning happens through contribution,
            collaboration, and real responsibility.
          </p>
        </div>

        {/* ===== CTA ===== */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Join the Journey
          </h2>

          <p className="text-gray-400">
            Whether you’re a beginner or a mentor, Silicality welcomes
            builders who want to grow through impact.
          </p>

          <a
            href="/projects"
            className="inline-block rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 font-semibold text-white hover:scale-[1.03] transition"
          >
            Explore Projects →
          </a>
        </div>

      </div>
    </section>
  );
}
