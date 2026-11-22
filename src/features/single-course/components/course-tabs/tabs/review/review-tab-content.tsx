
"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import {
  courseRatingMock,
  reviewsMock,
} from "../../../../data/reviews-mock";

import { CourseRatingSummary } from "./course-rating-summary";
import { ReviewCard } from "./review-card";

export function ReviewsTabContent() {
  const [selectedRating, setSelectedRating] = useState("5");

  const locale = useLocale();
  const t = useTranslations("courseDetails.reviews");

  const isRTL = locale === "ar";

  const reviews = reviewsMock[isRTL ? "ar" : "en"];

  // Filter reviews based on selected rating
  const filteredReviews = useMemo(() => {
    if (selectedRating === "all") {
      return reviews;
    }

    return reviews.filter(
      (review) => review.rating === Number(selectedRating)
    );
  }, [reviews, selectedRating]);

  return (
    <section
      className="w-full space-y-6"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Course Rating Summary */}
      <CourseRatingSummary summary={courseRatingMock} />

      {/* Students Feedback Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">

        <h2 className="text-base font-semibold text-slate-900">
          {t("studentsFeedback")}
        </h2>

        {/* Rating Filter */}
        <div className="relative w-36">
          <select
            value={selectedRating}
            onChange={(event) =>
              setSelectedRating(event.target.value)
            }
            aria-label={t("filterLabel")}
            className="h-10 w-full cursor-pointer appearance-none border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none transition-colors focus:border-orange-500"
          >
            <option value="all">
              {t("allRatings")}
            </option>

            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={String(rating)}>
                {t("starRating", { count: rating })}
              </option>
            ))}
          </select>

          <ChevronDown
            className={`pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-slate-500 ${isRTL ? "left-3" : "right-3"
              }`}
          />
        </div>
      </div>

      {/* Reviews List */}
      <div>
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))
        ) : (
          <p className="py-8 text-center text-sm text-slate-500">
            {t("noReviews")}
          </p>
        )}
      </div>
    </section>
  );
}
