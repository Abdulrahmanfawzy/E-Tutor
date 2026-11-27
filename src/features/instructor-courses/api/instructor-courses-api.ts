import { InstructorCoursesResponse } from "../types/instructor-courses";

export async function getInstructorCourses(
  search?: string,
  page = 1,
  per_page = 12
): Promise<InstructorCoursesResponse> {
  const params = new URLSearchParams();

  if (search) params.append("search", search);

  params.append("page", String(page));
  params.append("per_page", String(per_page));

  const response = await fetch(
    `/api/instructor/courses?${params.toString()}`
  );

  const data: InstructorCoursesResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}