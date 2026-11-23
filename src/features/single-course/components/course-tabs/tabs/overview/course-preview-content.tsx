"use client";

import { useLocale, useTranslations } from "next-intl";

import type { CoursePreviewContent } from "../../../../types/course-preview-content";

import { PreviewSectionTitle } from "./preview-section-title";
import { LearningOutcomes } from "./learning-outcomes";
import { PreviewList } from "./preview-list";

interface CoursePreviewContentProps {
    content: CoursePreviewContent;
}

export function CoursePreviewContent({
    content,
}: CoursePreviewContentProps) {
    const t = useTranslations("courseDetails.previewContent");
    const locale = useLocale();

    const isRTL = locale === "ar";

    return (
        <div
            className="space-y-6 sm:space-y-8"
            dir={isRTL ? "rtl" : "ltr"}
        >
            {/* Description */}
            <section className="space-y-3">
                <PreviewSectionTitle title={t("description")} />

                <div className="space-y-3">
                    {content.description.map((paragraph, index) => (
                        <p
                            key={index}
                            className="text-xs leading-6 text-slate-600"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </section>

            {/* Learning Outcomes */}
            <section className="space-y-3">
                <LearningOutcomes
                    items={content.learningOutcomes}
                    isRTL={isRTL}
                />
            </section>

            {/* Target Audience */}
            <section className="space-y-3">
                <PreviewSectionTitle title={t("targetAudience")} />

                <PreviewList
                    items={content.targetAudience}
                    variant="arrow"
                    isRTL={isRTL}
                />
            </section>

            {/* Requirements */}
            <section className="space-y-3">
                <PreviewSectionTitle title={t("requirements")} />

                <PreviewList
                    items={content.requirements}
                    variant="bullet"
                    isRTL={isRTL}
                />
            </section>
        </div>
    );
}