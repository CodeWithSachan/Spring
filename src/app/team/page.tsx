"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function TeamPage() {
  return (
    <section className="min-h-screen bg-[#0b0f14] px-6 py-28">
      <div className="mx-auto max-w-6xl space-y-24">

        {/* ===== HERO ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            The People Behind <span className="text-pink-400">Silicality</span>
          </h1>

          <p className="text-lg text-gray-400">
            Built by developers who faced the same struggles — and decided to fix them.
          </p>
        </motion.div>

        {/* ===== FOUNDER ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Founder Info */}
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-white">
              Founder
            </h2>

            <div>
              <h3 className="text-xl font-bold text-white">
                Ayush Sachan
              </h3>
              <p className="text-pink-400 text-sm">
                Founder & Product Engineer
              </p>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Silicality was born from a simple frustration:
              <br /><br />
              <em>
                “I know how to code, but how do I work on real projects?”
              </em>
              <br /><br />
              After struggling with tutorials, fake projects, and unclear paths,
              Ayush started Silicality to help beginners move from
              learning to real contribution — with structure, mentorship,
              and recognition.
            </p>

            <div className="flex gap-4 pt-2">
              <Link
                href="https://github.com/CodeWithSachan"
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Founder Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <ul className="space-y-4 text-gray-300">
              <li>🚀 Product-first mindset</li>
              <li>🧠 Learning-by-doing philosophy</li>
              <li>🌱 Beginner-focused systems</li>
              <li>🏗 Building real, usable platforms</li>
            </ul>
          </div>
        </motion.div>

        {/* ===== ADVISORS / MENTORS ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <h2 className="text-3xl font-bold text-white text-center">
            Advisors & Mentors
          </h2>

          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Silicality collaborates with experienced developers, mentors,
            and industry professionals who guide contributors and shape
            program quality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PlaceholderCard />
            <PlaceholderCard />
            <PlaceholderCard />
          </div>
        </motion.div>

        {/* ===== CTA ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Build With Us?
          </h2>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We’re always looking for mentors, advisors, and partners
            who believe in learning through real impact.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/mentors"
              className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 font-semibold text-white hover:scale-[1.04] transition"
            >
              Become a Mentor
            </Link>

            <Link
              href="/sponsors"
              className="rounded-full border border-white/20 px-8 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Partner with Us
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ===== Placeholder Card ===== */

function PlaceholderCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
      <h3 className="text-white font-semibold mb-1">
        Mentor / Advisor
      </h3>
      <p className="text-sm text-gray-400">
        Coming soon
      </p>
    </div>
  );
}
