
import Image from "next/image";
import { Star, Users } from "lucide-react";
import type { Course } from "../types/home.types";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
if (!course) {
    console.error("CourseCard received undefined course");
    return null;
  }

  return (
    <article className="group overflow-hidden border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex border border-[#564FFD]/20 bg-[#564FFD]/5 px-2 py-1 text-[9px] font-bold uppercase text-[#564FFD]">
            {course.tag}
          </span>

          <span className="text-sm font-bold text-[#FF6636]">
            ${course.price}
          </span>
        </div>

        <h3 className="mt-3 line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-gray-800">
          {course.title}
        </h3>

        <p className="mt-2 text-xs text-gray-400">
          {course.instructor}
        </p>

        <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 text-[11px] text-gray-500">
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {course.rating.toFixed(1)}
          </span>

          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5 text-[#564FFD]" />
            {course.students}
          </span>
        </div>
      </div>
    </article>
  );
}
