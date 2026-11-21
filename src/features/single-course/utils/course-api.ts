import { coursesData } from "@/app/[locale]/(website)/course-categories/_components/courses-data";

import { courses } from "../data/courses";
import { courseDetailsMock } from "../data/course-details-mock";
import type { Course } from "../types/course";

// Apply mock details to a course
function applyCourseDetailsMock(course: Course): Course {
  const mock = courseDetailsMock[course.slug];

  if (!mock) {
    return course;
  }

  return {
    ...course,
    ...mock,

    // Merge price without losing existing properties
    price: {
      ...course.price,
      ...mock.price,
    },

    // Use mock data when available
    courseInfo: mock.courseInfo ?? course.courseInfo,
    includes: mock.includes ?? course.includes,
  };
}

export async function getCourseBySlug(
  slug: string
): Promise<Course | null> {
  // 1. Search in single-course data
  const course = courses.find(
    (course) => course.slug === slug
  );

  if (course) {
    return applyCourseDetailsMock(course);
  }

  // 2. Search in catalog data
  const catalogCourse = coursesData.find(
    (course) => course.slug === slug
  );

  if (!catalogCourse) {
    return null;
  }

  // 3. Map catalog data to Course type
  const mappedCourse: Course = {
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
      {
        label: "Category",
        value: catalogCourse.category,
        icon: "layers",
      },
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

  // 4. Apply mock details
  return applyCourseDetailsMock(mappedCourse);
}