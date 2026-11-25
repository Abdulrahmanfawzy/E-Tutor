import type { CourseCategory } from "../types/instructor-types";

interface CategoryStyle {
  label: string;
  className: string;
}

// Open for extension: add a new category here without touching any component.
export const COURSE_CATEGORY_STYLES: Record<CourseCategory, CategoryStyle> = {
  development: { label: "DEVELOPMENTS", className: "bg-violet-100 text-violet-700" },
  business: { label: "BUSINESS", className: "bg-emerald-100 text-emerald-700" },
  productivity: { label: "PRODUCTIVITY", className: "bg-orange-100 text-orange-700" },
};