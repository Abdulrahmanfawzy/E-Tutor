
import type { OverallCourseRatingResponse } from "../types/overall-course-rating";

export async function getOverallCourseRating(
  period: string
): Promise<OverallCourseRatingResponse> {
  const response = await fetch(
    `/api/instructor/dashboard/rating?period=${period}`
  );

  const data: OverallCourseRatingResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}
