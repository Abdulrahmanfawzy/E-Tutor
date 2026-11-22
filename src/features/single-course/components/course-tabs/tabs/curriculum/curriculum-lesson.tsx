"use client";

import {
    CirclePlay,
    FileText,
    BookOpen,
    ClipboardList,
} from "lucide-react";

import { useTranslations, useLocale } from "next-intl";

import type { CurriculumLesson } from "../../../../types/curriculum";

interface CurriculumLessonProps {
    lesson: CurriculumLesson;
}

export function CurriculumLesson({
    lesson,
}: CurriculumLessonProps) {
    const t = useTranslations("courseDetails.curriculum");
    const locale = useLocale();

    const isRTL = locale === "ar";

    const icons = {
        video: CirclePlay,
        file: FileText,
        article: BookOpen,
        quiz: ClipboardList,
    };

    const Icon = icons[lesson.type];

    return (
        <div
            className="flex min-w-0 items-center justify-between gap-3 px-3 py-2.5 transition-colors hover:bg-slate-50 sm:px-4"
            dir={isRTL ? "rtl" : "ltr"}
        >
            <div className="flex min-w-0 items-center gap-2.5">
                <Icon className="size-3.5 shrink-0 text-slate-700" />

                <span className="truncate text-xs text-slate-600">
                    {lesson.title}
                </span>

                {lesson.isPreview && (
                    <span className="shrink-0 rounded bg-orange-50 px-1.5 py-0.5 text-[10px] text-orange-400">
                        {t("preview")}
                    </span>
                )}
            </div>

            <div className="flex shrink-0 items-center gap-2 text-[10px] text-slate-400">
                {lesson.duration && <span>{lesson.duration}</span>}

                {lesson.fileSize && <span>{lesson.fileSize}</span>}
            </div>
        </div>
    );
}