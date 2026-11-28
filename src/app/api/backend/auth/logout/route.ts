import { logoutFromBackend } from "@/actions/logout";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET;

  if (!secret) {
    return Response.json(
      { success: false, message: "Authentication is not configured." },
      { status: 500 },
    );
  }

  const sessionToken = await getToken({ req: request, secret });
  const accessToken = sessionToken?.accessToken;

  if (typeof accessToken !== "string" || !accessToken) {
    return Response.json(
      { success: false, message: "You are not signed in." },
      { status: 401 },
    );
  }

  try {
    const result = await logoutFromBackend(accessToken);
    const status = result.success
      ? 200
      : result.status >= 400
        ? result.status
        : 502;

    return Response.json(
      { success: result.success },
      { status },
    );
  } catch (error) {
    console.error("[auth] Backend logout request failed:", error);

    return Response.json(
      { success: false, message: "Unable to contact the authentication server." },
      { status: 502 },
    );
  }
}
