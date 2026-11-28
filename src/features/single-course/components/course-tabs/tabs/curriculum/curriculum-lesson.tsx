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
    onPreviewClick: (videoUrl: string) => void;
}

export function CurriculumLesson({
    lesson,
    onPreviewClick,
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

    const isPlayablePreview =
        lesson.isPreview &&
        lesson.type === "video" &&
        Boolean(lesson.previewUrl);

    return (
        <div
            className={`flex min-w-0 items-center justify-between gap-3 px-3 py-2.5 transition-colors sm:px-4 ${isPlayablePreview ? "cursor-pointer hover:bg-orange-50" : "hover:bg-slate-50"
                }`}
            dir={isRTL ? "rtl" : "ltr"}
            onClick={() => {
                if (isPlayablePreview && lesson.previewUrl) {
                    onPreviewClick(lesson.previewUrl);
                }
            }}
            role={isPlayablePreview ? "button" : undefined}
            tabIndex={isPlayablePreview ? 0 : undefined}
            onKeyDown={(event) => {
                if (
                    isPlayablePreview &&
                    (event.key === "Enter" || event.key === " ")
                ) {
                    event.preventDefault();

                    if (lesson.previewUrl) {
                        onPreviewClick(lesson.previewUrl);
                    }
                }
            }}
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