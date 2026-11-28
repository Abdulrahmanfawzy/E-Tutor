
import { Star } from "lucide-react";

import type { CourseRatingSummary } from "../../../../types/review";
import { useTranslations } from "next-intl";

interface CourseRatingSummaryProps {
    summary: CourseRatingSummary;
}

export function CourseRatingSummary({
    summary,
}: CourseRatingSummaryProps) {
    const t = useTranslations("courseDetails.reviews");

    return (
        <section className="space-y-3">
            <h2 className="text-base font-semibold text-slate-900">
                {t("courseRating")}
            </h2>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                {/* Overall Rating */}
                <div className="flex min-h-28 w-full shrink-0 flex-col items-center justify-center gap-2 border border-slate-200 rounded-sm p-4 sm:w-30">

                    <span className="text-3xl font-semibold text-slate-900">
                        {summary.averageRating.toFixed(1)}
                    </span>

                    <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                                key={index}
                                className={`size-4 ${index < Math.round(summary.averageRating)
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-amber-400"
                                    }`}
                            />
                        ))}
                    </div>

                    <span className="text-[10px] text-slate-600">
                        {t("ratingLabel")}
                    </span>
                </div>

                {/* Rating Distribution */}
                <div className="flex-1 space-y-2">

                    {summary.distribution.map((item) => (
                        <div
                            key={item.stars}
                            className="flex items-center gap-2"
                        >
                            {/* Stars */}
                            <div className="flex w-20 shrink-0 items-center gap-0.5">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star
                                        key={index}
                                        className={`size-3.5 ${index < item.stars
                                            ? "fill-amber-400 text-amber-400"
                                            : "text-amber-400"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Label */}
                            <span className="hidden w-20 shrink-0 text-[10px] text-slate-500 sm:block">
                                {t("starRating", { count: item.stars })}
                            </span>

                            {/* Progress Bar */}
                            <div className="h-1.5 flex-1 overflow-hidden bg-orange-100">
                                <div
                                    className="h-full bg-amber-400 transition-all"
                                    style={{
                                        width: `${item.percentage}%`,
                                    }}
                                />
                            </div>

                            {/* Percentage */}
                            <span className="w-8 shrink-0 text-right text-[10px] text-slate-700">
                                {item.percentage < 1
                                    ? "< 1%"
                                    : `${item.percentage}%`}
                            </span>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
