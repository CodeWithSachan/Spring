"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#0b0f14] px-6 py-28">
      <div className="mx-auto max-w-5xl space-y-24">

        {/* ===== HERO ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="text-center space-y-5"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-pink-400">Silicality</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A beginner-first open-source platform built to turn learning into
            real contribution, confidence, and career-ready experience.
          </p>
        </motion.div>

        {/* ===== MISSION ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Silicality exists to fix a broken pattern in tech education:
              beginners consume endless tutorials but never ship real work.
              <br /><br />
              We help learners cross the hardest gap — from knowing syntax to
              contributing to real production software — through guided,
              seasonal open-source programs.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <ul className="space-y-4 text-gray-300">
              <li>🌱 Beginner-friendly by design</li>
              <li>🚀 Real production repositories</li>
              <li>🤝 Mentorship over competition</li>
              <li>🏆 Recognition for real impact</li>
            </ul>
          </div>
        </motion.div>

        {/* ===== WHY SILICALITY ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <h2 className="text-2xl font-semibold text-white text-center">
            Why Silicality?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard
              title="Learn by Doing"
              desc="No toy projects or fake assignments. Contributors work on real repositories used by real users."
            />

            <ValueCard
              title="Structured Growth"
              desc="Season-based programs with clear phases: registration, contribution, and recognition."
            />

            <ValueCard
              title="Career-Focused"
              desc="Build proof of work, gain mentorship, and earn public recognition that actually matters."
            />
          </div>
        </motion.div>

        {/* ===== STORY ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-10"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Our Story
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Silicality was built by students who faced the same question many
            beginners do:
            <br />
            <em className="text-gray-300">
              “I know how to code… but how do I actually contribute?”
            </em>
            <br /><br />
            Instead of creating another course platform, we designed a system
            where learning happens through responsibility, collaboration, and
            shipping real changes to real software.
          </p>
        </motion.div>

        {/* ===== VALUES / PHILOSOPHY ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-pink-500/20 bg-pink-500/10 p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-3">
            Our Philosophy
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm">
            Open source is not about free labor — it’s about shared ownership,
            learning in public, and growing through feedback.  
            Silicality is built to protect beginners, respect mentors, and
            reward meaningful contributions.
          </p>
        </motion.div>

        {/* ===== CTA ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl font-semibold text-white">
            Join the Journey
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Whether you’re starting out or guiding others, Silicality welcomes
            builders who want to grow through real impact.
          </p>

          <Link
            href="/projects"
            className="inline-block rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 font-semibold text-white hover:scale-[1.04] transition"
          >
            Explore Projects →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

/* ===== Small Components ===== */

function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-white font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}
