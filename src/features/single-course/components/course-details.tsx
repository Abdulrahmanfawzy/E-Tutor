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
      <section className="bg-[#F5F7FA]">
        <div className="mx-auto grid w-full max-w-285 grid-cols-1 gap-x-8 gap-y-6 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,25rem)] lg:items-start lg:gap-y-8 lg:px-8 lg:py-14 xl:px-0">
          <div className="min-w-0 lg:col-start-1 lg:row-start-1">
            <CourseHeader course={course} />
          </div>

          <div className="min-w-0 lg:col-start-1 lg:row-start-2">
            <CoursePreview
              image={course.previewImage}
              videoUrl={course.previewVideo}
            />
          </div>

          <aside className="min-w-0  lg:sticky lg:top-6 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <CoursePurchaseCard course={course} />
          </aside>
        </div>
      </section>
    </main>
  );
}