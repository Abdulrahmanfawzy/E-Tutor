
"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getInstructorCourses } from "../api/instructor-courses-api";
import LoadingSkeleton from "@/components/common/loading-skeleton";
import ErrorState from "@/components/common/error-state";
import CoursesFilters from "./courses-filters";
import CoursesList from "./course-list";

export default function InstructorCoursesContent() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["courses", search, page],
    queryFn: () => getInstructorCourses(search, page),
  });

  const courses = data?.data.data ?? [];
  const meta = data?.data.meta;



  return (
    <div className="flex flex-col gap-6">
      <CoursesFilters
        onSearchChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
      />

      {isLoading ? (
        <LoadingSkeleton
          count={8}
          variant="card"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      ) : error ? (
        <ErrorState
          title="Failed to load courses"
          message="We couldn't load your courses. Please try again."
          onRetry={() => refetch()}
        />
      ) : (
        <CoursesList
          courses={courses}
          currentPage={meta?.current_page ?? 1}
          totalPages={meta?.last_page ?? 1}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}
