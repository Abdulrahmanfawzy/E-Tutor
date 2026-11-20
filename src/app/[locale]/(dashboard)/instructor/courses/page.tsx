import CoursesFilters from "@/features/instructor-courses/components/courses-filters";
import CoursesGrid from "@/features/instructor-courses/components/courses-grid";
import { COURSES } from "@/features/instructor-courses/data/mock-courses";

export default function Page() {
  return (
    <>
     <div className="flex flex-col gap-6">
      <CoursesFilters />
      <CoursesGrid courses={COURSES} />
    </div>
 
    </>
  )
}
