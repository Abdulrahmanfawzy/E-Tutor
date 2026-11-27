import { Suspense } from "react";
import CourseListingCatalog, {
  CourseListingSkeleton,
} from "@/features/courses/components/course-listing-catalog";

export default function CourseListingPage() {
  return (
    <main className="app-container my-4">
      <Suspense
        fallback={<CourseListingSkeleton />}
      >
        <CourseListingCatalog />
      </Suspense>
    </main>
  );
}