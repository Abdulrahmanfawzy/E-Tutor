
import { Skeleton } from "@/components/ui/skeleton";

export function ReviewCardSkeleton() {
    return (
        <div className="flex gap-3 border-b border-slate-200 py-3">

            {/* Student Image */}
            <Skeleton className="size-9 shrink-0 rounded-full" />

            {/* Review Content */}
            <div className="min-w-0 flex-1 space-y-2">

                {/* Student Name & Date */}
                <div className="flex items-center gap-2">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-2 w-2 rounded-full" />
                    <Skeleton className="h-3 w-16" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Skeleton
                            key={index}
                            className="size-3.5 rounded-sm"
                        />
                    ))}
                </div>

                {/* Review Comment */}
                <div className="space-y-1.5">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-3/4" />
                </div>

            </div>
        </div>
    );
}

interface ReviewsListSkeletonProps {
    count?: number;
}

export function ReviewsListSkeleton({
    count = 4,
}: ReviewsListSkeletonProps) {
    return (
        <div>
            {Array.from({ length: count }).map((_, index) => (
                <ReviewCardSkeleton key={index} />
            ))}
        </div>
    );
}
