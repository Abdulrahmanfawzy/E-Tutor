import { Course } from "../../../../types/course";


interface OverviewTabProps {
    course: Course;
}

export function OverviewTabContent({ course }: OverviewTabProps) {
    return (
        <section className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">
                Course Description
            </h2>

            <p className="whitespace-pre-line text-sm leading-7 text-slate-600">
                {course.description || course.subtitle}
            </p>
        </section>
    );
}