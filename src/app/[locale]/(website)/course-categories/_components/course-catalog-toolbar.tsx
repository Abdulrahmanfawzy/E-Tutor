"use client";

import { useState } from "react";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { COURSE_CATEGORIES, type CourseCategory } from "./courses-data";
import {
  COURSE_SORT_OPTIONS,
  type CourseSortOption,
} from "./course-catalog.utils";

interface CourseCatalogToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: CourseCategory | "ALL";
  onCategoryChange: (value: CourseCategory | "ALL") => void;
  sort: CourseSortOption;
  onSortChange: (value: CourseSortOption) => void;
}

const linkButtonClassName = cn(
  "h-auto rounded-none px-0 py-0 text-xs font-normal",
  "text-[#FF6636]"
);

export default function CourseCatalogToolbar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sort,
  onSortChange,
}: CourseCatalogToolbarProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowFilters((isVisible) => !isVisible)}
            aria-expanded={showFilters}
            className={cn(
              "h-10 gap-2 rounded-none border-gray-200 bg-white px-4 py-2.5 text-sm font-normal text-[#1D2026] transition-colors",
              "hover:border-[#FF6636] hover:bg-white hover:text-[#1D2026]"
            )}
          >
            <SlidersHorizontal size={16} />
            Filter
            <span className="rounded-sm bg-orange-50 px-1.5 text-xs text-[#FF6636]">
              {category === "ALL" ? 0 : 1}
            </span>
          </Button>

          <div className="flex flex-1 items-center gap-2 border border-gray-200 px-3">
            <Search size={17} className="shrink-0 text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(event) => onSearchChange(event.currentTarget.value)}
              placeholder="Search courses..."
              aria-label="Search courses"
              className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />

            {search && (
              <Button
                type="button"
                variant="ghost"
                size="xs"
                onClick={() => onSearchChange("")}
                className={cn(
                  "h-auto rounded-none px-0 py-0 text-xs font-normal text-gray-400 transition-colors",
                  "hover:bg-transparent hover:text-gray-700"
                )}
              >
                Clear
              </Button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <label htmlFor="course-sort" className="text-xs text-gray-500">
            Sort by:
          </label>

          <div className="relative">
            <select
              id="course-sort"
              value={sort}
              onChange={(event) =>
                onSortChange(event.currentTarget.value as CourseSortOption)
              }
              className="h-10 min-w-32 appearance-none border border-gray-200 bg-white px-3 pr-9 text-sm outline-none"
            >
              {COURSE_SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>
      </div>

      {showFilters && (
        <div className="flex flex-wrap items-center gap-3 border border-gray-100 bg-gray-50 p-4">
          <label htmlFor="course-category" className="text-sm font-medium">
            Category:
          </label>

          <select
            id="course-category"
            value={category}
            onChange={(event) =>
              onCategoryChange(
                event.currentTarget.value as CourseCategory | "ALL"
              )
            }
            className="h-9 border border-gray-200 bg-white px-3 text-sm outline-none"
          >
            <option value="ALL">All Categories</option>
            {COURSE_CATEGORIES.map((courseCategory) => (
              <option key={courseCategory} value={courseCategory}>
                {courseCategory === "IT & SOFTWARE"
                  ? "IT & Software"
                  : courseCategory.charAt(0) +
                    courseCategory.slice(1).toLowerCase()}
              </option>
            ))}
          </select>

          <Button
            type="button"
            variant="link"
            size="xs"
            onClick={() => onCategoryChange("ALL")}
            className={linkButtonClassName}
          >
            Clear filters
          </Button>
        </div>
      )}
    </>
  );
}