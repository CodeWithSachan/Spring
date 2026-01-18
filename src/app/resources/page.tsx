"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { trackResourceClick } from "@/lib/analytics/trackResourceClick";

/* ---------------- Animations ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------- Components ---------------- */

type SectionProps = {
  icon: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

const Section = ({ icon, title, description, children }: SectionProps) => (
  <motion.section
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="space-y-12"
  >
    <div className="flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.08 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {children}
    </motion.div>
  </motion.section>
);

type ResourceCardProps = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  category: string;
  recommended?: boolean;
};

const ResourceCard = ({
  title,
  description,
  href,
  tags,
  category,
  recommended,
}: ResourceCardProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackResourceClick(title, category)}
  >
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
    >
      {recommended && (
        <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-3 py-1 text-xs text-emerald-300 backdrop-blur">
          ⭐ Recommended
        </span>
      )}

      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition">
          {title}
        </h3>
        <span className="text-gray-400">↗</span>
      </div>

      <p className="mt-2 text-sm text-gray-400">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  </Link>
);

/* ---------------- Page ---------------- */

export default function ResourcesPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#0b0f14] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl space-y-32">

        {/* ===== HEADER ===== */}
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Learning Resources
          </h1>
          <p className="text-gray-400 text-lg">
            Curated resources to help Silicality contributors grow, ship
            production-grade code, and succeed in open source.
          </p>
        </div>

        {/* ===== DOCUMENTATION ===== */}
        <Section
          icon="📘"
          title="Documentation"
          description="Official docs and references you should bookmark"
        >
          <ResourceCard
            title="React Official Docs"
            description="Official React documentation with guides and APIs"
            href="https://react.dev"
            tags={["Frontend", "JavaScript"]}
            category="Documentation"
            recommended
          />

          <ResourceCard
            title="TypeScript Handbook"
            description="Complete guide to TypeScript language features"
            href="https://www.typescriptlang.org/docs/"
            tags={["TypeScript", "Language"]}
            category="Documentation"
          />

          <ResourceCard
            title="MDN Web Docs"
            description="Comprehensive documentation for web technologies"
            href="https://developer.mozilla.org/"
            tags={["Web", "Reference"]}
            category="Documentation"
          />
        </Section>

        {/* ===== OPEN SOURCE ===== */}
        <Section
          icon="🌱"
          title="Open Source Essentials"
          description="Must-know resources before contributing to real projects"
        >
          <ResourceCard
            title="How to Contribute to Open Source"
            description="Beginner-friendly open source contribution guide"
            href="https://opensource.guide/how-to-contribute/"
            tags={["Open Source", "Git"]}
            category="Open Source"
            recommended
          />

          <ResourceCard
            title="Git & GitHub Crash Course"
            description="Learn Git workflows used in real teams"
            href="https://www.freecodecamp.org/news/git-and-github-for-beginners/"
            tags={["Git", "Workflow"]}
            category="Open Source"
          />
        </Section>

        {/* ===== VIDEO ===== */}
        <Section
          icon="🎥"
          title="Video Tutorials"
          description="High-quality YouTube channels for learning by watching"
        >
          <ResourceCard
            title="Fireship"
            description="Fast-paced coding tutorials and tech explanations"
            href="https://www.youtube.com/@Fireship"
            tags={["YouTube", "Tutorials"]}
            category="Video"
          />

          <ResourceCard
            title="freeCodeCamp"
            description="Free full-length programming courses"
            href="https://www.youtube.com/@freecodecamp"
            tags={["YouTube", "Courses"]}
            category="Video"
          />
        </Section>

        {/* ===== INTERACTIVE ===== */}
        <Section
          icon="🧩"
          title="Interactive Learning"
          description="Hands-on platforms to practice real skills"
        >
          <ResourceCard
            title="LeetCode"
            description="Practice coding problems & algorithms"
            href="https://leetcode.com"
            tags={["Algorithms", "Interview Prep"]}
            category="Interactive"
          />

          <ResourceCard
            title="Frontend Mentor"
            description="Real-world frontend challenges with designs"
            href="https://www.frontendmentor.io"
            tags={["Frontend", "Projects"]}
            category="Interactive"
          />

          <ResourceCard
            title="Exercism"
            description="Free coding exercises with mentorship"
            href="https://exercism.org"
            tags={["Practice", "Mentorship"]}
            category="Interactive"
          />
        </Section>

        {/* ===== PLATFORMS ===== */}
        <Section
          icon="📚"
          title="Learning Platforms"
          description="Structured curriculums for long-term growth"
        >
          <ResourceCard
            title="freeCodeCamp"
            description="Free interactive coding curriculum"
            href="https://www.freecodecamp.org"
            tags={["Free", "Full Stack"]}
            category="Platforms"
            recommended
          />

          <ResourceCard
            title="The Odin Project"
            description="Full-stack JavaScript curriculum"
            href="https://www.theodinproject.com"
            tags={["Free", "Full Stack"]}
            category="Platforms"
          />

          <ResourceCard
            title="Scrimba"
            description="Interactive coding screencasts"
            href="https://scrimba.com"
            tags={["Interactive", "Video"]}
            category="Platforms"
          />
        </Section>

        {/* ===== CONTRIBUTOR TIP ===== */}
        <div className="rounded-2xl border border-pink-400/20 bg-pink-400/10 p-6 text-sm text-pink-200">
          <strong>Contributor Tip:</strong>  
          Don’t try to learn everything. Pick one stack, one project, and ship
          real pull requests. Depth beats breadth in open source.
        </div>

        {/* ===== NOTE ===== */}
        <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-6 text-sm text-blue-200">
          <strong>Note:</strong> All external links open in a new tab. These
          resources are curated for contributors and maintained by their
          respective organizations.
        </div>
      </div>
    </motion.section>
  );
}
