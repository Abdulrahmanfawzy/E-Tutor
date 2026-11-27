"use client";

import { coursePreviewMock } from "@/features/single-course/data/course-preview-mock";
import { useLocale } from "next-intl";
import { CoursePreviewContent } from "./course-preview-content";



export function OverviewTabContent() {
    const locale = useLocale();

    const content = coursePreviewMock[locale === "ar" ? "ar" : "en"];

    return <CoursePreviewContent content={content} />;
}