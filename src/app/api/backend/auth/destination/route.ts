import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

import { resolveAuthDestination } from "@/features/auth/utils/auth-destination";

export async function GET(request: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET;

  if (!secret) {
    return Response.json(
      { success: false, message: "Authentication is not configured." },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    );
  }

  const token = await getToken({ req: request, secret });

  if (!token) {
    return Response.json(
      { success: false, message: "You are not signed in." },
      { status: 401, headers: { "Cache-Control": "no-store" } },
    );
  }

  const { dashboardHref } = resolveAuthDestination(token);

  return Response.json(
    { success: true, dashboardHref },
    { headers: { "Cache-Control": "no-store" } },
  );
}
