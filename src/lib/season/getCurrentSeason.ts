import { prisma } from "@/lib/prisma";

export async function getCurrentSeason() {
  return prisma.season.findFirst({
    where: {
      active: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
