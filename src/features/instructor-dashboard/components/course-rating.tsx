import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import DashboardCard from "./dashboard-card";
import RatingSparkline from "./rating-sparkline";

const OVERALL_RATING = 4.6;

const RATINGS = [
  { stars: 5, percentage: 56, label: "56%" },
  { stars: 4, percentage: 37, label: "37%" },
  { stars: 3, percentage: 8, label: "8%" },
  { stars: 2, percentage: 1, label: "1%" },
  { stars: 1, percentage: 0.5, label: "<1%" },
];

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
  return (
    <DashboardCard title="Overall Course Rating">
      <div className="flex flex-col gap-6">
        {/* Top: score + sparkline */}
        <div className="flex items-center gap-6">
          <div className="flex h-32 w-40 shrink-0 flex-col items-center justify-center gap-2 bg-orange-50">
            <p className="text-heading-5">{OVERALL_RATING}</p>
            <Stars count={Math.round(OVERALL_RATING)} />
            <p className="text-label-sm font-semibold">Overall Rating</p>
          </div>

          <div className="flex-1">
            <RatingSparkline />
          </div>
        </div>

        {/* Rows */}
        <ul className="flex flex-col gap-3">
          {RATINGS.map(({ stars, percentage, label }) => (
            <li key={stars} className="flex items-center gap-3">
              <Stars count={stars} size={12} />
              <span className="w-12 whitespace-nowrap text-label-sm text-gray-700">
                {stars} Star
              </span>
              <Progress
                value={percentage}
                className=" flex-1 "
                 trackClassName="h-1.5 bg-gray-100"
                 indicatorClassName="bg-orange-400"
              />
              <span className="w-10 text-right text-label-sm text-gray-700">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </DashboardCard>
  );
}