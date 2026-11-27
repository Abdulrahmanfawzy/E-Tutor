import register from "@/actions/register";
import type { RegisterFormValues } from "@/features/auth/schema/Vaildations";

export async function POST(request: Request) {
  let values: RegisterFormValues;

  try {
    values = (await request.json()) as RegisterFormValues;
  } catch {
    return Response.json(
      { success: false, message: "Invalid registration request." },
      { status: 400 },
    );
  }

  try {
    const result = await register(values);

    return Response.json(
      { success: result.success, message: result.message },
      { status: result.success ? 201 : result.status },
    );
  } catch (error) {
    console.error("[auth] Registration API request failed:", error);

    return Response.json(
      { success: false, message: "Unable to register right now. Please try again." },
      { status: 502 },
    );
  }
}
