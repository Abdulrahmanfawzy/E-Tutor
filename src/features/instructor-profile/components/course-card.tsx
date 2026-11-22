import Image from "next/image";
import { Star, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { COURSE_CATEGORY_STYLES } from "../lib/course-category";
import { formatCompact, formatCurrency } from "../lib/format";
import { cn } from "@/lib/utils";
import type { Course } from "../types/instructor-types";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const { title, category, price, rating, students, imageUrl } = course;
  const style = COURSE_CATEGORY_STYLES[category];

  return (
    <Card className="gap-0 overflow-hidden rounded-sm border-slate-200 py-0 shadow-none">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(min-width: 1280px) 400px, (min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="space-y-2 p-3">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className={cn("rounded-sm px-1.5 py-0 text-[9px] font-medium", style.className)}>
            {style.label}
          </Badge>
          <span className="text-base font-bold text-orange-500">{formatCurrency(price)}</span>
        </div>
        <h3 className="line-clamp-2 min-h-8 text-xs font-medium leading-4 text-slate-900">{title}</h3>
      </div>

      <div className="flex items-center justify-between border-t px-3 py-2 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <Star className="size-3.5 fill-amber-400 text-amber-400" />
          {rating.toFixed(1)}
        </span>
        <span className="flex items-center gap-1">
          <User className="size-3.5 text-violet-600" />
          {formatCompact(students)} students
        </span>
      </div>
    </Card>
  );
}
