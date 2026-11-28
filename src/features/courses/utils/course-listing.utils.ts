import type {
    CourseLevel,
    CourseListingFilters,
} from "../types/course-listing.types";
import type { CourseFilterFacets } from "../types/course-filter-facets.types";
import {
    COURSE_CATEGORIES_FILTER,
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
    searchParams: SearchParamsReader,
    facets?: CourseFilterFacets
): CourseListingFilters {
    const categories =
        facets?.categories.map((category) => category.slug) ??
        COURSE_CATEGORIES_FILTER.map((category) => category.value);
    const subcategories =
        facets?.categories.flatMap((category) =>
            category.children.map((subcategory) => subcategory.slug)
        ) ??
        COURSE_CATEGORIES_FILTER.flatMap((category) =>
            category.subcategories.map((subcategory) => subcategory.value)
        );
    const tools =
        facets?.tools.map((tool) => tool.slug) ??
        COURSE_TOOLS.map((tool) => tool.value);
    const ratings =
        facets?.ratings.map(({ rating }) => rating) ??
        COURSE_RATINGS.map(({ value }) => value);
    const levels =
        facets?.levels.map(({ value }) => value) ??
        ["beginner", "intermediate", "expert"];
    const durations =
        facets?.durations.map(({ value }) => value) ?? [
            "1-7-days",
            "1-4-weeks",
            "1-3-months",
            "3-6-months",
            "6-12-months",
        ];

    const levelLabels: Record<string, CourseLevel> = {
        all: "All",
        beginner: "Beginner",
        intermediate: "Intermediate",
        expert: "Expert",
    } as const;
    const durationLabels: Record<string, CourseListingFilters["durations"][number]> = {
        "1-7-days": "1-7 Days",
        "1-4-weeks": "1-4 Weeks",
        "1-3-months": "1-3 Months",
        "3-6-months": "3-6 Months",
        "6-12-months": "6-12 Months",
    };

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
            categories
        ),
        subcategories: getAllowedValues(
            searchParams,
            "subcategory",
            subcategories
        ),
        tools: getAllowedValues(
            searchParams,
            "tools",
            tools
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
                            ratings.includes(rating)
                    )
            )
        ),
        levels: getAllowedValues(
            searchParams,
            "level",
            levels
        )
            .map((level) => levelLabels[level])
            .filter((level): level is CourseLevel => level !== undefined),
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
            durations
        )
            .map((duration) => durationLabels[duration])
            .filter(
                (duration): duration is CourseListingFilters["durations"][number] =>
                    duration !== undefined
            ),
    };
}