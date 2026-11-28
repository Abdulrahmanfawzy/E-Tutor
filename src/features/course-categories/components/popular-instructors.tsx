
import Image from "next/image";
import { Star } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import instructorImage from "@/assets/images/instructor.svg";
import type { PopularInstructor as PopularInstructorData } from "../types/course-category.types";

interface PopularInstructorsProps {
  categoryName: string;
  instructors: PopularInstructorData[];
}

export default function PopularInstructors({
  categoryName,
  instructors,
}: PopularInstructorsProps) {
  const t = useTranslations("courseCategories");
  const locale = useLocale();
  const numberFormat = new Intl.NumberFormat(locale);

  return (
    <section className="bg-[#F5F7FA] py-8 sm:py-10">
      <div className="mx-auto w-full max-w-285 ">
        <h2 className="mb-6 text-center text-xl font-semibold text-[#1D2026]">
          {t("popularInstructors.title", { category: categoryName })}
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="overflow-hidden bg-white rounded-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-4/3 w-full h-61 shrink-0 ">
                <Image
                  src={instructor.avatar_url || instructorImage}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 20vw"
                  unoptimized={Boolean(instructor.avatar_url)}
                />
              </div>

              <div className="space-y-1 px-2 py-3 text-center">
                <h3 className="text-base font-medium text-card-foreground">
                  {instructor.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {instructor.headline}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 px-2 py-2">
                <div className="flex items-center gap-1">
                  <Star
                    size={15}
                    className="fill-amber-400 text-amber-400"
                  />
                  <span className="text-[14px] text-gray-700 font-medium">
                    {instructor.rating.toFixed(1)}
                  </span>
                </div>

                <span className="text-[14px] text-gray-700 font-medium">
                  {numberFormat.format(instructor.students_count)}{" "}
                  <span className="text-gray-500 font-normal">
                    {t("students")}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
