import type {
    CourseListingCourse,
    CourseListingFilters,
} from "@/features/courses/types/course-listing.types";
import {
    COURSE_CATEGORIES_FILTER,
    COURSE_DURATION_OPTIONS,
    COURSE_LEVEL_OPTIONS,
    COURSE_RATINGS,
    COURSE_TOOLS,
    DEFAULT_COURSE_FILTERS,
} from "../components/course-listing.constants";

type SearchParamsReader = Pick<URLSearchParams, "get" | "getAll">;

const COURSE_CATEGORY_FILTER_IDS: Record<
    CourseListingCourse["category"],
    string
> = {
    DESIGN: "design",
    DEVELOPMENTS: "development",
    BUSINESS: "business",
    MARKETING: "marketing",
    "IT & SOFTWARE": "it-software",
};

function getAllowedValues<T extends string>(
    searchParams: SearchParamsReader,
    key: string,
    allowedValues: readonly T[]
): T[] {
    const allowed = new Set<string>(allowedValues);

    return Array.from(new Set(searchParams.getAll(key))).filter(
        (value): value is T => allowed.has(value)
    );
}

function getPriceParam(
    searchParams: SearchParamsReader,
    key: string,
    fallback: number
) {
    const value = searchParams.get(key);

    if (value === null || value.trim() === "") {
        return fallback;
    }

    const price = Number(value);
    return Number.isFinite(price) && price >= 0 ? price : fallback;
}

export function parseCourseListingFilters(
    searchParams: SearchParamsReader
): CourseListingFilters {
    const allowedSubcategories = COURSE_CATEGORIES_FILTER.flatMap((category) =>
        category.subcategories.map((subcategory) => subcategory.value)
    );
    const allowedRatings = new Set(COURSE_RATINGS.map(({ value }) => value));
    const minPrice = getPriceParam(
        searchParams,
        "minPrice",
        DEFAULT_COURSE_FILTERS.minPrice
    );
    const maxPrice = getPriceParam(
        searchParams,
        "maxPrice",
        DEFAULT_COURSE_FILTERS.maxPrice
    );

    return {
        categories: getAllowedValues(
            searchParams,
            "filterCategory",
            COURSE_CATEGORIES_FILTER.map(({ value }) => value)
        ),
        subcategories: getAllowedValues(
            searchParams,
            "subcategory",
            allowedSubcategories
        ),
        tools: getAllowedValues(
            searchParams,
            "tool",
            COURSE_TOOLS.map(({ value }) => value)
        ),
        ratings: Array.from(
            new Set(
                searchParams
                    .getAll("rating")
                    .map(Number)
                    .filter(
                        (rating) =>
                            Number.isFinite(rating) && allowedRatings.has(rating)
                    )
            )
        ),
        levels: getAllowedValues(
            searchParams,
            "level",
            COURSE_LEVEL_OPTIONS
        ),
        minPrice:
            minPrice <= maxPrice
                ? minPrice
                : DEFAULT_COURSE_FILTERS.minPrice,
        maxPrice:
            minPrice <= maxPrice
                ? maxPrice
                : DEFAULT_COURSE_FILTERS.maxPrice,
        priceTypes: getAllowedValues(searchParams, "priceType", [
            "paid",
            "free",
        ]),
        durations: getAllowedValues(
            searchParams,
            "duration",
            COURSE_DURATION_OPTIONS
        ),
    };
}

export function filterListingCourses(
    courses: CourseListingCourse[],
    filters: CourseListingFilters
) {
    return courses.filter((course) => {
        // Category

        const categoryId =
            course.categoryId ?? COURSE_CATEGORY_FILTER_IDS[course.category];
        const matchesCategory =
            filters.categories.length === 0 ||
            filters.categories.includes(categoryId);

        // Subcategory
        const matchesSubcategory =
            filters.subcategories.length === 0 ||
            (course.subcategoryId !== undefined &&
                filters.subcategories.includes(course.subcategoryId));

        // Tools
        const matchesTools =
            filters.tools.length === 0 ||
            filters.tools.some((tool) =>
                course.tools?.includes(tool)
            );

        // Rating: selected thresholds use OR
        const matchesRating =
            filters.ratings.length === 0 ||
            filters.ratings.some(
                (rating) => course.rating >= rating
            );

        // Level
        const matchesLevel =
            filters.levels.length === 0 ||
            (course.level !== undefined &&
                filters.levels.includes(course.level));

        // Price range
        const matchesPriceRange =
            course.price >= filters.minPrice &&
            course.price <= filters.maxPrice;

        // Paid / Free
        const matchesPriceType =
            filters.priceTypes.length === 0 ||
            (filters.priceTypes.includes("free") && course.price === 0) ||
            (filters.priceTypes.includes("paid") && course.price > 0);

        // Duration
        const matchesDuration =
            filters.durations.length === 0 ||
            (course.duration !== undefined &&
                filters.durations.includes(course.duration));

        return (
            matchesCategory &&
            matchesSubcategory &&
            matchesTools &&
            matchesRating &&
            matchesLevel &&
            matchesPriceRange &&
            matchesPriceType &&
            matchesDuration
        );
    });
}