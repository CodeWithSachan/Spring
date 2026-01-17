import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth/authOptions";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  // 🔒 Only MENTOR or ADMIN can update
  if (
    session.user.role !== "MENTOR" &&
    session.user.role !== "ADMIN"
  ) {
    return NextResponse.json(
      { error: "Forbidden" },
      { status: 403 }
    );
  }

  const { status } = await req.json();

  if (!["ACTIVE", "MERGED"].includes(status)) {
    return NextResponse.json(
      { error: "Invalid status" },
      { status: 400 }
    );
  }

  await prisma.contribution.update({
    where: { id: params.id },
    data: { status },
  });

  return NextResponse.json({ success: true });
}
