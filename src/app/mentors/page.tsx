"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function MentorsPage() {
  return (
    <section className="min-h-screen bg-[#0b0f14] px-6 py-28">
      <div className="mx-auto max-w-6xl space-y-28">

        {/* ===== HERO ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Mentor at <span className="text-pink-400">Silicality</span>
          </h1>

          <p className="text-lg text-gray-400">
            Help beginners grow by guiding real open-source contributions —
            without turning mentorship into a full-time job.
          </p>
        </motion.div>

        {/* ===== WHY MENTOR ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10"
        >
          <h2 className="text-2xl font-semibold text-white mb-8">
            Why Become a Mentor?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Benefit
              title="Real Impact"
              desc="Guide contributors working on production-level repositories used by real users."
            />
            <Benefit
              title="Flexible Commitment"
              desc="Mentor asynchronously. No daily calls or fixed schedules."
            />
            <Benefit
              title="Recognition & Growth"
              desc="Public recognition, badges, and future paid opportunities."
            />
          </div>
        </motion.div>

        {/* ===== WHAT MENTORS DO ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-3xl font-bold text-white text-center">
            What Mentors Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RoleCard
              title="Guide Contributions"
              desc="Help contributors pick issues, review approach, and understand project standards."
            />
            <RoleCard
              title="Review Pull Requests"
              desc="Provide high-level feedback, not line-by-line micromanagement."
            />
            <RoleCard
              title="Shape Project Direction"
              desc="Help define beginner-friendly issues and contribution flows."
            />
            <RoleCard
              title="Support Growth"
              desc="Encourage best practices, collaboration, and confidence."
            />
          </div>
        </motion.div>

        {/* ===== WHO SHOULD APPLY ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">
            Who Should Apply?
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li>✔ Developers with real-world project experience</li>
            <li>✔ Open-source contributors or maintainers</li>
            <li>✔ Engineers who enjoy teaching & guiding beginners</li>
            <li>✔ Educators, mentors, or senior students</li>
          </ul>
        </motion.div>

        {/* ===== FUTURE BENEFITS (STRATEGIC) ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-white text-center">
            Mentor Benefits (Growing Over Time)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SmallCard title="🏆 Public Recognition" desc="Profile badges & highlights" />
            <SmallCard title="💼 Career Value" desc="Proof of mentorship & leadership" />
            <SmallCard title="💰 Paid Opportunities" desc="Future paid mentor tracks" />
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
            Ready to Mentor?
          </h2>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join Silicality and help beginners turn learning into real impact.
          </p>

          <Link
            href="https://forms.gle/Kb5PgrryEi75Rjp56"
            target="_blank"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 font-semibold text-white hover:scale-[1.05] transition"
          >
            Apply as Mentor →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

/* ===== Components ===== */

function Benefit({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
}

function RoleCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
}

function SmallCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
      <div className="text-lg mb-2">{title}</div>
      <p className="text-xs text-gray-400">{desc}</p>
    </div>
  );
}
