import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReviewFilter } from "./review-filter";
import { ReviewItem } from "./review-item";
import { RatingFilterOption, Review } from "../types/review";

interface ReviewsSectionProps {
  reviews: Review[];
  filterOptions: RatingFilterOption[];
}

export function ReviewsSection({ reviews, filterOptions }: ReviewsSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-900">Students Feedback</h2>
        <ReviewFilter options={filterOptions} />
      </div>

      <div>
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>

      <Button
        type="button"
        variant="secondary"
        className="rounded-sm bg-orange-50 px-8 text-xs font-medium text-orange-500 hover:bg-orange-100"
      >
        Load More
        <Loader className="size-3.5" />
      </Button>
    </section>
  );
}