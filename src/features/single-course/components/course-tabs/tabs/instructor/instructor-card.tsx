"use client";

import { useState } from "react";
import { Star, Users, CirclePlay } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import playCircle from '@/assets/images/PlayCircle.svg'
import type { CourseInstructor } from "../../../../types/instructor";
import Image from "next/image";

interface InstructorCardProps {
    instructor: CourseInstructor;
}

export function InstructorCard({
    instructor,
}: InstructorCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const locale = useLocale();
    const t = useTranslations("courseDetails.instructor");

    const isRTL = locale === "ar";

    const formattedStudents = instructor.studentsCount.toLocaleString(
        locale === "ar" ? "ar-EG" : "en-US"
    );

    return (
        <article
            className="flex flex-col gap-5 border border-slate-100 rounded-sm p-5 sm:p-6 lg:flex-row lg:gap-5"
            dir={isRTL ? "rtl" : "ltr"}
        >
            {/* Instructor Image */}
            <div className="flex shrink-0 justify-center lg:justify-start">
                <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={100}
                    height={100}
                    className="size-24 rounded-full object-cover sm:size-28 lg:size-32"
                />
            </div>

            {/* Instructor Information */}
            <div className="min-w-0 flex-1 space-y-3">
                {/* Name & Title */}
                <div className="space-y-1">
                    <h3 className="text-base font-semibold text-slate-900">
                        {instructor.name}
                    </h3>

                    <p className="text-xs leading-5 text-slate-500">
                        {instructor.title}
                    </p>
                </div>

                {/* Statistics */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <Star className="size-4 fill-amber-400 text-amber-400" />

                        <span className="font-medium text-slate-900">
                            {instructor.rating}
                        </span>

                        <span className="text-slate-500">
                            {t("courseRating")}
                        </span>
                    </div>

                    {/* Students */}
                    <div className="flex items-center gap-1.5">
                        <Users className="size-4 text-indigo-500" />

                        <span className="text-slate-900">
                            {formattedStudents}
                        </span>

                        <span className="text-slate-500">
                            {t("students")}
                        </span>
                    </div>

                    {/* Courses */}
                    <div className="flex items-center gap-1.5">
                        <Image src={playCircle} alt="video icon" width={20} height={20} />
                        <span className="text-slate-900">
                            {String(instructor.coursesCount).padStart(2, "0")}
                        </span>

                        <span className="text-slate-500">
                            {t("courses")}
                        </span>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <p
                        className={`text-xs leading-5 text-slate-500 ${isExpanded ? "" : "line-clamp-3"
                            }`}
                    >
                        {instructor.description}
                    </p>

                    <button
                        type="button"
                        onClick={() => setIsExpanded((prev) => !prev)}
                        className="mt-1 text-xs font-medium text-slate-800 transition-colors hover:text-orange-500"
                    >
                        {isExpanded ? t("readLess") : t("readMore")}
                    </button>
                </div>
            </div>
        </article>
    );
}