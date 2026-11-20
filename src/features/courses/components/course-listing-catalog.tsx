"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import CourseFilterSidebar from "./course-filter-sidebar";
import CourseGrid from "@/components/common/course-grid";
import CourseEmptyState from "@/components/common/course-empty-state";
import type { CourseListingFilters } from "../types/course-listing.types";
import { DEFAULT_COURSE_FILTERS } from "./course-listing.constants";
import {
    COURSE_CATEGORIES,
    coursesData,
    type CourseCategory,
} from "@/app/[locale]/(website)/course-categories/_components/courses-data";
import CourseSearchMeta from "@/components/common/course-search-meta";
import {
    COURSE_SORT_OPTIONS,
    filterCourses,
    type CourseSortOption,
} from "@/app/[locale]/(website)/course-categories/_components/course-catalog.utils";
import CourseCatalogToolbar from "@/app/[locale]/(website)/course-categories/_components/course-catalog-toolbar";
import {
    filterListingCourses,
    parseCourseListingFilters,
} from "../utils/course-listing.utils";

const SUGGESTIONS = [
    "Frontend",
    "user experience",
    "web design",
    "backend",
    "app",
];

export default function CourseListingCatalog() {
    const searchParams = useSearchParams();
    const [isFilterOpen, setIsFilterOpen] = useState(true);

    const search = searchParams.get("q") ?? "";
    const categoryValue = searchParams.get("category");
    const category: CourseCategory | "ALL" =
        COURSE_CATEGORIES.find((item) => item === categoryValue) ?? "ALL";
    const sortValue = searchParams.get("sort");
    const sort: CourseSortOption =
        COURSE_SORT_OPTIONS.find((option) => option.value === sortValue)
            ?.value ?? "trending";
    const filters = useMemo(
        () => parseCourseListingFilters(searchParams),
        [searchParams]
    );

    const updateSearchParams = (
        updates: Record<string, string | readonly string[] | null>
    ) => {
        const nextSearchParams = new URLSearchParams(searchParams.toString());

        for (const [key, value] of Object.entries(updates)) {
            nextSearchParams.delete(key);

            if (typeof value === "string" && value !== "") {
                nextSearchParams.set(key, value);
            } else if (value !== null) {
                for (const item of value) {
                    nextSearchParams.append(key, item);
                }
            }
        }

        const query = nextSearchParams.toString();
        const nextUrl = query
            ? `${window.location.pathname}?${query}${window.location.hash}`
            : `${window.location.pathname}${window.location.hash}`;

        window.history.replaceState(null, "", nextUrl);
    };

    const filteredCourses = useMemo(() => {
        return filterListingCourses(
            filterCourses(coursesData, search, category, sort),
            filters
        );
    }, [search, category, sort, filters]);

    const activeFilterCount =
        filters.categories.length +
        filters.subcategories.length +
        filters.tools.length +
        filters.ratings.length +
        filters.levels.length +
        filters.priceTypes.length +
        filters.durations.length +
        (filters.minPrice !== DEFAULT_COURSE_FILTERS.minPrice ||
        filters.maxPrice !== DEFAULT_COURSE_FILTERS.maxPrice
            ? 1
            : 0) +
        (category === "ALL" ? 0 : 1);

    const handleFiltersChange = (nextFilters: CourseListingFilters) => {
        updateSearchParams({
            filterCategory: nextFilters.categories,
            subcategory: nextFilters.subcategories,
            tool: nextFilters.tools,
            rating: nextFilters.ratings.map(String),
            level: nextFilters.levels,
            minPrice:
                nextFilters.minPrice === DEFAULT_COURSE_FILTERS.minPrice
                    ? null
                    : String(nextFilters.minPrice),
            maxPrice:
                nextFilters.maxPrice === DEFAULT_COURSE_FILTERS.maxPrice
                    ? null
                    : String(nextFilters.maxPrice),
            priceType: nextFilters.priceTypes,
            duration: nextFilters.durations,
        });
    };

    const clearAllFilters = () => {
        updateSearchParams({
            q: null,
            category: null,
            sort: null,
            filterCategory: null,
            subcategory: null,
            tool: null,
            rating: null,
            level: null,
            minPrice: null,
            maxPrice: null,
            priceType: null,
            duration: null,
        });
    };

    return (
        <section className="flex flex-col gap-6">
            <CourseCatalogToolbar
                search={search}
                onSearchChange={(value) =>
                    updateSearchParams({ q: value || null })
                }
                category={category}
                onCategoryChange={(value) =>
                    updateSearchParams({
                        category: value === "ALL" ? null : value,
                    })
                }
                sort={sort}
                onSortChange={(value) =>
                    updateSearchParams({
                        sort: value === "trending" ? null : value,
                    })
                }
                showCategoryFilter={false}
                filterCount={activeFilterCount}
                isFilterOpen={isFilterOpen}
                onFilterToggle={() => setIsFilterOpen((prev) => !prev)}
            />
            <CourseSearchMeta
                suggestions={SUGGESTIONS}
                resultCount={filteredCourses.length}
                search={search}
                onSuggestionClick={(value) =>
                    updateSearchParams({ q: value })
                }
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
                    {filteredCourses.length > 0 ? (
                        <CourseGrid
                            courses={filteredCourses}
                            columns={isFilterOpen ? 3 : 4}
                        />
                    ) : (
                        <CourseEmptyState onClear={clearAllFilters} />
                    )}
                </div>
            </div>
        </section>
    );
}