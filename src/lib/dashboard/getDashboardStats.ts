import { prisma } from "@/lib/prisma";

export async function getDashboardStats(userId: string) {
  const contributions = await prisma.contribution.findMany({
    where: { userId },
    include: {
      project: true,
    },
    orderBy: { createdAt: "desc" },
  });

  const prsOpened = contributions.length;
  const prsMerged = contributions.filter(
    (c) => c.status === "MERGED"
  ).length;

  const projects = new Set(
    contributions.map((c) => c.projectId)
  ).size;

  const recognitions = await prisma.recognition.count({
    where: { userId },
  });

  return {
    projects,
    prsOpened,
    prsMerged,
    badges: recognitions,
    contributions,
  };
}
