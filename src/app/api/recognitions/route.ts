import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth/authOptions";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (
    !session ||
    (session.user.role !== "ADMIN" &&
      session.user.role !== "MENTOR")
  ) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { userId, title, score, seasonId } =
    await req.json();

  if (!userId || !title || !seasonId) {
    return NextResponse.json(
      { error: "Missing fields" },
      { status: 400 }
    );
  }

  await prisma.recognition.create({
    data: {
      userId,
      title,
      score: score ?? 1,
      seasonId,
    },
  });

  return NextResponse.json({ success: true });
}
