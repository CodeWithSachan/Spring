import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/authOptions";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const { title, category } = await req.json();

  if (!title || !category) {
    return NextResponse.json(
      { error: "Missing data" },
      { status: 400 }
    );
  }

  await prisma.resourceClick.create({
    data: {
      resource: title,
      category,
      userId: session?.user?.id ?? null,
    },
  });

  return NextResponse.json({ success: true });
}
