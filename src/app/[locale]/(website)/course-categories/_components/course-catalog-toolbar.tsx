"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { COURSE_CATEGORIES, type CourseCategory } from "./courses-data";
import {
  COURSE_SORT_OPTIONS,
  type CourseSortOption,
} from "./course-catalog.utils";
import CourseSearchInput from "@/components/common/course-search-input";
import CourseSortSelect from "@/components/common/course-sort-select";

interface CourseCatalogToolbarProps {
  search: string;
  showCategoryFilter?: boolean;
  onSearchChange: (value: string) => void;
  category: CourseCategory | "ALL";
  onCategoryChange: (value: CourseCategory | "ALL") => void;
  sort: CourseSortOption;
  onSortChange: (value: CourseSortOption) => void;
  isFilterOpen?: boolean;
  onFilterToggle?: () => void;
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
  showCategoryFilter = true,
  isFilterOpen,
  onFilterToggle,
}: CourseCatalogToolbarProps) {
  const [internalShowFilters, setInternalShowFilters] = useState(false);

  const showFilters = isFilterOpen ?? internalShowFilters;

  const handleFilterToggle = () => {
    if (onFilterToggle) {
      onFilterToggle();
    } else {
      setInternalShowFilters((prev) => !prev);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            variant="outline"
            onClick={handleFilterToggle}
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
          <CourseSearchInput value={search} onChange={onSearchChange} />
        </div>

        <CourseSortSelect
          value={sort}
          options={COURSE_SORT_OPTIONS}
          onChange={onSortChange}
        />
      </div>

      {showCategoryFilter && showFilters && (
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