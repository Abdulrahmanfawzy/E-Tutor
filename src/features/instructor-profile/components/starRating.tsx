import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  max?: number;
  className?: string;
}

export function StarRating({ rating, max = 5, className }: StarRatingProps) {
  return (
    <div className={cn("flex gap-0.5", className)} role="img" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          className={cn("size-3.5", i < rating ? "fill-amber-500 text-amber-500" : "fill-slate-200 text-slate-200")}
        />
      ))}
    </div>
  );
}