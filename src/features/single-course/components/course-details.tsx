

import { Course } from "../types/course";
import { CourseHeader } from "./course-header";
import { CoursePreview } from "./course-preview";

interface CourseDetailsProps {
    course: Course;
}

export function CourseDetails({
    course,
}: CourseDetailsProps) {
    return (
        <main className="min-h-screen bg-background">
            <div className="bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
                        {/* Main Content */}
                        <div className="min-w-0">
                            <CourseHeader course={course} />
                        </div>

                        {/* Purchase Card */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-6">
                                <div className="rounded-lg border bg-white p-5 shadow-sm">
                                    <p className="text-lg font-semibold">
                                        ${course.price.current.toFixed(2)}
                                    </p>

                                    <p className="text-sm text-muted-foreground line-through">
                                        ${course.price.original.toFixed(2)}
                                    </p>

                                    <p className="mt-4 text-sm">
                                        Purchase card will be implemented next.
                                    </p>
                                </div>
                            </div>
                        </aside>

                        {/* Course Preview */}
                        <div className="min-w-0 lg:col-start-1">
                            <CoursePreview
                                image={course.previewImage}
                                videoUrl={course.previewVideo}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}