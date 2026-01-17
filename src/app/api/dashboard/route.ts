import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/authOptions";
import { getDashboardStats } from "@/lib/dashboard/getDashboardStats";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const stats = await getDashboardStats(session.user.id);

  return NextResponse.json(stats);
}
