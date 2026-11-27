
"use client";

import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import DashboardCard from "./dashboard-card";
import RatingSparkline from "./rating-sparkline";
import PeriodSelect from "./period-select";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getOverallCourseRating } from "../api/overall-course-rating-api";

function Stars({ count, size = 14 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            i < count
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          )}
        />
      ))}
    </div>
  );
}

export default function CourseRating() {
  const [period, setPeriod] = useState("year");

  const { data, error, isLoading } = useQuery({
    queryKey: ["overall-course-rating", period],
    queryFn: () => getOverallCourseRating(period),
  });

  const rating = data?.data;

  if (isLoading) return <p>Loading rating...</p>;
  if (error) return <p>Failed to load rating.</p>;

  return (
    <DashboardCard
      title="Overall Course Rating"
      action={
        <PeriodSelect
          defaultValue="year"
          onChange={setPeriod}
        />
      }
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <div className="flex h-32 w-40 shrink-0 flex-col items-center justify-center gap-2 bg-orange-50">
            <p className="text-heading-5">
              {rating?.average?.toFixed(1) ?? "0.0"}
            </p>

            <Stars count={Math.round(rating?.average ?? 0)} />

            <p className="text-label-sm font-semibold">
              Overall Rating
            </p>

            <p className="text-label-xs text-gray-500">
              {rating?.count ?? 0} Reviews
            </p>
          </div>

          <div className="flex-1">
            <RatingSparkline data={rating?.trend ?? []} />
          </div>
        </div>

        <ul className="flex flex-col gap-3">
          {rating?.distribution.map(({ stars, percent }) => (
            <li key={stars} className="flex items-center gap-3">
              <Stars count={stars} size={12} />

              <span className="w-12 whitespace-nowrap text-label-sm text-gray-700">
                {stars} Star
              </span>

              <Progress
                value={percent}
                className="flex-1"
                trackClassName="h-1.5 bg-gray-100"
                indicatorClassName="bg-orange-400"
              />

              <span className="w-10 text-right text-label-sm text-gray-700">
                {percent}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </DashboardCard>
  );
}
