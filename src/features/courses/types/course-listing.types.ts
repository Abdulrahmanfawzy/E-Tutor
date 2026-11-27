export type CourseLevel =
    | "All"
    | "Beginner"
    | "Intermediate"
    | "Expert";

export type CourseDuration =
    | "6-12 Months"
    | "3-6 Months"
    | "1-3 Months"
    | "1-4 Weeks"
    | "1-7 Days";

export type CoursePriceType = "paid" | "free";

export interface CourseListingCourse {
    id: number;
    slug: string;
    title: string;
    price: number;
    rating: number;
    category: string;
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