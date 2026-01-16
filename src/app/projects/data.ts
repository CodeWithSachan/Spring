export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  accepting: boolean;
  featured?: boolean;
  published: boolean;
  repo: string;
  maintainer: {
    name: string;
    role: string;
  };
};

export const projects: Project[] = [
  {
    id: "civic-sense",
    title: "Civic Sense",
    description:
      "An open-source platform to report and track civic issues in cities.",
    tech: ["React", "Node.js", "MongoDB"],
    difficulty: "Beginner",
    accepting: true,
    featured: true,
    published: true, // ✅ REQUIRED
    repo: "https://github.com/example/civic-sense",
    maintainer: {
      name: "Silicality Core",
      role: "Project Admin",
    },
  },
  {
    id: "daan-setu",
    title: "DaanSetu",
    description:
      "Smart donation and pickup system connecting donors with NGOs.",
    tech: ["Next.js", "Firebase"],
    difficulty: "Intermediate",
    accepting: true,
    featured: false,
    published: true, // ✅ REQUIRED
    repo: "https://github.com/example/daan-setu",
    maintainer: {
      name: "Ayush Sachan",
      role: "Maintainer",
    },
  },

    {
    id: "daan-setu",
    title: "DaanSetu",
    description:
      "Smart donation and pickup system connecting donors with NGOs.",
    tech: ["Next.js", "Firebase"],
    difficulty: "Intermediate",
    accepting: true,
    featured: false,
    published: true, // ✅ REQUIRED
    repo: "https://github.com/example/daan-setu",
    maintainer: {
      name: "Ayush Sachan",
      role: "Maintainer",
    },
  },
];



// for future proofing
//   // drafts (hidden)
// published: false

// featured section
// projects.filter(p => p.featured && p.published)

// admin dashboard
// projects.filter(p => !p.published)
//  