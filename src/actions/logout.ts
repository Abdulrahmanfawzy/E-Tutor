import "server-only";

type LogoutApiResponse = {
  success?: boolean;
} | null;

export type LogoutResult = {
  success: boolean;
  status: number;
};

export async function logoutFromBackend(
  accessToken: string,
): Promise<LogoutResult> {
  const apiBaseUrl = process.env.API;

  if (!apiBaseUrl) {
    throw new Error("The API environment variable is not configured.");
  }

  const normalizedApiBaseUrl = apiBaseUrl.endsWith("/")
    ? apiBaseUrl
    : `${apiBaseUrl}/`;
  const response = await fetch(
    new URL("api/v1/auth/logout", normalizedApiBaseUrl),
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    },
  );
  const data = (await response.json().catch(() => null)) as LogoutApiResponse;
  const success = response.ok && data?.success !== false;

  return { success, status: response.status };
}
