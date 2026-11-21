import { Course } from "@/app/[locale]/(website)/course-categories/_components/courses-data";
import CourseCard from "@/components/common/course-card";


interface CourseGridProps {
    courses: Course[];
    columns?: 3 | 4;
}

export default function CourseGrid({
    courses,
    columns = 4,
}: CourseGridProps) {
    return (
        <div
            className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
                }`}
        >
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
}