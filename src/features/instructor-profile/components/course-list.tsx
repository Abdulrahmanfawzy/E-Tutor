import type { Course } from "../types/instructor-types";
import { CourseCard } from "./course-card";

interface CourseListProps {
  instructorName: string;
  courses: Course[];
}

export function CourseList({ instructorName, courses }: CourseListProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-semibold text-slate-900">
        {instructorName.split(" ")[0]} Courses{" "}
        <span className="font-normal text-slate-500">({String(courses.length).padStart(2, "0")})</span>
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}