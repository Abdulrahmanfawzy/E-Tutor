import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarRating } from "./starRating";
import { Review } from "../types/review";


interface ReviewItemProps {
  review: Review;
}

export function ReviewItem({ review }: ReviewItemProps) {
  const { authorName, authorAvatarUrl, postedAt, rating, comment } = review;

  return (
    <article className="flex gap-3 border-b border-slate-100 py-5 first:pt-0">
      <Avatar className="size-8 shrink-0">
        <AvatarImage src={authorAvatarUrl} alt={authorName} className="object-cover" />
        <AvatarFallback>{authorName[0]}</AvatarFallback>
      </Avatar>

      <div className="min-w-0 space-y-2">
        <header className="flex items-center gap-2 text-xs">
          <h3 className="font-semibold text-slate-900">{authorName}</h3>
          <span aria-hidden className="size-1 rounded-full bg-slate-400" />
          <time className="text-slate-400">{postedAt}</time>
        </header>
        <StarRating rating={rating} />
        <p className="text-xs leading-relaxed text-slate-600">{comment}</p>
      </div>
    </article>
  );
}