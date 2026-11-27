
import type { ProfileViewsResponse } from "../types/profile-views";

export async function getProfileViews(
  period: string
): Promise<ProfileViewsResponse> {
  const response = await fetch(
    `/api/instructor/dashboard/profile-views?period=${period}`
  );

  const data: ProfileViewsResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}
