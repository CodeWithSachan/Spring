"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function SponsorsPage() {
  return (
    <section className="min-h-screen bg-[#0b0f14] px-6 py-28">
      <div className="mx-auto max-w-7xl space-y-32">

        {/* ================= HERO ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="max-w-4xl space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Partner with{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Silicality
            </span>
          </h1>

          <p className="text-lg text-gray-400">
            Silicality connects companies, educators, and brands with
            high-intent developers contributing to real production software.
            This is not ads — this is **developer trust & visibility**.
          </p>
        </motion.div>

        {/* ================= WHY SPONSOR ================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10"
        >
          <h2 className="text-2xl font-semibold text-white mb-10">
            Why Partner with Silicality?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Benefit
              title="Access Real Contributors"
              desc="Reach developers actively contributing to open-source projects — not passive learners."
            />
            <Benefit
              title="High-Trust Visibility"
              desc="Your brand is placed inside learning, contribution, and impact — not banner ads."
            />
            <Benefit
              title="Long-Term ROI"
              desc="Build talent pipelines, brand recall, and goodwill inside the dev ecosystem."
            />
          </div>
        </motion.section>

        {/* ================= SPONSORSHIP MODELS ================= */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-white">
            Sponsorship & Revenue Models
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Tier
              title="Brand & Program Sponsors"
              highlight
              items={[
                "Homepage & program branding",
                "Mentorship & event sponsorship",
                "Contributor rewards & infra support",
                "Cash, credits, tools, or hybrid models",
              ]}
            />

            <Tier
              title="Hiring & Talent Partners"
              items={[
                "Access to pre-vetted contributors",
                "Hiring visibility during seasons",
                "Early talent discovery",
              ]}
            />
          </div>
        </section>

        {/* ================= EDUCATION PARTNERS ================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h2 className="text-3xl font-bold text-white">
            Education & Content Partnerships
          </h2>

          <p className="text-gray-400 max-w-3xl">
            We enable creators, educators, and platforms to monetize their
            knowledge by reaching serious developers who value quality learning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Sell Courses">
              Offer paid or discounted courses to verified contributors during
              learning and contribution phases.
            </Card>

            <Card title="Sell Notes & Playbooks">
              Monetize high-quality notes, roadmaps, system-design guides, and
              open-source playbooks.
            </Card>

            <Card title="Revenue Sharing">
              Transparent affiliate or revenue-share models — aligned incentives.
            </Card>
          </div>
        </motion.section>

        {/* ================= IN-KIND SPONSORS ================= */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold text-white">
            In-Kind Sponsorship Examples
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SmallCard title="☁️ Cloud Credits" desc="AWS, GCP, Azure" />
            <SmallCard title="🛠 Dev Tools" desc="CI/CD, IDEs, monitoring" />
            <SmallCard title="🎁 Swag & Rewards" desc="Merch, books, hardware" />
            <SmallCard title="📚 Learning Access" desc="Courses, certifications" />
          </div>
        </section>

        {/* ================= CTA ================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-14 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Let’s Build a Sustainable Developer Ecosystem
          </h2>

          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Whether you’re a company, startup, creator, or platform — Silicality
            offers meaningful ways to grow revenue while supporting developers.
          </p>

          <Link
            href="mailto:silicality.dev@gmail.com"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-10 py-3 font-semibold text-white hover:scale-[1.05] transition"
          >
            Partner with Silicality
          </Link>
        </motion.section>
      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

function Benefit({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
}

function Tier({
  title,
  items,
  highlight,
}: {
  title: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-8 ${
        highlight
          ? "border-pink-400/40 bg-pink-500/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      <h3 className="text-xl font-semibold text-white mb-6">{title}</h3>
      <ul className="space-y-3 text-sm text-gray-300">
        {items.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>
    </div>
  );
}

function Card({ title, children }: { title: string; children: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{children}</p>
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
