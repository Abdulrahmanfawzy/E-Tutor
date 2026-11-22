
import { Star } from "lucide-react";

import type { CourseReview } from "../../../../types/review";

interface ReviewCardProps {
    review: CourseReview;
}

export function ReviewCard({ review }: ReviewCardProps) {
    return (
        <article className="flex gap-3 border-b border-slate-200 py-3 last:border-b-0">

            {/* Student Image */}
            <img
                src={review.studentImage}
                alt={review.studentName}
                className="size-9 shrink-0 rounded-full object-cover"
            />

            {/* Review Content */}
            <div className="min-w-0 flex-1 space-y-2">

                {/* Student Information */}
                <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xs font-medium text-slate-900">
                        {review.studentName}
                    </h3>

                    <span className="text-[10px] text-slate-400">
                        •
                    </span>

                    <time className="text-[10px] text-slate-500">
                        {review.createdAt}
                    </time>
                </div>

                {/* Rating Stars */}
                <div
                    className="flex items-center gap-0.5"
                    aria-label={`${review.rating} out of 5 stars`}
                >
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                            key={index}
                            className={`size-3.5 ${index < review.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-amber-400"
                                }`}
                        />
                    ))}
                </div>

                {/* Review Comment */}
                <p className="text-xs leading-5 text-slate-600">
                    {review.comment}
                </p>

            </div>
        </article>
    );
}
