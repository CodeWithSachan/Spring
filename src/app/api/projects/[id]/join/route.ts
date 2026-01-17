import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth/authOptions";
import { phaseGuard } from "@/lib/season/phaseGuard";
import { SEASON_PHASES } from "@/lib/season/phases";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  // 🔒 Phase Guard
  const gate = await phaseGuard(SEASON_PHASES.CONTRIBUTION);
  if (!gate.allowed) {
    return NextResponse.json(
      { error: gate.reason },
      { status: 403 }
    );
  }

  const projectId = params.id;

  // Prevent duplicate join
  const existing = await prisma.contribution.findFirst({
    where: {
      userId: session.user.id,
      projectId,
      seasonId: gate.season.id,
    },
  });

  if (existing) {
    return NextResponse.json(
      { error: "Already joined this project" },
      { status: 400 }
    );
  }

  // ✅ Create contribution
  await prisma.contribution.create({
    data: {
      userId: session.user.id,
      projectId,
      seasonId: gate.season.id,
      status: "ACTIVE",
    },
  });

  return NextResponse.json({ success: true });
}
