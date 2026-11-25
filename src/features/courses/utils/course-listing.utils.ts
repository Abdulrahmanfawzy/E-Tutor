import type { CourseListingFilters } from "../types/course-listing.types";
import {
    COURSE_CATEGORIES_FILTER,
    COURSE_DURATION_OPTIONS,
    COURSE_LEVEL_OPTIONS,
    COURSE_RATINGS,
    COURSE_TOOLS,
    DEFAULT_COURSE_FILTERS,
} from "../components/course-listing.constants";

type SearchParamsReader = Pick<URLSearchParams, "get" | "getAll">;

function getAllowedValues<T extends string>(
    searchParams: SearchParamsReader,
    key: string,
    allowedValues: readonly T[]
): T[] {
    const allowed = new Set<string>(allowedValues);

    // Support both comma-separated and repeated query parameters.
    const values = searchParams
        .getAll(key)
        .flatMap((value) => value.split(","))
        .map((value) => value.trim());

    return Array.from(new Set(values)).filter(
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

    const allowedRatings = COURSE_RATINGS.map(({ value }) => value);

    const minPrice = getPriceParam(
        searchParams,
        "price_min",
        DEFAULT_COURSE_FILTERS.minPrice
    );

    const maxPrice = getPriceParam(
        searchParams,
        "price_max",
        DEFAULT_COURSE_FILTERS.maxPrice
    );

    const selectedPriceType = searchParams.get("price_type");

    return {
        categories: getAllowedValues(
            searchParams,
            "category",
            COURSE_CATEGORIES_FILTER.map(({ value }) => value)
        ),
        subcategories: getAllowedValues(
            searchParams,
            "subcategory",
            allowedSubcategories
        ),
        tools: getAllowedValues(
            searchParams,
            "tools",
            COURSE_TOOLS.map(({ value }) => value)
        ),
        ratings: Array.from(
            new Set(
                searchParams
                    .getAll("rating")
                    .flatMap((value) => value.split(","))
                    .map(Number)
                    .filter(
                        (rating) =>
                            Number.isFinite(rating) &&
                            allowedRatings.includes(rating as 1 | 2 | 3 | 4 | 5)
                    )
            )
        ),
        levels: getAllowedValues(
            searchParams,
            "level",
            ["beginner", "intermediate", "expert"]
        ).map((level) => {
            const labels = {
                beginner: "Beginner",
                intermediate: "Intermediate",
                expert: "Expert",
            } as const;

            return labels[level];
        }),
        minPrice:
            minPrice <= maxPrice
                ? minPrice
                : DEFAULT_COURSE_FILTERS.minPrice,
        maxPrice:
            minPrice <= maxPrice
                ? maxPrice
                : DEFAULT_COURSE_FILTERS.maxPrice,
        priceTypes:
            selectedPriceType === "paid" || selectedPriceType === "free"
                ? [selectedPriceType]
                : selectedPriceType === "all"
                  ? ["paid", "free"]
                  : [],
        durations: getAllowedValues(
            searchParams,
            "duration",
            [
                "1-7-days",
                "1-4-weeks",
                "1-3-months",
                "3-6-months",
                "6-12-months",
            ]
        ).map((duration) => {
            const labels = {
                "1-7-days": "1-7 Days",
                "1-4-weeks": "1-4 Weeks",
                "1-3-months": "1-3 Months",
                "3-6-months": "3-6 Months",
                "6-12-months": "6-12 Months",
            } as const;

            return labels[duration];
        }),
    };
}