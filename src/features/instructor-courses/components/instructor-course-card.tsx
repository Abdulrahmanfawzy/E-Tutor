
import Image, { type StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import CourseActionsMenu from "./course-actions-menu";
import { Star, Users } from "lucide-react";

export type InstructorCourse = {
  id: number;
  title: string;
  category: string;
  image: string | StaticImageData;
  rating: number;
  students: number;
  price: number;
  oldPrice?: number;
  slug: string;
};

export default function InstructorCourseCard({
  id,
  slug,
  title,
  category,
  image,
  rating,
  students,
  price,
  oldPrice,
}: InstructorCourse) {
  const t = useTranslations("instructorCourses");

  const formattedPrice = price.toFixed(2);

  return (
    <Card className="gap-0 overflow-hidden p-0">
      {/* Course Thumbnail */}
      <div className="relative aspect-video w-full bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      {/* Course Information */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <Badge variant="secondary" className="w-fit uppercase">
          {category}
        </Badge>

        <h3 className="line-clamp-2 min-h-10 text-label-md font-medium leading-5">
          {title}
        </h3>

        <div className="mt-auto flex items-center justify-between text-label-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Star
              size={14}
              className="fill-amber-400 text-amber-400"
            />
            {rating.toFixed(1)}
          </span>

          <span className="flex items-center gap-1 whitespace-nowrap">
            <Users size={14} className="text-purple-400" />
            <span>{students.toLocaleString()}</span>
            <span className="text-gray-500">
              {t("students")}
            </span>
          </span>
        </div>
      </div>

     
   {/* Price and Actions */}
<div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
  {price === 0 ? (
    <p className="font-semibold text-green-600">
      {t("free")}
    </p>
  ) : (
    <p className="font-semibold text-button-primary">
      ${formattedPrice}

      {oldPrice !== undefined && (
        <span className="ms-2 text-label-sm font-normal text-gray-400 line-through">
          ${oldPrice.toFixed(2)}
        </span>
      )}
    </p>
  )}

  <CourseActionsMenu slug={slug}   />
</div>
    </Card>
  );
}
