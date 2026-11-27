import { Skeleton } from "@/components/ui/skeleton";

interface InstructorSkeletonProps {
    count?: number;
}

export function InstructorSkeleton({
    count = 2,
}: InstructorSkeletonProps) {
    return (
        <section className="w-full space-y-5">
            {/* Header */}
            <Skeleton className="h-6 w-48" />

            {/* Instructor Cards */}
            <div className="space-y-4">
                {Array.from({ length: count }).map((_, index) => (
                    <article
                        key={index}
                        className="flex flex-col gap-5 border border-slate-200 p-5 sm:p-6 lg:flex-row lg:gap-5"
                    >
                        {/* Avatar */}
                        <div className="flex shrink-0 justify-center lg:justify-start">
                            <Skeleton className="size-24 rounded-full sm:size-28 lg:size-32" />
                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex-1 space-y-3">
                            {/* Name */}
                            <Skeleton className="h-5 w-36" />

                            {/* Title */}
                            <Skeleton className="h-4 w-48 max-w-full" />

                            {/* Stats */}
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-4 w-28" />
                                <Skeleton className="h-4 w-20" />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Skeleton className="h-3 w-full" />
                                <Skeleton className="h-3 w-full" />
                                <Skeleton className="h-3 w-4/5" />
                            </div>

                            {/* Read More */}
                            <Skeleton className="h-3 w-20" />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}