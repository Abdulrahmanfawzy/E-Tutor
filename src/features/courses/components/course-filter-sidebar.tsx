"use client";

import CourseFilterSection from "./course-filter-section";
import CourseFilterCheckbox from "./course-filter-checkbox";
import type { CourseListingFilters } from "../types/course-listing.types";
import { COURSE_CATEGORIES_FILTER, COURSE_DURATION_OPTIONS, COURSE_LEVEL_OPTIONS, COURSE_RATINGS, COURSE_TOOLS } from "./course-listing.constants";

interface CourseFilterSidebarProps {
    filters: CourseListingFilters;
    onFiltersChange: (filters: CourseListingFilters) => void;
}

export default function CourseFilterSidebar({
    filters,
    onFiltersChange,
}: CourseFilterSidebarProps) {
    const toggleArrayValue = <T,>(
        key: keyof CourseListingFilters,
        value: T,
        checked: boolean
    ) => {
        const current = filters[key] as T[];

        const updated = checked
            ? [...current, value]
            : current.filter((item) => item !== value);

        onFiltersChange({
            ...filters,
            [key]: updated,
        });
    };

    return (
        <aside className="w-full border border-gray-100 bg-white px-5">
            <CourseFilterSection title="Category">
                <div className="space-y-3">
                    {COURSE_CATEGORIES_FILTER.map((category) => {
                        const isExpanded = filters.categories.includes(category.value);

                        return (
                            <div key={category.value}>
                                <CourseFilterCheckbox
                                    label={category.label}
                                    checked={isExpanded}
                                    onChange={(checked) =>
                                        toggleArrayValue("categories", category.value, checked)
                                    }
                                />

                                {isExpanded && category.subcategories.length > 0 && (
                                    <div className="ml-5 mt-2 border-l border-gray-100 pl-3">
                                        {category.subcategories.map((subcategory) => (
                                            <CourseFilterCheckbox
                                                key={subcategory.value}
                                                label={subcategory.label}
                                                checked={filters.subcategories.includes(
                                                    subcategory.value
                                                )}
                                                onChange={(checked) =>
                                                    toggleArrayValue(
                                                        "subcategories",
                                                        subcategory.value,
                                                        checked
                                                    )
                                                }
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </CourseFilterSection>

            <CourseFilterSection title="Tools">
                {COURSE_TOOLS.map((tool) => (
                    <CourseFilterCheckbox
                        key={tool.value}
                        label={tool.label}
                        checked={filters.tools.includes(tool.value)}
                        onChange={(checked) =>
                            toggleArrayValue("tools", tool.value, checked)
                        }
                    />
                ))}
            </CourseFilterSection>

            <CourseFilterSection title="Rating">
                {COURSE_RATINGS.map((rating) => (
                    <CourseFilterCheckbox
                        key={rating.value}
                        label={rating.label}
                        count={undefined}
                        checked={filters.ratings.includes(rating.value)}
                        onChange={(checked) =>
                            toggleArrayValue("ratings", rating.value, checked)
                        }
                    />
                ))}
            </CourseFilterSection>

            <CourseFilterSection title="Course Level">
                {COURSE_LEVEL_OPTIONS.map((level) => (
                    <CourseFilterCheckbox
                        key={level}
                        label={level}
                        checked={filters.levels.includes(level)}
                        onChange={(checked) =>
                            toggleArrayValue("levels", level, checked)
                        }
                    />
                ))}
            </CourseFilterSection>

            <CourseFilterSection title="Price">
                <div className="space-y-3">
                    <CourseFilterCheckbox
                        label="Paid"
                        checked={filters.priceTypes.includes("paid")}
                        onChange={(checked) =>
                            toggleArrayValue("priceTypes", "paid", checked)
                        }
                    />

                    <CourseFilterCheckbox
                        label="Free"
                        checked={filters.priceTypes.includes("free")}
                        onChange={(checked) =>
                            toggleArrayValue("priceTypes", "free", checked)
                        }
                    />
                </div>
            </CourseFilterSection>

            <CourseFilterSection title="Duration">
                {COURSE_DURATION_OPTIONS.map((duration) => (
                    <CourseFilterCheckbox
                        key={duration}
                        label={duration}
                        checked={filters.durations.includes(duration)}
                        onChange={(checked) =>
                            toggleArrayValue("durations", duration, checked)
                        }
                    />
                ))}
            </CourseFilterSection>
        </aside>
    );
}