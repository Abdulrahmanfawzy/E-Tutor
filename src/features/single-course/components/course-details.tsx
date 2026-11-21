import { Course } from "../types/course";
import { CourseHeader } from "./course-header";
import { CoursePreview } from "./course-preview";
import { CoursePurchaseCard } from "./course-purchase-card";

interface CourseDetailsProps {
  course: Course;
}

export function CourseDetails({ course }: CourseDetailsProps) {
  return (
    <main className="min-h-screen bg-white">

      {/* ================= Header / Gray Background ================= */}
      <section className="bg-[#F5F7FA]">
        <div className="relative mx-auto max-w-285 px-5 xl:px-0">

          {/* Course Header */}
          <div className="py-16 lg:w-[calc(100%-444px)] lg:py-20">
            <CourseHeader course={course} />
          </div>

          {/* Purchase Card - Overlapping */}
          <aside className="hidden lg:block absolute right-0 top-20 z-20 w-100 h-full">
            <CoursePurchaseCard course={course} />
          </aside>

        </div>
      </section>

      {/* ================= White Background / Preview ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-285 px-5 xl:px-0">

          <div className="lg:w-[calc(100%-444px)]">

            {/* Mobile Purchase Card */}
            <div className="mb-6 lg:hidden">
              <CoursePurchaseCard course={course} />
            </div>

            {/* Course Preview */}
            <CoursePreview
              image={course.previewImage}
              videoUrl={course.previewVideo}
            />

          </div>

        </div>
      </section>

    </main>
  );
}