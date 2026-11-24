"use client";

import { useState } from "react";
import CustomPagination from "@/components/common/custom-pagination";
import CoursesGrid from "./courses-grid";
import type { InstructorCourse } from "./instructor-course-card";

const PAGE_SIZE = 12;

export default function CoursesList({ courses }: { courses: InstructorCourse[] }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(courses.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visibleCourses = courses.slice(start, start + PAGE_SIZE);

  return (
    <>
      <CoursesGrid courses={visibleCourses} />
      <CustomPagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
}