"use client";

import { useMemo, useState } from "react";

import CourseFilterSidebar from "./course-filter-sidebar";
import CourseGrid from "@/components/common/course-grid";
import CourseEmptyState from "@/components/common/course-empty-state";
import type {
    CourseListingFilters,
} from "../types/course-listing.types";
import { DEFAULT_COURSE_FILTERS } from "./course-listing.constants";
import { filterListingCourses } from "../utils/course-listing.utils";
import {
    coursesData,
    type CourseCategory,
} from "@/app/[locale]/(website)/course-categories/_components/courses-data";
import CourseSearchMeta from "@/components/common/course-search-meta";
import {
    filterCourses,
    type CourseSortOption,
} from "@/app/[locale]/(website)/course-categories/_components/course-catalog.utils";
import CourseCatalogToolbar from "@/app/[locale]/(website)/course-categories/_components/course-catalog-toolbar";
const SUGGESTIONS = [
    "Frontend",
    "user experience",
    "web design",
    "backend",
    "app",
];

export default function CourseListingCatalog() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState<CourseCategory | "ALL">("ALL");
    const [sort, setSort] = useState<CourseSortOption>("trending");
    const [filters, setFilters] =
        useState<CourseListingFilters>(DEFAULT_COURSE_FILTERS);

    const [isFilterOpen, setIsFilterOpen] = useState(true);

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

    const clearAllFilters = () => {
        setSearch("");
        setCategory("ALL");
        setSort("trending");
        setFilters(DEFAULT_COURSE_FILTERS);
    };

    return (
        <section className="flex flex-col gap-6">
            <CourseCatalogToolbar
                search={search}
                onSearchChange={setSearch}
                category={category}
                onCategoryChange={setCategory}
                sort={sort}
                onSortChange={setSort}
                showCategoryFilter={false}
                filterCount={activeFilterCount}
                isFilterOpen={isFilterOpen}
                onFilterToggle={() => setIsFilterOpen((prev) => !prev)}
            />
            <CourseSearchMeta
                suggestions={SUGGESTIONS}
                resultCount={filteredCourses.length}
                search={search}
                onSuggestionClick={setSearch}
            />
            <div className="flex items-start gap-6">
                {isFilterOpen && (
                    <div className="hidden w-64 shrink-0 lg:block">
                        <CourseFilterSidebar
                            filters={filters}
                            onFiltersChange={setFilters}
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