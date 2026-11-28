import { requestPasswordReset } from "@/actions/password-recovery";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    email?: unknown;
  } | null;

  if (typeof body?.email !== "string" || !body.email.trim()) {
    return Response.json(
      { success: false, message: "A valid email address is required." },
      { status: 400 },
    );
  }

  try {
    const result = await requestPasswordReset(body.email.trim());

    return Response.json(
      { success: result.success, message: result.message },
      { status: result.status },
    );
  } catch (error) {
    console.error("[auth] Forgot-password API request failed:", error);

    return Response.json(
      { success: false, message: "Unable to send the reset link right now." },
      { status: 502 },
    );
  }
}
