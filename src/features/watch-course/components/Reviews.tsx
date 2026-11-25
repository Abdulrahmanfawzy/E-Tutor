import { ReviewFilter } from "@/features/instructor-profile/components/review-filter";
import { ReviewItem } from "@/features/instructor-profile/components/review-item";
import { LoadMoreButton } from "./LoadMore";
import { RatingFilterOption, Review } from "@/features/instructor-profile/types/review";


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

      <LoadMoreButton />
    </section>
  );
}