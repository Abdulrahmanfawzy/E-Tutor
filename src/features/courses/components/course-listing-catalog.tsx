"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";

import CourseEmptyState from "@/components/common/course-empty-state";
import CourseGrid from "@/components/common/course-grid";
import CourseSearchInput from "@/components/common/course-search-input";
import CourseSearchMeta from "@/components/common/course-search-meta";
import CustomPagination from "@/components/common/custom-pagination";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import useGetCourses from "../hooks/use-get-courses";
import { COURSE_SORT_OPTIONS } from "../constants/course-sort-options";
import type { CourseListingFilters } from "../types/course-listing.types";
import type { CourseApiItem, GetCoursesParams } from "../types/courses.types";
import { DEFAULT_COURSE_FILTERS } from "./course-listing.constants";
import CourseFilterSidebar from "./course-filter-sidebar";
import { parseCourseListingFilters } from "../utils/course-listing.utils";

const SUGGESTIONS = [
    "Frontend",
    "user experience",
    "web design",
    "backend",
    "app",
];

const API_LEVELS = {
    Beginner: "beginner",
    Intermediate: "intermediate",
    Expert: "expert",
} as const;

const API_DURATIONS = {
    "6-12 Months": "6-12-months",
    "3-6 Months": "3-6-months",
    "1-3 Months": "1-3-months",
    "1-4 Weeks": "1-4-weeks",
    "1-7 Days": "1-7-days",
} as const;

const PAGE_SIZE = 20;

function getCourseParams(searchParamsString: string): GetCoursesParams {
    const searchParams = new URLSearchParams(searchParamsString);
    const filters = parseCourseListingFilters(searchParams);
    const requestedSort = searchParams.get("sort");
    const sort =
        COURSE_SORT_OPTIONS.find((option) => option.value === requestedSort)
            ?.value ?? "trending";
    const requestedPage = Number(searchParams.get("page") ?? 1);
    const priceTypes = filters.priceTypes;

    return {
        q: searchParams.get("q")?.trim().slice(0, 100) || undefined,
        category: filters.categories.length ? filters.categories : undefined,
        subcategory: filters.subcategories.length
            ? filters.subcategories
            : undefined,
        tools: filters.tools.length ? filters.tools : undefined,
        rating: filters.ratings.length
            ? Math.max(...filters.ratings)
            : undefined,
        level: filters.levels.length
            ? filters.levels.map((level) => API_LEVELS[level])
            : undefined,
        price_min:
            filters.minPrice !== DEFAULT_COURSE_FILTERS.minPrice
                ? filters.minPrice
                : undefined,
        price_max:
            filters.maxPrice !== DEFAULT_COURSE_FILTERS.maxPrice
                ? filters.maxPrice
                : undefined,
        price_type:
            priceTypes.length === 2 ? "all" : priceTypes[0],
        duration: filters.durations.length
            ? filters.durations.map((duration) => API_DURATIONS[duration])
            : undefined,
        sort,
        page:
            Number.isInteger(requestedPage) && requestedPage > 0
                ? requestedPage
                : 1,
        per_page: PAGE_SIZE,
    };
}

function mapCourse(course: CourseApiItem) {
    return {
        id: course.id,
        slug: course.slug,
        title: course.title,
        image: course.thumbnail_url,
        category: course.category.name,
        categoryColor: course.category.color,
        price: course.current_price,
        rating: course.rating,
        students: course.students_count.toLocaleString(),
    };
}

function CourseResultsSkeleton({ columns }: { columns: 3 | 4 }) {
    return (
        <div
            className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${
                columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
            }`}
            aria-busy="true"
        >
            {Array.from({ length: 6 }, (_, index) => (
                <div
                    key={index}
                    className="overflow-hidden rounded-sm border border-gray-100"
                >
                    <Skeleton className="aspect-16/10 w-full rounded-none" />
                    <div className="space-y-4 p-4">
                        <div className="flex justify-between">
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-5 w-12" />
                        </div>
                        <Skeleton className="h-10 w-full" />
                        <div className="flex justify-between">
                            <Skeleton className="h-4 w-12" />
                            <Skeleton className="h-4 w-20" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export function CourseListingSkeleton() {
    return (
        <section className="flex flex-col gap-6" aria-busy="true">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <Skeleton className="h-11 flex-1 rounded-sm" />
                <Skeleton className="h-10 w-48 rounded-sm" />
            </div>
            <div className="flex flex-col gap-3 border-b border-gray-100 pb-4 md:flex-row md:items-center md:justify-between">
                <Skeleton className="h-5 w-72" />
                <Skeleton className="h-5 w-36" />
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                <Skeleton className="hidden h-[620px] w-64 shrink-0 rounded-sm lg:block" />
                <CourseResultsSkeleton columns={3} />
            </div>
        </section>
    );
}

export default function CourseListingCatalog() {
    const searchParams = useSearchParams();
    const searchParamsString = searchParams.toString();
    const pathname = usePathname();
    const router = useRouter();
    const [isFilterOpen, setIsFilterOpen] = useState(true);
    const search = new URLSearchParams(searchParamsString).get("q") ?? "";
    const [searchInput, setSearchInput] = useState(search);
    const filters = useMemo(
        () => parseCourseListingFilters(new URLSearchParams(searchParamsString)),
        [searchParamsString],
    );
    const params = useMemo(
        () => getCourseParams(searchParamsString),
        [searchParamsString],
    );
    const { data, isPending, isError } = useGetCourses(params);
    const courses = data?.success ? data.data.items.map(mapCourse) : [];
    const totalResults = data?.success ? data.data.meta.total : 0;
    const currentPage = data?.success ? data.data.meta.current_page : 1;
    const totalPages = data?.success ? data.data.meta.last_page : 1;
    const activeFilterCount = data?.success
        ? data.data.active_filters_count
        : 0;

    const updateSearchParams = useCallback(
        (updates: Record<string, string | readonly string[] | null>) => {
            const nextSearchParams = new URLSearchParams(searchParamsString);

            for (const [key, value] of Object.entries(updates)) {
                nextSearchParams.delete(key);

                if (typeof value === "string" && value !== "") {
                    nextSearchParams.set(key, value);
                } else if (value !== null && value.length > 0) {
                    nextSearchParams.set(key, value.join(","));
                }
            }

            const query = nextSearchParams.toString();
            const nextUrl = query ? `${pathname}?${query}` : pathname;
            const currentUrl = searchParamsString
                ? `${pathname}?${searchParamsString}`
                : pathname;

            if (nextUrl !== currentUrl) {
                router.push(nextUrl, { scroll: false });
            }
        },
        [pathname, router, searchParamsString],
    );

    useEffect(() => {
        setSearchInput(search);
    }, [search]);

    useEffect(() => {
        if (searchInput === search) {
            return;
        }

        const timeout = window.setTimeout(() => {
            updateSearchParams({
                q: searchInput.trim().slice(0, 100) || null,
                page: "1",
            });
        }, 350);

        return () => window.clearTimeout(timeout);
    }, [search, searchInput, updateSearchParams]);

    const handleFiltersChange = (nextFilters: CourseListingFilters) => {
        updateSearchParams({
            category: nextFilters.categories,
            subcategory: nextFilters.subcategories,
            tools: nextFilters.tools,
            rating: nextFilters.ratings.length
                ? String(Math.max(...nextFilters.ratings))
                : null,
            level: nextFilters.levels.map((level) => API_LEVELS[level]),
            price_min:
                nextFilters.minPrice === DEFAULT_COURSE_FILTERS.minPrice
                    ? null
                    : String(nextFilters.minPrice),
            price_max:
                nextFilters.maxPrice === DEFAULT_COURSE_FILTERS.maxPrice
                    ? null
                    : String(nextFilters.maxPrice),
            price_type:
                nextFilters.priceTypes.length === 2
                    ? "all"
                    : nextFilters.priceTypes[0] ?? null,
            duration: nextFilters.durations.map(
                (duration) => API_DURATIONS[duration],
            ),
            page: "1",
        });
    };

    const clearAllFilters = () => {
        updateSearchParams({
            q: null,
            category: null,
            subcategory: null,
            tools: null,
            rating: null,
            level: null,
            price_min: null,
            price_max: null,
            price_type: null,
            duration: null,
            sort: null,
            page: "1",
        });
    };

    const handleSortChange = (sort: string) => {
        updateSearchParams({
            sort: COURSE_SORT_OPTIONS.some((option) => option.value === sort)
                ? sort
                : "trending",
            page: "1",
        });
    };

    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <CourseSearchInput
                    value={searchInput}
                    onChange={(value) => setSearchInput(value.slice(0, 100))}
                />
                <div className="flex items-center justify-between gap-3">
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="shrink-0">Sort by</span>
                        <select
                            value={params.sort}
                            onChange={(event) =>
                                handleSortChange(event.currentTarget.value)
                            }
                            className="h-10 min-w-40 rounded-sm border border-gray-200 bg-white px-3 text-sm text-[#1D2026] outline-none focus-visible:border-[#F76C3C]"
                        >
                            {COURSE_SORT_OPTIONS.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </label>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsFilterOpen((previous) => !previous)}
                        aria-expanded={isFilterOpen}
                        className="h-10 rounded-sm border-gray-200"
                    >
                        <SlidersHorizontal aria-hidden="true" />
                        Filters
                        {activeFilterCount > 0 && (
                            <span className="ml-1 rounded-full bg-orange-50 px-2 py-0.5 text-xs text-[#FF6636]">
                                {activeFilterCount}
                            </span>
                        )}
                    </Button>
                </div>
            </div>
            <CourseSearchMeta
                suggestions={SUGGESTIONS}
                resultCount={totalResults}
                search={search}
                onSuggestionClick={(value) => {
                    setSearchInput(value);
                    updateSearchParams({ q: value, page: "1" });
                }}
            />
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                {isFilterOpen && (
                    <div className="w-full shrink-0 lg:w-64">
                        <CourseFilterSidebar
                            filters={filters}
                            onFiltersChange={handleFiltersChange}
                        />
                    </div>
                )}

                <div className="min-w-0 flex-1">
                    {isPending ? (
                        <CourseResultsSkeleton
                            columns={isFilterOpen ? 3 : 4}
                        />
                    ) : isError || !data?.success ? (
                        <p
                            role="alert"
                            className="py-16 text-center text-sm text-gray-500"
                        >
                            Unable to load courses. Please try again.
                        </p>
                    ) : courses.length > 0 ? (
                        <>
                            <CourseGrid
                                courses={courses}
                                columns={isFilterOpen ? 3 : 4}
                            />
                            <CustomPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={(page) =>
                                    updateSearchParams({ page: String(page) })
                                }
                            />
                        </>
                    ) : (
                        <CourseEmptyState onClear={clearAllFilters} />
                    )}
                </div>
            </div>
        </section>
    );
}
