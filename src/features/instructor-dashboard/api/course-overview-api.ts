
import type { CourseOverviewResponse } from "../types/course-overview";

export async function getCourseOverview(
  period: string
): Promise<CourseOverviewResponse> {
  const response = await fetch(
    `/api/instructor/dashboard/course-overview?period=${period}`
  );

  const data: CourseOverviewResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}
