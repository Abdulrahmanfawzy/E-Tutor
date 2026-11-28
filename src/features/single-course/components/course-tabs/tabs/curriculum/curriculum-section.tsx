"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, CirclePlay, Clock } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

import type { CurriculumSection } from "../../../../types/curriculum";
import { CurriculumLesson } from "./curriculum-lesson";


interface CurriculumSectionProps {
    section: CurriculumSection;
    onPreviewClick: (videoUrl: string) => void;
}

export function CurriculumSection({
    section, onPreviewClick
}: CurriculumSectionProps) {
    const [isOpen, setIsOpen] = useState(false);

    const t = useTranslations("courseDetails.curriculum");
    const locale = useLocale();

    const isRTL = locale === "ar";

    return (
        <div className="border-b border-slate-100 last:border-b-0">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                className="flex w-full min-w-0 items-center justify-between gap-3 px-3 py-4 text-start transition-colors hover:bg-slate-50 sm:px-4"
                dir={isRTL ? "rtl" : "ltr"}
            >
                {/* Section Title */}
                <div className="flex min-w-0 items-center gap-2">
                    {isOpen ? (
                        <ChevronDown className="size-3.5 shrink-0 text-orange-400" />
                    ) : (
                        <ChevronRight
                            className={`size-3.5 shrink-0 text-slate-500 ${isRTL ? "rotate-180" : ""
                                }`}
                        />
                    )}

                    <span
                        className={`truncate text-xs font-medium ${isOpen ? "text-orange-400" : "text-slate-800"
                            }`}
                    >
                        {section.title}
                    </span>
                </div>

                {/* Section Metadata */}
                <div className="flex shrink-0 items-center gap-3 text-[10px] text-slate-500 sm:gap-4">
                    <span className="flex items-center gap-1">
                        <CirclePlay className="size-3 text-indigo-500" />

                        {t("lectureCount", {
                            count: section.lessons.length,
                        })}
                    </span>

                    {section.duration && (
                        <span className="flex items-center gap-1">
                            <Clock className="size-3 text-orange-400" />
                            {section.duration}
                        </span>
                    )}
                </div>
            </button>

            {/* Lessons */}
            {isOpen && (
                <div className="pb-1">
                    {section.lessons.map((lesson) => (
                        <CurriculumLesson
                            key={lesson.id}
                            lesson={lesson}
                            onPreviewClick={onPreviewClick}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}