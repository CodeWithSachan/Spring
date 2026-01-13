export type Recognition = {
  id: string;
  name: string;
  description: string;
  category: "Top Contributor" | "Rising Star" | "Mentor";
  score: number;
  projectId: string; // 🔗 used for navigation
};

export const recognitions: Recognition[] = [
  {
    id: "ayush-sachan",
    name: "Ayush Sachan",
    description: "Highest number of merged PRs in Spring 2026.",
    category: "Top Contributor",
    score: 95,
    projectId: "daan-setu",
  },
  {
    id: "core-mentor",
    name: "Silicality Core",
    description: "Provided consistent mentorship and reviews.",
    category: "Mentor",
    score: 90,
    projectId: "civic-sense",
  },
];
