import { PlayCircle, Star, Users } from "lucide-react";
import { formatNumber } from "../lib/format";

interface InstructorStatsProps {
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  coursesCount: number;
}

export function InstructorStats({ rating, reviewsCount, studentsCount, coursesCount }: InstructorStatsProps) {
  return (
    <dl className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
      <div className="flex items-center gap-1">
        <Star className="size-3.5 fill-amber-400 text-amber-400" />
        <dd className="font-semibold text-slate-900">{rating}</dd>
        <dt className="text-slate-400">({formatNumber(reviewsCount)} review)</dt>
      </div>
      <div className="flex items-center gap-1">
        <Users className="size-3.5 text-violet-600" />
        <dd className="font-semibold text-slate-900">{formatNumber(studentsCount)}</dd>
        <dt className="text-slate-400">students</dt>
      </div>
      <div className="flex items-center gap-1">
        <PlayCircle className="size-3.5 text-orange-500" />
        <dd className="font-semibold text-slate-900">{coursesCount}</dd>
        <dt className="text-slate-400">courses</dt>
      </div>
    </dl>
  );
}