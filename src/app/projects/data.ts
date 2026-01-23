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
    difficulty: "Advanced",
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
      name: "Silicality Core",
      role: "Maintainer",
    },
  },

    {
    id: "ATS_Scanner",
    title: "ATS_Scanner",
    description:
      "Community-driven Resume Analyzer and ATS Scanner, built to help students and job seekers.",
    tech: ["Python"],
    difficulty: "Beginner",
    accepting: true,
    featured: false,
    published: true, // ✅ REQUIRED
    repo: "https://github.com/silicality/ATS_Scanner",
    maintainer: {
      name: "Silicality Core",
      role: "Maintainer",
    },
  },
      {
    id: "House-Price-Predictor",
    title: "House-Price-Predictor",
    description:
      "A House Price Prediction project built using machine learning techniques.",
    tech: ["Html","Python"],
    difficulty: "Beginner",
    accepting: true,
    featured: false,
    published: true, // ✅ REQUIRED
    repo: "https://github.com/silicality/Houses-Price-Predictor",
    maintainer: {
      name: "Silicality Core",
      role: "Maintainer",
    },
  },

        {
    id: "Login-Signup-Page-Flutter",
    title: "Login-Signup-Page-Flutter",
    description:
      "Community-driven Extension of a Flutter-based Welcome, Login, and Signup UI project.",
    tech: ["Html","CSS","Dart","C++","CMake","Swift"],
    difficulty: "Intermediate",
    accepting: true,
    featured: false,
    published: true, // ✅ REQUIRED
    repo: "https://github.com/silicality/Login-Signup-Page--Flutter",
    maintainer: {
      name: "Silicality Core",
      role: "Maintainer",
    },
  },

    {
    id: "FakeNews",
    title: "FakeNews",
    description:
      "FakeNewsTracker, for collecting, analyzing, and visualizing of fake news and the related dissemination on social media.",
    tech: ["Python"],
    difficulty: "Beginner",
    accepting: true,
    featured: false,
    published: true, // ✅ REQUIRED
    repo: "https://github.com/silicality/FakeNews",
    maintainer: {
      name: "Silicality Core",
      role: "Maintainer",
    },
  },

      {
    id: "To-Do-List",
    title: "To-Do-List",
    description:
      " A basic To-Do List application that is intentionally kept simple and minimal..",
    tech: ["CSS"],
    difficulty: "Beginner",
    accepting: true,
    featured: false,
    published: true, // ✅ REQUIRED
    repo: "https://github.com/silicality/To-Do-List",
    maintainer: {
      name: "Silicality Core",
      role: "Maintainer",
    },
  },

        {
    id: "Chatbot",
    title: "Chatbot",
    description:
      " Built a WhatsApp attendance bot using Node.js and Baileys with QR authentication, real-time updates, and a scalable modular design.",
    tech: ["CSS"],
    difficulty: "Intermediate",
    accepting: true,
    featured: false,
    published: true, // ✅ REQUIRED
    repo: "https://github.com/anilkachave01",
    maintainer: {
      name: "Anil Prabhakar Kachave",
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