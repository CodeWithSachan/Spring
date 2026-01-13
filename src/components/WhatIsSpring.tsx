export default function WhatIsSpring() {
  return (
    <section className="relative w-full px-6 py-32 bg-[#0b0f14] overflow-hidden">

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="mt-24 h-[420px] w-[420px] rounded-full bg-gradient-to-r from-pink-500/15 to-purple-500/15 blur-[160px]" />
      </div>

      {/* Section header */}
      <div className="relative mx-auto mb-20 max-w-3xl text-center animate-fade-up">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          <span className="text-pink-400">//</span> What is Spring Contribution?
        </h2>
        <p className="mt-4 text-gray-400 text-lg leading-relaxed">
          A focused, beginner-friendly program designed to help you make
          <span className="text-white font-medium"> real contributions </span>
          to production software — with clarity, guidance, and purpose.
        </p>
      </div>

      {/* Cards */}
      <div className="relative mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="
          group
          rounded-2xl
          bg-white/5
          border border-white/10
          p-8
          backdrop-blur
          transition-all duration-300
          hover:-translate-y-2
          hover:border-pink-500/40
        ">
          <div className="mb-5 text-3xl text-pink-400 font-mono group-hover:scale-110 transition">
            &lt;/&gt;
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Real Production Work
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Contribute to real-world codebases used by actual users.
            No toy projects. No artificial problems.
          </p>
        </div>

        {/* Card 2 */}
        <div className="
          group
          rounded-2xl
          bg-white/5
          border border-white/10
          p-8
          backdrop-blur
          transition-all duration-300
          hover:-translate-y-2
          hover:border-purple-500/40
        ">
          <div className="mb-5 text-3xl text-purple-400 group-hover:scale-110 transition">
            ⤴
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Guided, Not Guesswork
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Learn how real teams collaborate through code reviews,
            mentorship, and structured feedback.
          </p>
        </div>

        {/* Card 3 */}
        <div className="
          group
          rounded-2xl
          bg-white/5
          border border-white/10
          p-8
          backdrop-blur
          transition-all duration-300
          hover:-translate-y-2
          hover:border-emerald-500/40
        ">
          <div className="mb-5 text-3xl text-emerald-400 group-hover:scale-110 transition">
            🚀
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Ship With Confidence
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            See your work reviewed, merged, and deployed to production.
            Build confidence by shipping real features.
          </p>
        </div>

      </div>
    </section>
  );
}
