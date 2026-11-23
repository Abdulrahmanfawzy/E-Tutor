import { Skeleton } from "@/components/ui/skeleton";

export function CurriculumSkeleton() {
    return (
        <section className="w-full space-y-4">
            {/* Header Skeleton */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Skeleton className="h-6 w-28" />

                <div className="flex flex-wrap items-center gap-4">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-16" />
                </div>
            </div>

            {/* Sections Skeleton */}
            <div className="border border-slate-200">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between gap-3 border-b border-slate-100 px-3 py-4 last:border-b-0 sm:px-4"
                    >
                        {/* Section title */}
                        <div className="flex min-w-0 items-center gap-2">
                            <Skeleton className="size-3.5 shrink-0" />
                            <Skeleton
                                className={`h-3.5 ${index === 0
                                    ? "w-32 sm:w-44"
                                    : index === 1
                                        ? "w-40 sm:w-52"
                                        : "w-28 sm:w-48"
                                    }`}
                            />
                        </div>

                        {/* Section metadata */}
                        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
                            <Skeleton className="h-3 w-16 sm:w-20" />
                            <Skeleton className="h-3 w-10 sm:w-14" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}