import { CourseListingCourse, CourseListingFilters } from "@/features/courses/types/course-listing.types";


export function filterListingCourses(
    courses: CourseListingCourse[],
    filters: CourseListingFilters
) {
    return courses.filter((course) => {
        // Category

        const matchesCategory =
            filters.categories.length === 0 ||
            (course.categoryId !== undefined &&
                filters.categories.includes(course.categoryId));

        // Subcategory
        const matchesSubcategory =
            filters.subcategories.length === 0 ||
            (course.subcategoryId !== undefined &&
                filters.subcategories.includes(course.subcategoryId));

        // Tools
        const matchesTools =
            filters.tools.length === 0 ||
            filters.tools.some((tool) =>
                course.tools?.includes(tool)
            );

        // Rating: selected thresholds use OR
        const matchesRating =
            filters.ratings.length === 0 ||
            filters.ratings.some(
                (rating) => course.rating >= rating
            );

        // Level
        const matchesLevel =
            filters.levels.length === 0 ||
            (course.level !== undefined &&
                filters.levels.includes(course.level));

        // Price range
        const matchesPriceRange =
            course.price >= filters.minPrice &&
            course.price <= filters.maxPrice;

        // Paid / Free
        const matchesPriceType =
            filters.priceTypes.length === 0 ||
            (filters.priceTypes.includes("free") && course.price === 0) ||
            (filters.priceTypes.includes("paid") && course.price > 0);

        // Duration
        const matchesDuration =
            filters.durations.length === 0 ||
            (course.duration !== undefined &&
                filters.durations.includes(course.duration));

        return (
            matchesCategory &&
            matchesSubcategory &&
            matchesTools &&
            matchesRating &&
            matchesLevel &&
            matchesPriceRange &&
            matchesPriceType &&
            matchesDuration
        );
    });
}