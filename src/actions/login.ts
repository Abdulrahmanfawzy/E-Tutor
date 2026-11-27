import "server-only";

import type {
    LoginCredentials,
    LoginResponse,
} from "@/features/auth/types/login-types";

const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const apiBaseUrl = process.env.API;

  if (!apiBaseUrl) {
    throw new Error("The API environment variable is not configured.");
  }

  const normalizedApiBaseUrl = apiBaseUrl.endsWith("/")
    ? apiBaseUrl
    : `${apiBaseUrl}/`;

  const response = await fetch(
    new URL("api/v1/auth/login", normalizedApiBaseUrl),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(credentials),
    },
  );
  const data = (await response.json().catch(() => null)) as LoginResponse | null;

  if (!response.ok) {
    throw new Error(data?.message || "Login failed.");
  }

  if (!data) {
    throw new Error("The login API returned an invalid response.");
  }

  return data;
};

export default login;
