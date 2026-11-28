import { useTranslations } from "next-intl";
import InstructorCourseCard from "./instructor-course-card";
import type { InstructorCourse as ApiCourse } from "../types/instructor-courses";

export default function CoursesGrid({
  courses,
}: {
  courses: ApiCourse[];
}) {
  const t = useTranslations("instructorCourses");

  if (courses.length === 0) {
    return (
      <p className="py-16 text-center text-gray-500">
        {t("noCourses")}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {courses.map((course) => (
        <InstructorCourseCard
          key={course.id}
          id={course.id}
          slug={course.slug}
          title={course.title}
          category={course.category.name}
          image={course.thumbnail_url}
          rating={course.rating}
          students={course.students_count}
          price={course.current_price}
          oldPrice={
            course.discount_percent > 0
              ? course.price
              : undefined
          }
        />
      ))}
    </div>
  );
}