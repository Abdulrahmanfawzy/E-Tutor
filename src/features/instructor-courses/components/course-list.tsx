
import CustomPagination from "@/components/common/custom-pagination";
import CoursesGrid from "./courses-grid";
import type { InstructorCourse as ApiCourse } from "../types/instructor-courses";



interface CoursesListProps {
  courses: ApiCourse[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function CoursesList({
  courses,
  currentPage,
  totalPages,
  onPageChange,
}: CoursesListProps) {
  return (
    <>
      <CoursesGrid courses={courses} />

      {totalPages > 1 && (
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}
