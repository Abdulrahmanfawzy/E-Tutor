import "server-only";

export type PasswordRecoveryResult = {
  success: boolean;
  message: string;
  status: number;
};

type ApiResponse = {
  success?: boolean;
  message?: string;
} | null;

type ResetPasswordPayload = {
  token: string;
  email: string;
  password: string;
  password_confirmation: string;
};

async function postAuthRequest(
  endpoint: "forgot-password" | "reset-password",
  payload: Record<string, string>,
): Promise<PasswordRecoveryResult> {
  const apiBaseUrl = process.env.API;

  if (!apiBaseUrl) {
    throw new Error("The API environment variable is not configured.");
  }

  const normalizedApiBaseUrl = apiBaseUrl.endsWith("/")
    ? apiBaseUrl
    : `${apiBaseUrl}/`;
  const response = await fetch(
    new URL(`api/v1/auth/${endpoint}`, normalizedApiBaseUrl),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    },
  );
  const data = (await response.json().catch(() => null)) as ApiResponse;
  const success = response.ok && data !== null && data.success !== false;

  return {
    success,
    message: data?.message ?? "",
    status: response.ok && !success
      ? data?.success === false ? 422 : 502
      : response.status,
  };
}

export function requestPasswordReset(email: string) {
  return postAuthRequest("forgot-password", { email });
}

export function resetPassword(payload: ResetPasswordPayload) {
  return postAuthRequest("reset-password", payload);
}
