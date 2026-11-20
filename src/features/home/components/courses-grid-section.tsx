
import type { Course } from "../types/home.types";
import { CourseCard } from "./course-card";
import { SectionTitle } from "./section-title";

interface CoursesGridSectionProps {
  title: string;
  courses: Course[];
  background?: string;
}

export function CoursesGridSection({
  title,
  courses,
  background = "bg-[#F5F7FA]",
}: CoursesGridSectionProps) {
  return (
    <section className={`${background} px-5 py-14`}>
      <div className="mx-auto max-w-5xl">
        <SectionTitle title={title} />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
