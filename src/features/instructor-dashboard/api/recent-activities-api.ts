import { RecentActivitiesResponse } from "../types/recent-activities";


export async function getRecentActivities(
  filter: string,
  limit = 4
): Promise<RecentActivitiesResponse> {
  const response = await fetch(
    `/api/instructor/dashboard/activity?filter=${filter}&limit=${limit}`
  );

  const data: RecentActivitiesResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}