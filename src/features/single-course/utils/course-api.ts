import { courses } from "../data/courses";
import type { Course } from "../types/course";

export async function getCourseBySlug(
  slug: string
): Promise<Course | null> {
  const course = courses.find(
    (course) => course.slug === slug
  );

  return course ?? null;
}