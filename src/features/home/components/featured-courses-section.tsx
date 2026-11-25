
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  BarChart3,
  Clock3,
  Star,
  Users,
} from "lucide-react";

import type { Course } from "../types/home.types";
import { SectionTitle } from "./section-title";

interface FeaturedCoursesSectionProps {
  courses: Course[];
}

export function FeaturedCoursesSection({
  courses,
}: FeaturedCoursesSectionProps) {
  const t = useTranslations("home.featured");

  return (
<section className="bg-white py-10">        
<div className="mx-auto w-full max-w-6xl px-6">
  <SectionTitle title={t("title")} />
      <div className="grid gap-4 md:grid-cols-2">
        {courses.slice(0, 4).map((course) => (
          <article
            key={course.id}
            className="flex min-w-0 border border-gray-100 bg-white transition hover:shadow-md"
          >
            {/* Course Image */}
            <div className="relative min-h-[155px] w-[38%] shrink-0">
              <Image
                src={course.image}
                alt={course.title}
                fill
                sizes="(max-width: 768px) 40vw, 20vw"
                className="object-cover"
              />
            </div>

            {/* Course Details */}
            <div className="flex min-w-0 flex-1 flex-col p-3">
              {/* Category, Rating and Price */}
              <div className="flex items-center justify-between gap-2">
                <span className="border border-green-100 bg-green-50 px-2 py-1 text-[9px] font-semibold text-green-600">
                  {course.tag}
                </span>

                <div className="flex shrink-0 items-center gap-2">
                  <span className="text-sm font-semibold text-[#FF6636]">
                    $14.00
                  </span>
                </div>
              </div>

              {/* Course Title */}
              <h3 className="mt-2 line-clamp-2 text-xs font-semibold leading-5 text-gray-800">
                {course.title}
              </h3>

              {/* Instructor */}
              <div className="mt-2 flex items-center gap-2">
                <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
                    alt={course.instructor}
                    fill
                    sizes="24px"
                    className="object-cover"
                  />
                </div>

                <span className="min-w-0 truncate text-[10px] text-gray-500">
                  {course.instructor}
                </span>

                <span className="ml-auto flex shrink-0 items-center gap-1 text-[10px]">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span className="font-medium text-gray-700">
                    {course.rating.toFixed(1)}
                  </span>
                </span>
              </div>

              {/* Course Stats */}
              <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-2 text-[9px] text-gray-500">
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3 text-[#564FFD]" />
                  {course.students}
                </span>

                <span className="flex items-center gap-1">
                  <BarChart3 className="h-3 w-3 text-red-500" />
                  {t("beginner")}
                </span>

                <span className="flex items-center gap-1">
                  <Clock3 className="h-3 w-3 text-green-500" />
                  {t("duration")}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
