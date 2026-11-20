
"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import CourseCard from "./course-card";
import { coursesData, type CourseCategory } from "./courses-data";
import CourseCatalogToolbar from "./course-catalog-toolbar";
import { filterCourses, type CourseSortOption } from "./course-catalog.utils";
import CustomPagination from "@/components/common/custom-pagination";

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

            <div className="flex flex-col gap-3 border-b border-gray-100 pb-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                    <span className="text-xs text-gray-500">
                        Suggestions:
                    </span>

                    {SUGGESTIONS.map((item) => (
                        <Button
                            key={item}
                            type="button"
                            variant="link"
                            size="xs"
                            onClick={() => setSearch(item)}
                            className="h-auto rounded-none px-0 py-0 text-xs font-normal text-[#FF6636]"
                        >
                            {item}
                        </Button>
                    ))}
                </div>

                <p className="text-xs text-gray-500">
                    <span className="font-semibold text-[#1D2026]">
                        {filteredCourses.length}
                    </span>{" "}
                    results found
                    {search.trim() && (
                        <>
                            {" "}for "{search}"
                        </>
                    )}
                </p>
            </div>

            {paginatedCourses.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            ) : (
                <div className="py-16 text-center">
                    <p className="text-base font-semibold text-[#1D2026]">
                        No courses found
                    </p>
                    <p className="mt-2 text-sm text-gray-400">
                        Try changing your search or filters.
                    </p>

                    <Button
                        type="button"
                        variant="link"
                        size="xs"
                        onClick={clearAllFilters}
                        className="mt-4 h-auto rounded-none px-0 py-0 text-sm font-medium text-[#FF6636]"
                    >
                        Clear all filters
                    </Button>
                </div>
            )}
            <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </section>
    );
}
