import { useTranslations } from "next-intl";
import InstructorCourseCard, { type InstructorCourse } from "./instructor-course-card";

export default function CoursesGrid({ courses }: { courses: InstructorCourse[] }) {
  const t = useTranslations("instructorCourses");

  if (courses.length === 0) {
    return <p className="py-16 text-center text-gray-500">{t("noCourses")}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {courses.map(({ id, ...course }) => (
        <InstructorCourseCard key={id} {...course} />
      ))}
    </div>
  );
}