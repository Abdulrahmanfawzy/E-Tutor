
import { Link } from "@/i18n/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { cn } from "cn";
import { useTranslations } from "next-intl";


export interface CourseCardData {
  id: number;
  slug: string;
  title: string;
  image: string | StaticImageData;
  category: string;
  categoryColor?: string;
  price: number;
  rating: number;
  students: string;
};

interface CourseCardProps {
  course: CourseCardData;
}


export default function CourseCard({ course }: CourseCardProps) {
  const t = useTranslations("courseCategories");

  return (
    <Link
      href={`/course-listing/${course.slug}`}
      aria-label={t("viewCourseDetails", { title: course.title })}
      className="block h-full rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6636]"
    >
      <Card className="group/card h-full gap-0 overflow-hidden  rounded-sm bg-white p-0 duration-200 hover:shadow-md">
        <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="w-full object-cover transition-transform duration-300 group-hover/card:scale-105"
            unoptimized={
              typeof course.image === "string" &&
              /^https?:\/\//.test(course.image)
            }
          />
        </div>

        <CardContent className="flex flex-1 flex-col gap-3 p-4">
          <div className="flex items-center justify-between gap-2">
            <Badge
              variant="outline"
              className={cn(
                "min-w-0 max-w-[65%] shrink truncate border-0 px-2 py-1 text-[10px] font-medium leading-3"
              )}
              style={{
                backgroundColor: course.categoryColor ?? "#F3F4F6",
                color: "#1D2026",
              }}
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
            {course.students} {t("students")}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}