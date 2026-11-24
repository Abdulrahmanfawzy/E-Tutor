import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/card";

export interface DashboardCourse {
    id: string;
    title: string;
    instructor: string;
    image: string;
    progress: number;
}

interface DashboardCourseCardProps {
    course: DashboardCourse;
}

export default function DashboardCourseCard({
    course,
}: DashboardCourseCardProps) {
    return (
        <Link
            href={`/courses/${course.id}`}
            className="block h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6636]"
        >
            <Card className="group flex h-full flex-col gap-0 overflow-hidden rounded-sm border border-gray-100 p-0 transition-shadow hover:shadow-md">
                {/* Course Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Course Info */}
                <div className="flex flex-1 flex-col p-3 relative">
                    <p className="mb-1 line-clamp-1 text-[10px] text-gray-500">
                        {course.instructor}
                    </p>

                    <h3 className="mb-3 line-clamp-2 min-h-8 text-xs font-medium leading-4 text-gray-900">
                        {course.title}
                    </h3>

                    {/* Action + Progress */}
                    <div className="mt-auto flex items-center justify-between gap-2">
                        <span className="inline-flex flex-1 min-h-8 items-center justify-center bg-[#FFF0EB] px-3 text-[11px] font-medium text-[#FF6636] transition-colors group-hover:bg-[#FFE1D6]">
                            Watch Lecture
                        </span>

                        {course.progress > 0 && (
                            <span className="shrink-0 text-[10px] font-medium text-green-600">
                                {course.progress}% Completed
                            </span>
                        )}
                    </div>

                    {/* Progress Bar */}
                    {course.progress > 0 && (
                        <div className="absolute left-0 right-0 bottom-0 h-1 w-full overflow-hidden bg-gray-100">
                            <div
                                className="h-full bg-[#FF6636]"
                                style={{
                                    width: `${Math.min(course.progress, 100)}%`,
                                }}
                            />
                        </div>
                    )}
                </div>
            </Card>
        </Link>
    );
}