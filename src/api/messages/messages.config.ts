import "server-only";

const API_BASE_URL = process.env.API;

export function getMessagesApiUrl(endpoint = ""): string {
  if (!API_BASE_URL) {
    throw new Error("The API environment variable is not configured.");
  }

  const normalizedBaseUrl = API_BASE_URL.endsWith("/")
    ? API_BASE_URL
    : `${API_BASE_URL}/`;

  return new URL(`api/v1/messages${endpoint}`, normalizedBaseUrl).toString();
}
