
import { Link } from "@/i18n/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";
import { cn } from "cn";
import type {
  Course,
  CourseCategory,
} from "../../app/[locale]/(website)/course-categories/_components/courses-data";

interface CourseCardProps {
  course: Course;
}
const CATEGORY_STYLES: Record<CourseCategory, string> = {
  "DESIGN": "bg-orange-50 text-orange-600",
  "DEVELOPMENTS": "bg-purple-50 text-purple-600",
  "BUSINESS": "bg-green-50 text-green-600",
  "MARKETING": "bg-purple-50 text-purple-600",
  "IT & SOFTWARE": "bg-red-50 text-red-600",

}
export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/course-listing/${course.slug}`}
      aria-label={`View course details for ${course.title}`}
      className="block h-full rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6636]"
    >
      <Card className="group/card h-full gap-0 overflow-hidden rounded-none rounded-sm bg-white p-0 duration-200 hover:shadow-md">
        <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="w-full object-cover transition-transform duration-300 group-hover/card:scale-105"
          />
        </div>

        <CardContent className="flex flex-1 flex-col gap-3 p-4">
          <div className="flex items-center justify-between gap-2">
            <Badge
              variant="outline"
              className={cn(
                "min-w-0 max-w-[65%] shrink truncate border-0 px-2 py-1 text-[10px] font-medium leading-3",
                CATEGORY_STYLES[course.category]
              )}
            >
              {course.category}
            </Badge>

            <span className="shrink-0 whitespace-nowrap text-base font-semibold leading-5.5 text-[#FF6636]">
              ${course.price}
            </span>
          </div>

          <h3 className="min-h-10 line-clamp-2 text-sm leading-5 font-semibold text-[#1D2026]">
            {course.title}
          </h3>
        </CardContent>

        <CardFooter className="mt-auto justify-between border-gray-100 bg-transparent px-4 py-3">
          <div className="flex items-center gap-1.5">
            <Star size={14} className="fill-orange-400 text-orange-400" />
            <span className="text-xs font-medium text-gray-600">
              {course.rating.toFixed(1)}
            </span>
          </div>

          <span className="text-xs text-gray-500">
            {course.students} Students
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
