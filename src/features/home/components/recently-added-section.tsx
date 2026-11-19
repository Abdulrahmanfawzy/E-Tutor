
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  BarChart3,
  Check,
  Clock3,
  Heart,
  ShoppingCart,
  Star,
  Users,
} from "lucide-react";

import { courses } from "../data/home.mock";
import type { Course } from "../types/home.types";
import { CourseCard } from "./course-card";
import { SectionTitle } from "./section-title";

export function RecentlyAddedSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [hoveredCourse, setHoveredCourse] = useState<Course | null>(null);

  const [popupPosition, setPopupPosition] = useState({
    left: 0,
    top: 0,
  });

  const learningPoints = [
    "Learn to use the course skills professionally.",
    "Build practical projects from scratch.",
    "Practice with real-world examples and exercises.",
  ];

  const showPopup = (course: Course, element: HTMLElement) => {
    setHoveredCourse(course);

    const cardRect = element.getBoundingClientRect();
    const containerRect =
      containerRef.current?.getBoundingClientRect();

    if (!containerRect) return;

    const popupWidth = 340;
    const gap = 12;

    const rightPosition =
      cardRect.right - containerRect.left + gap;

    const leftPosition =
      cardRect.left - containerRect.left - popupWidth - gap;

    const canPlaceRight =
      rightPosition + popupWidth <= containerRect.width;

    setPopupPosition({
      left: canPlaceRight
        ? rightPosition
        : Math.max(0, leftPosition),
      top: cardRect.top - containerRect.top,
    });
  };

  return (
    <section className="bg-white px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Recently added courses" />

        <div
          ref={containerRef}
          className="relative"
          onMouseLeave={() => setHoveredCourse(null)}
        >
          {/* Recently Added Courses */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.slice(0, 4).map((course) => (
              <div
                key={course.id}
                onMouseEnter={(event) =>
                  showPopup(course, event.currentTarget)
                }
                onFocus={(event) =>
                  showPopup(course, event.currentTarget)
                }
                tabIndex={0}
                className="cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FF6636]"
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          {/* Course Details Popup */}
          {hoveredCourse && (
            <div
              className="absolute z-30 hidden w-[340px] border border-gray-200 bg-white shadow-xl lg:block"
              style={{
                left: popupPosition.left,
                top: popupPosition.top,
              }}
            >
              {/* Course Header */}
              <div className="p-5">
                <span className="inline-block bg-[#564FFD]/10 px-2 py-1 text-[10px] font-semibold text-[#564FFD]">
                  {hoveredCourse.tag}
                </span>

                <h3 className="mt-3 text-base font-semibold leading-6 text-gray-900">
                  {hoveredCourse.title}
                </h3>

                {/* Instructor and Rating */}
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="relative h-9 w-9 overflow-hidden rounded-full">
                      <Image
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
                        alt={hoveredCourse.instructor}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] text-gray-400">
                        Course by
                      </p>

                      <p className="text-xs font-medium text-gray-800">
                        {hoveredCourse.instructor}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />

                    <span className="font-semibold text-gray-800">
                      {hoveredCourse.rating.toFixed(1)}
                    </span>

                    <span className="text-gray-400">(357,914)</span>
                  </div>
                </div>

                {/* Course Information */}
                <div className="mt-4 grid grid-cols-3 gap-2 border-y border-gray-100 py-3 text-[10px] text-gray-500">
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-[#564FFD]" />
                    Students
                  </span>

                  <span className="flex items-center gap-1">
                    <BarChart3 className="h-3.5 w-3.5 text-red-500" />
                    Beginner
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock3 className="h-3.5 w-3.5 text-green-500" />
                    6 hours
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl font-semibold text-gray-900">
                    $14.00
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    $26.00
                  </span>

                  <span className="bg-[#FFF0EB] px-2 py-2 text-xs font-semibold text-[#FF6636]">
                    56% OFF
                  </span>

                  <button
                    aria-label="Add to wishlist"
                    className="ml-auto bg-[#FFF0EB] p-3 text-[#FF6636] transition hover:bg-[#FFE2D9]"
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="border-t border-gray-100 px-5 py-4">
                <h4 className="text-xs font-bold text-gray-900">
                  WHAT YOU’LL LEARN
                </h4>

                <ul className="mt-3 space-y-2">
                  {learningPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-[11px] leading-5 text-gray-500"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />

                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="space-y-2 px-5 pb-5">
                <button className="flex w-full items-center justify-center gap-2 bg-[#FF6636] py-3 text-xs font-semibold text-white transition hover:bg-[#e95327]">
                  <ShoppingCart className="h-4 w-4" />
                  Add To Cart
                </button>

                <button className="w-full bg-[#FFF0EB] py-3 text-xs font-semibold text-[#FF6636] transition hover:bg-[#FFE2D9]">
                  Course Detail
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Browse All Courses */}
        <div className="mt-8 text-center">
          <button className="bg-[#FFF0EB] px-6 py-3 text-xs font-semibold text-[#FF6636] transition hover:bg-[#FFE2D9]">
            Browse All Course →
          </button>
        </div>
      </div>
    </section>
  );
}
