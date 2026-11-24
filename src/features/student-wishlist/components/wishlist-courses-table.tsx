
"use client";

import Image from "next/image";
import { Heart, Star } from "lucide-react";
import type { WishlistCourse } from "../types/wishlist.types";

interface WishlistCoursesTableProps {
  courses: WishlistCourse[];
  onRemove: (id: number) => void;
}

export function WishlistCoursesTable({
  courses,
  onRemove,
}: WishlistCoursesTableProps) {
  if (courses.length === 0) {
    return (
      <div className="border border-gray-100 px-5 py-12 text-center">
        <Heart className="mx-auto mb-3 text-gray-300" size={30} />
        <p className="text-sm text-gray-500">
          Your wishlist is empty.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-5xl overflow-x-auto border border-gray-100">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <thead>
          <tr className="border-b border-gray-100 text-[10px] font-medium uppercase text-gray-600">
            <th className="px-4 py-4">Course</th>
            <th className="px-4 py-4">Prices</th>
            <th className="px-4 py-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr
              key={course.id}
              className="border-b border-gray-100 last:border-b-0"
            >
              <td className="px-4 py-4">
                <div className="flex items-start gap-3">
                  <div className="relative h-[84px] w-[112px] shrink-0 overflow-hidden bg-gray-100">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="mb-2 flex items-center gap-1.5 text-[10px]">
                      <Star
                        size={13}
                        fill="currentColor"
                        className="text-orange-400"
                      />
                      <span className="font-medium text-gray-900">
                        {course.rating.toFixed(1)}
                      </span>
                      <span className="text-gray-400">
                        ({course.reviewsCount.toLocaleString()} Review)
                      </span>
                    </div>

                    <h3 className="max-w-[250px] text-xs font-medium leading-5 text-gray-900">
                      {course.title}
                    </h3>

                    <p className="mt-3 text-[10px] text-gray-400">
                      Course by:
                      <span className="ml-2 text-gray-600">
                        {course.instructors.join(" · ")}
                      </span>
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-4 py-4">
                <div className="flex items-center gap-1.5 whitespace-nowrap text-xs">
                  <span className="font-medium text-orange-500">
                    ${course.price.toFixed(2)}
                  </span>

                  {course.originalPrice && (
                    <span className="text-gray-400 line-through">
                      ${course.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </td>

              <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="bg-gray-50 px-5 py-3 text-[10px] font-semibold text-gray-900 transition hover:bg-gray-100"
                  >
                    Buy Now
                  </button>

                  <button
                    type="button"
                    className="whitespace-nowrap bg-orange-400 px-4 py-3 text-[10px] font-semibold text-white transition hover:bg-orange-500"
                  >
                    Add To Cart
                  </button>

                  <button
                    type="button"
                    onClick={() => onRemove(course.id)}
                    aria-label={`Remove ${course.title} from wishlist`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center bg-orange-50 text-orange-400 transition hover:bg-orange-100"
                  >
                    <Heart size={16} fill="currentColor" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
