import { Metadata } from "next";
import { notFound } from "next/navigation";

import { CourseDetails } from "@/features/single-course/components/course-details";
import { getCourseBySlug } from "@/features/single-course/api/course-details.api";
import {
  mapCourseDetails,
  mapCourseCurriculum,
} from "@/features/single-course/utils/course-details.mapper";

export const instant = false;

interface CoursePageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;

  const course = await getCourseBySlug(slug);

  if (!course) {
    return { title: "Course Not Found" };
  }

  return {
    title: `${course.title} | E-Tutor`,
    description: course.subtitle,
  };
}

export default async function CoursePage({
  params,
}: CoursePageProps) {
  const { slug } = await params;

  const apiCourse = await getCourseBySlug(slug);

  if (!apiCourse) {
    notFound();
  }

  const course = mapCourseDetails(apiCourse);
  const curriculum = mapCourseCurriculum(apiCourse.curriculum);

  return (
    <CourseDetails
      course={course}
      curriculum={curriculum}
    />
  );
}