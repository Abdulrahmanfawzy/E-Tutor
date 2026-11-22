import { Course } from "../types/course";
import { Curriculum } from "../types/curriculum";
import { CourseHeader } from "./course-header";
import { CoursePreview } from "./course-preview";
import { CoursePurchaseCard } from "./course-purchase-card";
import { CourseTabsContent } from "./course-tabs/tabs/course-tabs-content";

interface CourseDetailsProps {
    course: Course;
    curriculum: Curriculum;
}

export function CourseDetails({ course, curriculum }: CourseDetailsProps) {
    return (
        <main className="relative min-h-screen bg-white">
            <section className="bg-[#F5F7FA]">
                <div className="mx-auto grid w-full max-w-285 grid-cols-1 gap-x-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,25rem)] lg:items-start lg:px-8 lg:py-14 xl:px-0">
                    <div className="min-w-0">
                        <CourseHeader course={course} />
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto grid w-full max-w-285 grid-cols-1 gap-x-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,25rem)] lg:items-start lg:px-8 lg:py-14 xl:px-0">
                    <div className="min-w-0">
                        <CoursePreview
                            image={course.previewImage}
                            videoUrl={course.previewVideo}
                        />
                        {/* Tabs Below Video */}
                        <CourseTabsContent course={course} curriculum={curriculum} />
                    </div>

                    <aside className="mt-6 min-w-0 lg:absolute lg:top-14 lg:end-8 lg:mt-0 lg:z-20 lg:w-[25rem] xl:end-[calc((100%-71.25rem)/2)]">
                        <CoursePurchaseCard course={course} slug={course.slug} />
                    </aside>
                </div>
            </section>
        </main>
    );
}