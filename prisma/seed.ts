import { PrismaClient } from "@prisma/client";
console.log("🚀 Running seed...");
const prisma = new PrismaClient();

async function main() {
  const season = await prisma.season.upsert({
    where: { name: "Spring 2026" },
    update: {},
    create: {
      name: "Spring 2026",
      registrationFrom: new Date("2026-02-01"),
      registrationTo: new Date("2026-02-28"),
      contributionFrom: new Date("2026-03-01"),
      contributionTo: new Date("2026-05-31"),
      active: true,
    },
  });

await prisma.project.createMany({
  data: [
    {
      slug: "ats-scanner",
      title: "ATS Scanner",
      description:
        "Community-driven resume analyzer and ATS scanner.",
      difficulty: "BEGINNER",
      accepting: true,
      featured: true,
      repoUrl: "https://github.com/silicality/ATS-Scanner",
      tech: ["Python"],
      maintainerName: "Silicality Core",
      maintainerRole: "Maintainer",
    },

    {
      slug: "login-signup-page-flutter",
      title: "Login Signup Page Flutter",
      description:
        "Community-driven extension of a Flutter-based Welcome, Login, and Signup UI project.",
      difficulty: "INTERMEDIATE",
      accepting: true,
      featured: false,
      repoUrl:
        "https://github.com/silicality/Login-Signup-Page--Flutter",
      tech: ["HTML", "CSS", "Dart", "C++", "CMake", "Swift"],
      maintainerName: "Silicality Core",
      maintainerRole: "Maintainer",
    },

    {
      slug: "fakenews",
      title: "FakeNews",
      description:
        "FakeNewsTracker for collecting, analyzing, and visualizing fake news dissemination on social media.",
      difficulty: "BEGINNER",
      accepting: true,
      featured: false,
      repoUrl: "https://github.com/silicality/FakeNews",
      tech: ["Python"],
      maintainerName: "Silicality Core",
      maintainerRole: "Maintainer",
    },

    {
      slug: "to-do-list",
      title: "To Do List",
      description:
        "A basic To-Do List application intentionally kept simple and minimal.",
      difficulty: "BEGINNER",
      accepting: true,
      featured: false,
      repoUrl: "https://github.com/silicality/To-Do-List",
      tech: ["CSS"],
      maintainerName: "Silicality Core",
      maintainerRole: "Maintainer",
    },

    {
      slug: "chatbot",
      title: "Chatbot",
      description:
        "WhatsApp attendance bot using Node.js and Baileys with QR authentication and modular architecture.",
      difficulty: "INTERMEDIATE",
      accepting: true,
      featured: false,
      repoUrl: "https://github.com/anilkachave01",
      tech: ["Node.js"],
      maintainerName: "Anil Prabhakar Kachave",
      maintainerRole: "Maintainer",
    },

    {
      slug: "house-price-predictor",
      title: "House Price Predictor",
      description:
        "Machine learning model for predicting housing prices.",
      difficulty: "BEGINNER",
      accepting: true,
      featured: false,
      repoUrl:
        "https://github.com/silicality/Houses-Price-Predictor",
      tech: ["Python", "Scikit-learn"],
      maintainerName: "Silicality Core",
      maintainerRole: "Maintainer",
    },
  ],
  skipDuplicates: true,
});

  console.log("✅ Season and Projects seeded");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });