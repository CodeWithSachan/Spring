import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";

/**
 * GET → Fetch current active season
 */
export async function GET() {
  const season = await prisma.season.findFirst({
    where: { active: true },
  });

  return NextResponse.json(season);
}

/**
 * PATCH → Update season dates / active flag (ADMIN only)
 */
export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const season = await prisma.season.findFirst({
    where: { active: true },
  });

  if (!season) {
    return NextResponse.json({ error: "No active season" }, { status: 404 });
  }

  await prisma.season.update({
    where: { id: season.id },
    data: {
      registrationFrom: body.registrationFrom
        ? new Date(body.registrationFrom)
        : undefined,
      registrationTo: body.registrationTo
        ? new Date(body.registrationTo)
        : undefined,
      contributionFrom: body.contributionFrom
        ? new Date(body.contributionFrom)
        : undefined,
      contributionTo: body.contributionTo
        ? new Date(body.contributionTo)
        : undefined,
      active:
        typeof body.active === "boolean"
          ? body.active
          : undefined,
    },
  });

  return NextResponse.json({ success: true });
}
