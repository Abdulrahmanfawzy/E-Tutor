
import CoursesList from "@/features/instructor-courses/components/course-list";
import CoursesFilters from "@/features/instructor-courses/components/courses-filters";
import { COURSES } from "@/features/instructor-courses/data/mock-courses";

export default function Page() {
  return (
    <>
     <div className="flex flex-col gap-6">
      <CoursesFilters />
     
      <CoursesList courses={COURSES} />
    </div>
 
    </>
  )
}
