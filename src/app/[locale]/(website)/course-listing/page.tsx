import { Suspense } from "react";
import CourseListingCatalog from "@/features/courses/components/course-listing-catalog";

export default function CourseListingPage() {
  return (
    <main className="mx-auto w-full max-w-285 px-4 py-10">
      <Suspense
        fallback={
          <p role="status" className="py-10 text-sm text-gray-500">
            Loading courses...
          </p>
        }
      >
        <CourseListingCatalog />
      </Suspense>
    </main>
  );
}