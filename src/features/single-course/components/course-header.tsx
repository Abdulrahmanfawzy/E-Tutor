
import { Course } from "../types/course";
import { CourseBreadcrumb } from "./course-breadcrumb";
import { CourseInstructors } from "./course-instructors";

import { CourseRating } from "./course-rating";

interface CourseHeaderProps {
    course: Pick<
        Course,
        "title" | "subtitle" | "breadcrumbs" | "instructors" | "rating"
    >;
}

export function CourseHeader({
    course,
}: CourseHeaderProps) {
    return (
        <section className="space-y-4">
            <CourseBreadcrumb items={course.breadcrumbs} />

            <div className="space-y-2">
                <h1 className="max-w-3xl break-words text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                    {course.title}
                </h1>

                <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                    {course.subtitle}
                </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {course.instructors.length > 0 && (
                    <CourseInstructors
                        instructors={course.instructors}
                    />
                )}

                <CourseRating rating={course.rating} />
            </div>
        </section>
    );
}