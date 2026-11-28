import { resetPassword } from "@/actions/password-recovery";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    token?: unknown;
    email?: unknown;
    password?: unknown;
    password_confirmation?: unknown;
  } | null;

  if (
    typeof body?.token !== "string" ||
    !body.token ||
    typeof body.email !== "string" ||
    !body.email.trim() ||
    typeof body.password !== "string" ||
    typeof body.password_confirmation !== "string"
  ) {
    return Response.json(
      { success: false, message: "Invalid password-reset request." },
      { status: 400 },
    );
  }

  try {
    const result = await resetPassword({
      token: body.token,
      email: body.email.trim(),
      password: body.password,
      password_confirmation: body.password_confirmation,
    });

    return Response.json(
      { success: result.success, message: result.message },
      { status: result.status },
    );
  } catch (error) {
    console.error("[auth] Reset-password API request failed:", error);

    return Response.json(
      { success: false, message: "Unable to reset the password right now." },
      { status: 502 },
    );
  }
}
