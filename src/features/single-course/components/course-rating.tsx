import { Star } from "lucide-react";
import type { CourseRating } from "../types/course";

// import type { CourseRating as CourseRatingType } from "@/types/course";

interface CourseRatingProps {
  rating: CourseRating;
}

export function CourseRating({
  rating,
}: CourseRatingProps) {
  const formattedReviews = new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(rating.reviewCount);

  return (
    <div className="flex items-center gap-2 text-sm">
      <div
        className="flex items-center gap-0.5"
        aria-label={`${rating.value} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="size-4 fill-orange-400 text-orange-400"
          />
        ))}
      </div>

      <span className="font-medium">
        {rating.value}
      </span>

      <span className="text-muted-foreground">
        ({formattedReviews} Ratings)
      </span>
    </div>
  );
}