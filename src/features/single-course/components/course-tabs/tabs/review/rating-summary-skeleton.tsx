
import { Skeleton } from "@/components/ui/skeleton";

export function CourseRatingSummarySkeleton() {
    return (
        <section className="space-y-3">
            {/* Title */}
            <Skeleton className="h-5 w-32" />

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                {/* Overall Rating */}
                <div className="flex min-h-28 w-full shrink-0 flex-col items-center justify-center gap-2 border border-slate-200 p-4 sm:w-30">

                    <Skeleton className="h-9 w-14" />

                    {/* Stars */}
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Skeleton
                                key={index}
                                className="size-4 rounded-sm"
                            />
                        ))}
                    </div>

                    <Skeleton className="h-2.5 w-16" />
                </div>

                {/* Rating Distribution */}
                <div className="flex-1 space-y-3">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2"
                        >
                            {/* Stars */}
                            <div className="flex w-20 shrink-0 gap-0.5">
                                {Array.from({ length: 5 }).map((_, starIndex) => (
                                    <Skeleton
                                        key={starIndex}
                                        className="size-3.5 rounded-sm"
                                    />
                                ))}
                            </div>

                            {/* Rating Label */}
                            <Skeleton className="hidden h-3 w-20 shrink-0 sm:block" />

                            {/* Progress Bar */}
                            <Skeleton className="h-1.5 flex-1" />

                            {/* Percentage */}
                            <Skeleton className="h-3 w-8 shrink-0" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
