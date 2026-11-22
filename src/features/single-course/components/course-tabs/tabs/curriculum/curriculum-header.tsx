import { FolderOpen, CirclePlay, Clock } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";



interface CurriculumHeaderProps {
    sectionCount: number;
    lectureCount: number;
    duration: string;

}

export function CurriculumHeader({
    sectionCount,
    lectureCount,
    duration,

}: CurriculumHeaderProps) {
    const t = useTranslations("courseDetails.curriculum");
    const locale = useLocale();

    const isRTL = locale === "ar";

    return (
        <div
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
            dir={locale === "ar" ? "rtl" : "ltr"}
        >
            <h2 className="text-lg font-semibold text-slate-900">
                {t('title')}
            </h2>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                    <FolderOpen className="size-3.5 text-orange-400" />
                    <span>
                        {sectionCount} {t("sections")}
                    </span>
                </div>

                <div className="flex items-center gap-1.5">
                    <CirclePlay className="size-3.5 text-indigo-500" />
                    <span>
                        {lectureCount} {t('lectures')}
                    </span>
                </div>

                <div className="flex items-center gap-1.5">
                    <Clock className="size-3.5 text-orange-400" />
                    <span>{duration}</span>
                </div>
            </div>
        </div>
    );
}