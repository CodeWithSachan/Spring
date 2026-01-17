import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.season.upsert({
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
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
