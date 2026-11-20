"use client";

import { useMemo, useState } from "react";

import CourseFilterSidebar from "./course-filter-sidebar";
import CourseGrid from "@/components/common/course-grid";
import type {
    CourseListingCourse,
    CourseListingFilters,
} from "../types/course-listing.types";
import { DEFAULT_COURSE_FILTERS } from "./course-listing.constants";
import { filterListingCourses } from "../utils/course-listing.utils";
import { CourseCategory, coursesData } from "@/app/[locale]/(website)/course-categories/_components/courses-data";
import CourseSearchInput from "@/components/common/course-search-input";
import CourseSearchMeta from "@/components/common/course-search-meta";
import { CourseSortOption } from "@/app/[locale]/(website)/course-categories/_components/course-catalog.utils";
import CourseCatalogToolbar from "@/app/[locale]/(website)/course-categories/_components/course-catalog-toolbar";
const SUGGESTIONS = [
    "Frontend",
    "user experience",
    "web design",
    "backend",
    "app",
];

export default function CourseListingCatalog() {
    const [search, setSearch] = useState("UI/UX Design");
    const [category, setCategory] = useState<CourseCategory | "ALL">("ALL");
    const [sort, setSort] = useState<CourseSortOption>("trending");


    const clearAllFilters = () => {
        setSearch("");
        setCategory("ALL");
        setSort("trending");
    };
    const [filters, setFilters] =
        useState<CourseListingFilters>(DEFAULT_COURSE_FILTERS);

    const [isFilterOpen, setIsFilterOpen] = useState(true);

    const filteredCourses = useMemo(() => {
        return filterListingCourses(
            coursesData as CourseListingCourse[],
            filters
        );
    }, [filters]);

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
                    <CourseGrid
                        courses={filteredCourses}
                        columns={isFilterOpen ? 3 : 4}
                    />
                </div>
            </div>
        </section>
    );
}