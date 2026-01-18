"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function SponsorsPage() {
  return (
    <section className="min-h-screen bg-[#0b0f14] px-6 py-28">
      <div className="mx-auto max-w-7xl space-y-28">

        {/* ===== HERO ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Partner with <span className="text-pink-400">Silicality</span>
          </h1>

          <p className="text-lg text-gray-400">
            Help shape the next generation of open-source developers while
            growing your brand, products, and impact in the developer ecosystem.
          </p>
        </motion.div>

        {/* ===== WHY SPONSOR ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10"
        >
          <h2 className="text-2xl font-semibold text-white mb-8">
            Why Sponsor Silicality?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Benefit
              title="Reach Top Talent"
              desc="Connect with highly motivated contributors building real production projects."
            />
            <Benefit
              title="Brand Visibility"
              desc="Showcase your brand across our platform, events, and community channels."
            />
            <Benefit
              title="Give Back"
              desc="Support open-source education and help developers grow with confidence."
            />
          </div>
        </motion.div>

        {/* ===== SPONSORSHIP TIERS ===== */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-white">
            Sponsorship Opportunities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Tier
              title="Monetary & In-Kind Sponsors"
              highlight
              items={[
                "Logo placement on website & programs",
                "Social media & community recognition",
                "Support contributor rewards & infra",
                "Flexible options: cash, credits, tools, swag",
              ]}
            />

            <Tier
              title="Community & Media Partners"
              items={[
                "Cross-promotion & co-hosting",
                "Speaker & workshop opportunities",
                "Shared branding & visibility",
              ]}
            />
          </div>
        </div>

        {/* ===== EDUCATION PARTNERS (NEW) ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-white">
            Education & Content Partners
          </h2>

          <p className="text-gray-400 max-w-3xl">
            Are you a course creator, educator, or platform?  
            Partner with Silicality to sell courses, notes, and learning
            materials directly to serious contributors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Sell Courses">
              Promote paid or discounted courses to verified contributors.
            </Card>
            <Card title="Sell Notes & Guides">
              Share high-quality notes, roadmaps, and cheat sheets.
            </Card>
            <Card title="Affiliate Partnerships">
              Earn together through transparent revenue sharing.
            </Card>
          </div>
        </motion.div>

        {/* ===== IN-KIND ===== */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white">
            In-Kind Sponsorship Examples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <SmallCard title="☁️ Cloud Credits" desc="AWS, GCP, Azure" />
            <SmallCard title="🛠 Dev Tools" desc="IDEs, CI/CD, monitoring" />
            <SmallCard title="🎁 Swag & Prizes" desc="T-shirts, books, hardware" />
            <SmallCard title="📚 Learning Access" desc="Courses & certifications" />
          </div>
        </div>

        {/* ===== CTA ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join us in building a sustainable, impactful developer ecosystem.
            Let’s grow together.
          </p>

          <Link
            href="mailto:silicality.dev@gmail.com"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 font-semibold text-white hover:scale-[1.05] transition"
          >
            Become a Sponsor
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
