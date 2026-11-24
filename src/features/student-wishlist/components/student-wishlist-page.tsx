
"use client";

import { useState } from "react";

import { useWishlist } from "../hooks/use-wishlist";
import { StudentProfileHeader } from "./student-profile-header";
import { StudentNavigation } from "./student-navigation";
import { WishlistCoursesTable } from "./wishlist-courses-table";

export function StudentWishlistPage() {
  const { data, isLoading, isError } = useWishlist();

  const [removedCourseIds, setRemovedCourseIds] = useState<number[]>([]);

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-sm text-gray-500">Loading wishlist...</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-sm text-red-500">
          Something went wrong while loading your wishlist.
        </p>
      </div>
    );
  }

  const courses = data.courses.filter(
    (course) => !removedCourseIds.includes(course.id),
  );

  const handleRemoveCourse = (id: number) => {
    setRemovedCourseIds((current) => [...current, id]);
  };

  return (
    <main className="min-h-screen bg-white pb-14">
      <div className="bg-[#ffeee8]">
        <StudentProfileHeader student={data.student} />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <StudentNavigation />

        <section className="mt-7">
          <h2 className="mb-4 ml-25 text-base font-semibold text-gray-900">
            Wishlist <span className="font-normal">({courses.length})</span>
          </h2>

          <WishlistCoursesTable
            courses={courses}
            onRemove={handleRemoveCourse}
          />
        </section>
      </div>
    </main>
  );
}
