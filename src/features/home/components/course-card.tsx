
import { Star, Users } from "lucide-react";
import type { Course } from "../types/home.types";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group overflow-hidden border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <div className="h-36 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[9px] font-bold uppercase text-[#564FFD]">
            {course.tag}
          </span>

          <span className="text-sm font-bold text-[#FF6636]">
            ${course.price}
          </span>
        </div>

        <h3 className="mt-2 line-clamp-2 min-h-10 text-xs font-semibold leading-5 text-gray-800">
          {course.title}
        </h3>

        <p className="mt-1 text-[10px] text-gray-400">
          {course.instructor}
        </p>

        <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-2 text-[10px] text-gray-500">
          <span className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            {course.rating.toFixed(1)}
          </span>

          <span className="flex items-center gap-1">
            <Users className="h-3 w-3 text-[#564FFD]" />
            {course.students}
          </span>
        </div>
      </div>
    </article>
  );
}
