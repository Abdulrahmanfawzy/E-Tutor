import type { Course, CourseCategory } from "./courses-data";

export const COURSE_SORT_OPTIONS = [
  { value: "trending", label: "Trending" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
] as const;

export type CourseSortOption = (typeof COURSE_SORT_OPTIONS)[number]["value"];

export function filterCourses(
  courses: readonly Course[],
  search: string,
  category: CourseCategory | "ALL",
  sort: CourseSortOption
) {
  const query = search.trim().toLowerCase();

  const result = courses.filter((course) => {
    const matchesSearch =
      !query ||
      course.title.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query);
    const matchesCategory = category === "ALL" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  switch (sort) {
    case "price-low":
      return result.sort((a, b) => a.price - b.price);
    case "price-high":
      return result.sort((a, b) => b.price - a.price);
    case "rating":
      return result.sort((a, b) => b.rating - a.rating);
    default:
      return result;
  }
}
