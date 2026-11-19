"use client"

import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Star, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import Image, { type StaticImageData } from "next/image";
export type InstructorCourse = {
  id: number;
  title: string;
  category: string;
  image: string ;
  rating: number;
  students: number;
  price: number;
  oldPrice?: number;
};
export default  function InstructorCourseCard({ title,
  category,
  image,
  rating,
  students,
  price,
  oldPrice,
}: Omit<InstructorCourse, "id">) {

   const t = useTranslations("instructorCourses");
  return (
    <>
    <Card className="gap-0 overflow-hidden p-0">
      <div className="relative aspect-video w-full">
        <Image  src={image} alt={title}  fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-3 p-4">
        <Badge variant="secondary" className="w-fit uppercase">
          {category}
        </Badge>

        <h3 className="line-clamp-2 min-h-10 text-label-md font-medium leading-5">
          {title}
        </h3>

        <div className="flex items-center justify-between text-label-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            {rating?.toFixed(1)}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} className="text-purple-400" />
            {students?.toLocaleString()} {t("students")}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
        <p className="font-semibold text-button-primary">
          ${price?.toFixed(2)}
          {oldPrice && (
            <span className="ms-2 text-label-sm font-normal text-gray-400 line-through">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </p>
        <button type="button" aria-label="Options" className="text-gray-500 hover:text-gray-900">
          <MoreHorizontal size={18} />
        </button>
      </div>
    </Card>
    </>
  )
}
