
import { Skeleton } from "@/components/ui/skeleton";

interface LoadingSkeletonProps {
  count?: number;
  className?: string;
  itemClassName?: string;
  variant?: "card" | "text" | "circle" | "rectangle";
}

export default function LoadingSkeleton({
  count = 4,
  className = "",
  itemClassName = "",
  variant = "rectangle",
}: LoadingSkeletonProps) {
  const variants = {
    card: "h-40 w-full rounded-xl",
    text: "h-4 w-full rounded-md",
    circle: "h-12 w-12 rounded-full",
    rectangle: "h-32 w-full rounded-lg",
  };

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          className={`${variants[variant]} ${itemClassName}`}
        />
      ))}
    </div>
  );
}
