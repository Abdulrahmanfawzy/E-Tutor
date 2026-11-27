export const COURSE_SORT_OPTIONS = [
    { label: "Trending", value: "trending" },
    { label: "Most Popular", value: "popular" },
    { label: "Highest Rated", value: "rating" },
    { label: "Newest", value: "newest" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
] as const;

export type CourseSortOption =
    (typeof COURSE_SORT_OPTIONS)[number]["value"];