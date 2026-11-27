"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import CourseFilterSection from "./course-filter-section";
import CourseFilterCheckbox from "./course-filter-checkbox";
import ReusableRangeSlider from "@/components/common/reusable-range-slider";
import type { CourseFilterFacets } from "../types/course-filter-facets.types";
import type {
    CourseDuration,
    CourseLevel,
    CourseListingFilters,
} from "../types/course-listing.types";
import { DEFAULT_COURSE_FILTERS } from "./course-listing.constants";

interface CourseFilterSidebarProps {
    filters: CourseListingFilters;
    facets?: CourseFilterFacets;
    isLoading: boolean;
    isError: boolean;
    onRetry: () => void;
    onFiltersChange: (filters: CourseListingFilters) => void;
}

const LEVEL_LABELS: Record<string, CourseLevel> = {
    all: "All",
    beginner: "Beginner",
    intermediate: "Intermediate",
    expert: "Expert",
};

const DURATION_LABELS: Record<string, CourseDuration> = {
    "1-7-days": "1-7 Days",
    "1-4-weeks": "1-4 Weeks",
    "1-3-months": "1-3 Months",
    "3-6-months": "3-6 Months",
    "6-12-months": "6-12 Months",
};

export default function CourseFilterSidebar({
    filters,
    facets,
    isLoading,
    isError,
    onRetry,
    onFiltersChange,
}: CourseFilterSidebarProps) {
    const t = useTranslations("courseListing");
    const locale = useLocale();

    const toggleArrayValue = <
        K extends
            | "categories"
            | "subcategories"
            | "tools"
            | "ratings"
            | "levels"
            | "priceTypes"
            | "durations",
    >(
        key: K,
        value: CourseListingFilters[K][number],
        checked: boolean,
    ) => {
        const current = filters[key];
        const updated = checked
            ? [...current, value]
            : current.filter((item) => item !== value);

        onFiltersChange({
            ...filters,
            [key]: updated,
        });
    };

    const getLocalizedLabel = (
        group: "categories" | "subcategories" | "toolOptions",
        key: string,
        fallback: string,
    ) => {
        const translationKey = `filters.${group}.${key}`;
        return t.has(translationKey) ? t(translationKey) : fallback;
    };

    const panelClassName =
        "w-full rounded-sm border border-gray-100 bg-white px-4 sm:px-5 lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto";

    if (isLoading) {
        return (
            <aside className={panelClassName} aria-busy="true">
                <span className="sr-only">{t("filtersLoading")}</span>
                {Array.from({ length: 5 }, (_, index) => (
                    <div
                        key={index}
                        className="space-y-3 border-b border-gray-100 py-5"
                    >
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                ))}
            </aside>
        );
    }

    if (isError || !facets) {
        return (
            <aside className={panelClassName}>
                <div className="py-6 text-center">
                    <p role="alert" className="text-sm text-gray-500">
                        {t("facetLoadError")}
                    </p>
                    <Button
                        type="button"
                        variant="link"
                        onClick={onRetry}
                        className="mt-2 text-[#FF6636]"
                    >
                        {t("retry")}
                    </Button>
                </div>
            </aside>
        );
    }

    const priceMinimum = Math.min(facets.price.min, facets.price.max);
    const priceMaximum = Math.max(facets.price.min, facets.price.max);
    const minPrice =
        filters.minPrice === DEFAULT_COURSE_FILTERS.minPrice
            ? priceMinimum
            : Math.max(
                  priceMinimum,
                  Math.min(filters.minPrice, priceMaximum),
              );
    const maxPrice =
        filters.maxPrice === DEFAULT_COURSE_FILTERS.maxPrice
            ? priceMaximum
            : Math.max(
                  priceMinimum,
                  Math.min(filters.maxPrice, priceMaximum),
              );
    const priceValue: [number, number] = [
        Math.min(minPrice, maxPrice),
        Math.max(minPrice, maxPrice),
    ];
    const hasPriceRange = priceMaximum > priceMinimum;

    return (
        <aside className={panelClassName}>
            <CourseFilterSection title={t("filters.category")}>
                <div className="space-y-3">
                    {facets.categories.map((category) => {
                        const isExpanded =
                            filters.categories.includes(category.slug) ||
                            category.children.some((subcategory) =>
                                filters.subcategories.includes(subcategory.slug),
                            );

                        return (
                            <div key={category.id}>
                                <CourseFilterCheckbox
                                    label={getLocalizedLabel(
                                        "categories",
                                        category.slug,
                                        category.name,
                                    )}
                                    count={category.courses_count}
                                    checked={filters.categories.includes(
                                        category.slug,
                                    )}
                                    onChange={(checked) =>
                                        toggleArrayValue(
                                            "categories",
                                            category.slug,
                                            checked,
                                        )
                                    }
                                />
                                {isExpanded &&
                                    category.children.length > 0 && (
                                        <div className="ml-5 mt-2 border-l border-gray-100 pl-3">
                                            {category.children.map(
                                                (subcategory) => (
                                                    <CourseFilterCheckbox
                                                        key={subcategory.id}
                                                        label={getLocalizedLabel(
                                                            "subcategories",
                                                            subcategory.slug,
                                                            subcategory.name,
                                                        )}
                                                        count={
                                                            subcategory.courses_count
                                                        }
                                                        checked={filters.subcategories.includes(
                                                            subcategory.slug,
                                                        )}
                                                        onChange={(checked) =>
                                                            toggleArrayValue(
                                                                "subcategories",
                                                                subcategory.slug,
                                                                checked,
                                                            )
                                                        }
                                                    />
                                                ),
                                            )}
                                        </div>
                                    )}
                            </div>
                        );
                    })}
                </div>
            </CourseFilterSection>

            <CourseFilterSection title={t("filters.tools")}>
                {facets.tools.map((tool) => (
                    <CourseFilterCheckbox
                        key={tool.id}
                        label={getLocalizedLabel(
                            "toolOptions",
                            tool.slug,
                            tool.name,
                        )}
                        count={tool.courses_count}
                        checked={filters.tools.includes(tool.slug)}
                        onChange={(checked) =>
                            toggleArrayValue("tools", tool.slug, checked)
                        }
                    />
                ))}
            </CourseFilterSection>

            <CourseFilterSection title={t("filters.rating")}>
                {facets.ratings.map(({ rating, courses_count }) => (
                    <CourseFilterCheckbox
                        key={rating}
                        label={
                            t.has(`filters.ratingOptions.${rating}`)
                                ? t(`filters.ratingOptions.${rating}`)
                                : `${rating} Star${rating === 1 ? "" : "s"} & up`
                        }
                        count={courses_count}
                        checked={filters.ratings.includes(rating)}
                        onChange={(checked) =>
                            toggleArrayValue("ratings", rating, checked)
                        }
                    />
                ))}
            </CourseFilterSection>

            <CourseFilterSection title={t("filters.courseLevel")}>
                {facets.levels.map(({ value, courses_count }) => {
                    const level = LEVEL_LABELS[value];

                    if (!level) {
                        return null;
                    }

                    return (
                        <CourseFilterCheckbox
                            key={value}
                            label={
                                t.has(`filters.levels.${level}`)
                                    ? t(`filters.levels.${level}`)
                                    : level
                            }
                            count={courses_count}
                            checked={filters.levels.includes(level)}
                            onChange={(checked) =>
                                toggleArrayValue("levels", level, checked)
                            }
                        />
                    );
                })}
            </CourseFilterSection>

            <CourseFilterSection title={t("filters.price")}>
                <div className="space-y-2">
                    {hasPriceRange && (
                        <ReusableRangeSlider
                            min={priceMinimum}
                            max={priceMaximum}
                            step={1}
                            value={priceValue}
                            onChange={([nextMin, nextMax]) =>
                                onFiltersChange({
                                    ...filters,
                                    minPrice: nextMin,
                                    maxPrice: nextMax,
                                })
                            }
                            minLabel={t("filters.minimumPrice")}
                            maxLabel={t("filters.maximumPrice")}
                            direction={locale === "ar" ? "rtl" : "ltr"}
                        />
                    )}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>
                            {t("filters.minimumPrice")}:{" "}
                            <span className="font-medium text-gray-900">
                                ${priceValue[0].toLocaleString()}
                            </span>
                        </span>
                        <span>
                            {t("filters.maximumPrice")}:{" "}
                            <span className="font-medium text-gray-900">
                                ${priceValue[1].toLocaleString()}
                            </span>
                        </span>
                    </div>
                    <CourseFilterCheckbox
                        label={t("filters.paid")}
                        count={facets.price.paid_count}
                        checked={filters.priceTypes.includes("paid")}
                        onChange={(checked) =>
                            toggleArrayValue("priceTypes", "paid", checked)
                        }
                    />
                    <CourseFilterCheckbox
                        label={t("filters.free")}
                        count={facets.price.free_count}
                        checked={filters.priceTypes.includes("free")}
                        onChange={(checked) =>
                            toggleArrayValue("priceTypes", "free", checked)
                        }
                    />
                </div>
            </CourseFilterSection>

            <CourseFilterSection title={t("filters.duration")}>
                {facets.durations.map(({ value, courses_count }) => {
                    const duration = DURATION_LABELS[value];

                    if (!duration) {
                        return null;
                    }

                    return (
                        <CourseFilterCheckbox
                            key={value}
                            label={
                                t.has(`filters.durations.${duration}`)
                                    ? t(`filters.durations.${duration}`)
                                    : duration
                            }
                            count={courses_count}
                            checked={filters.durations.includes(duration)}
                            onChange={(checked) =>
                                toggleArrayValue("durations", duration, checked)
                            }
                        />
                    );
                })}
            </CourseFilterSection>
        </aside>
    );
}
