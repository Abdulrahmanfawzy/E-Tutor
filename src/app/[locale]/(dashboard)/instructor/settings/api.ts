export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://lms.huma-volve.com";

// adjust to wherever you store the login token
export function getToken() {
  return typeof window !== "undefined" ? localStorage.getItem("token") : null;
}

export function authHeaders(): Record<string, string> {
  const token = getToken();
  return {
    Accept: "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}