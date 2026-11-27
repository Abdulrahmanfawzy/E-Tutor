import "server-only";

import type { RegisterFormValues } from "@/features/auth/schema/Vaildations";
import type { RegisterApiResult } from "@/features/auth/types/register-api";

type RegisterPayload = Pick<
  RegisterFormValues,
  | "firstName"
  | "lastName"
  | "username"
  | "email"
  | "password"
  | "confirmPassword"
  | "termsAccepted"
>;

const register = async (
  values: RegisterPayload,
): Promise<RegisterApiResult> => {
  const apiBaseUrl = process.env.API;

  if (!apiBaseUrl) {
    throw new Error("The API environment variable is not configured.");
  }

  const normalizedApiBaseUrl = apiBaseUrl.endsWith("/")
    ? apiBaseUrl
    : `${apiBaseUrl}/`;

  const response = await fetch(
    new URL("api/v1/auth/register", normalizedApiBaseUrl),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        first_name: values.firstName,
        last_name: values.lastName,
        username: values.username,
        email: values.email,
        password: values.password,
        password_confirmation: values.confirmPassword,
        terms: values.termsAccepted,
      }),
    },
  );

  const data = (await response.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
  } | null;
  const success = response.ok && data?.success !== false;

  return {
    success,
    message:
      data?.message ||
      (success ? "Account created successfully." : "Registration failed."),
    status: response.ok && !success ? 422 : response.status,
  };
};

export default register;
