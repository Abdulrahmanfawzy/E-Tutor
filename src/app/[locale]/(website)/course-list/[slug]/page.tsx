import { CourseDetails } from "@/features/single-course/components/course-details";
import { courses } from "@/features/single-course/data/courses";
import { curriculumMock } from "@/features/single-course/data/curriculum-mock";
import { getCourseBySlug } from "@/features/single-course/utils/course-api";
import { Metadata } from "next";

import { notFound } from "next/navigation";

export const instant = false
interface CoursePageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}
export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) {
    return {
      title: "Course Not Found",
    };
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
  console.log("Current slug:", slug);
  const course = await getCourseBySlug(slug);



  if (!course) {
    notFound();

  }



  return <CourseDetails course={course} curriculum={curriculumMock} />;



}