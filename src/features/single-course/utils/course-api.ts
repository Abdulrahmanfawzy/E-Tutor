import { coursesData } from "@/app/[locale]/(website)/course-categories/_components/courses-data";

import { courses } from "../data/courses";
import type { Course } from "../types/course";

export async function getCourseBySlug(
  slug: string
): Promise<Course | null> {
  const course = courses.find(
    (course) => course.slug === slug
  );

  if (course) {
    return course;
  }

  const catalogCourse = coursesData.find(
    (course) => course.slug === slug
  );

  if (!catalogCourse) {
    return null;
  }

  return {
    id: String(catalogCourse.id),
    slug: catalogCourse.slug,
    title: catalogCourse.title,
    subtitle: `${catalogCourse.category} course with ${catalogCourse.students} students`,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Course Listing", href: "/course-listing" },
      { label: catalogCourse.category },
    ],
    instructors: [],
    rating: {
      value: catalogCourse.rating,
      reviewCount: 0,
    },
    previewImage: catalogCourse.image,
    price: {
      current: catalogCourse.price,
      original: catalogCourse.price,
      currency: "USD",
    },
    discountPercentage: 0,
    offerEndsInDays: 0,
    courseInfo: [
      { label: "Category", value: catalogCourse.category, icon: "layers" },
      {
        label: "Students Enrolled",
        value: catalogCourse.students,
        icon: "users",
      },
      {
        label: "Rating",
        value: catalogCourse.rating.toFixed(1),
        icon: "star",
      },
    ],
    includes: [],
    description: catalogCourse.title,
  };
}