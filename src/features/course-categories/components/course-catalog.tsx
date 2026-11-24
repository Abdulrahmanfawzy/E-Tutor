
"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import CourseCard from "../../../components/common/course-card";
import { coursesData, type CourseCategory } from "../data/courses-data";
import CourseCatalogToolbar from "./course-catalog-toolbar";
import { filterCourses, type CourseSortOption } from "./course-catalog.utils";
import CustomPagination from "@/components/common/custom-pagination";
import CourseSearchMeta from "@/components/common/course-search-meta";
import CourseGrid from "@/components/common/course-grid";
import CourseEmptyState from "@/components/common/course-empty-state";

const SUGGESTIONS = [
    "user interface",
    "user experience",
    "web design",
    "interface",
    "app",
];

export default function CourseCatalog() {
    const [search, setSearch] = useState("UI/UX Design");
    const [category, setCategory] = useState<CourseCategory | "ALL">("ALL");
    const [sort, setSort] = useState<CourseSortOption>("trending");

    const filteredCourses = useMemo(() => {
        return filterCourses(coursesData, search, category, sort);
    }, [search, category, sort]);

    const clearAllFilters = () => {
        setSearch("");
        setCategory("ALL");
        setSort("trending");
    };
    //   for pagination--------------------------------------------------------
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 2;

    const totalPages = Math.ceil(
        filteredCourses.length / ITEMS_PER_PAGE
    );

    const paginatedCourses = filteredCourses.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );
    // ------------------------------------------------------------------------
    return (
        <section className="space-y-5">
            <CourseCatalogToolbar
                search={search}
                onSearchChange={setSearch}
                category={category}
                onCategoryChange={setCategory}
                sort={sort}
                onSortChange={setSort}
            />

            <CourseSearchMeta
                suggestions={SUGGESTIONS}
                resultCount={filteredCourses.length}
                search={search}
                onSuggestionClick={setSearch}
            />
            {paginatedCourses.length > 0 ? (
                <CourseGrid courses={paginatedCourses} columns={4} />
            ) : (
                <CourseEmptyState onClear={clearAllFilters} />
            )}
            <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </section>
    );
}
