
import { Star } from "lucide-react";
import type { Course } from "../types/home.types";
import { SectionTitle } from "./section-title";

interface FeaturedCoursesSectionProps {
  courses: Course[];
}

export function FeaturedCoursesSection({
  courses,
}: FeaturedCoursesSectionProps) {
  return (
    <section className="relative z-10 mx-auto -mt-1 max-w-5xl bg-white px-5 py-10 shadow-sm">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-bold text-gray-900">
          Our feature courses
        </h2>

        <p className="max-w-xs text-xs leading-5 text-gray-400">
          Worldwide student and skill courses available.
          Find your next course of interest.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {courses.slice(0, 4).map((course) => (
          <article
            key={course.id}
            className="flex min-w-0 gap-3 border border-gray-100 p-2 transition hover:shadow-md"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-28 w-28 shrink-0 object-cover"
            />

            <div className="min-w-0 flex-1 py-1">
              <span className="text-[9px] font-bold text-green-600">
                {course.tag}
              </span>

              <h3 className="mt-1 line-clamp-2 text-xs font-semibold leading-5 text-gray-800">
                {course.title}
              </h3>

              <p className="mt-2 text-[10px] text-gray-400">
                {course.instructor}
              </p>

              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-amber-500">
                  <Star className="h-3 w-3 fill-current" />
                  {course.rating.toFixed(1)}
                </span>

                <span className="font-bold text-gray-800">
                  ${course.price}.00
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
