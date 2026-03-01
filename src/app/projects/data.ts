export type Project = {
  id: string;
  slug: string; // ✅ ADD THIS
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
    id: "ats-scanner",
    slug: "ats-scanner",
    title: "ATS_Scanner",
    description:
      "Community-driven Resume Analyzer and ATS Scanner, built to help students and job seekers.",
    tech: ["Python"],
    difficulty: "Beginner",
    accepting: true,
    featured: false,
    published: true, // ✅ REQUIRED
    repo: "https://github.com/silicality/ATS-Scanner",
    maintainer: {
      name: "Silicality Core",
      role: "Maintainer",
    },
  },
      {
    id: "house-price-predictor",
    slug: "house-price-predictor",
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
    id: "login-signup-page-flutter",
    slug: "login-signup-page-flutter",
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
    id: "fakenews",
    slug: "fakenews",
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
    id: "to-do-list",
    slug: "to-do-list",
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
    id: "chatbot",
    slug: "chatbot",
    title: "Chatbot",
    description:
      " Built a WhatsApp attendance bot using Node.js and Baileys with QR authentication, real-time updates, and a scalable modular design.",
    tech: ["Node.js"],
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