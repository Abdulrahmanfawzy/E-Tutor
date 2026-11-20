import { Course } from "@/app/[locale]/(website)/course-categories/_components/courses-data";


export const COURSE_LEVELS = [
    "Beginner",
    "Intermediate",
    "Expert",
] as const;

export type CourseLevel = (typeof COURSE_LEVELS)[number];

export const COURSE_DURATIONS = [
    "6-12 Months",
    "3-6 Months",
    "1-3 Months",
    "1-4 Weeks",
    "1-7 Days",
] as const;

export type CourseDuration =
    (typeof COURSE_DURATIONS)[number];

export type CoursePriceType = "paid" | "free";

export interface CourseListingCourse extends Course {
    categoryId?: string;
    subcategoryId?: string;
    subcategory?: string;
    tools?: string[];
    level?: CourseLevel;
    duration?: CourseDuration;
}

export interface CourseListingFilters {
    categories: string[];
    subcategories: string[];
    tools: string[];
    ratings: number[];
    levels: CourseLevel[];
    minPrice: number;
    maxPrice: number;
    priceTypes: CoursePriceType[];
    durations: CourseDuration[];
}

export interface FilterOption {
    label: string;
    value: string;
}