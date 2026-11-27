
import GiftCourseContainer from "@/features/gift-course/components/gift-course-container";
import GiftCourseHeader from "@/features/gift-course/components/gift-course-header";
import { getCourseBySlug } from "@/features/single-course/utils/course-api";
import { notFound } from "next/navigation";

interface GiftCoursePageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export default async function GiftCoursePage({
  params,
}: GiftCoursePageProps) {
  const { slug } = await params;

  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <GiftCourseHeader
        courseTitle={course.title}
        slug={slug}
      />

      <GiftCourseContainer course={course} />
    </>
  );
}
