import "server-only";

import type { CourseFilterFacetsResponse } from "../types/course-filter-facets.types";

export async function getCourseFilterFacets(): Promise<CourseFilterFacetsResponse> {
    const apiBaseUrl = process.env.API;

    if (!apiBaseUrl) {
        throw new Error("The API environment variable is not configured.");
    }

    
    const response = await fetch(`${apiBaseUrl}api/v1/search/filters`, {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(
            `Failed to fetch course filter facets (${response.status}).`,
        );
    }

    const result: CourseFilterFacetsResponse = await response.json();

    if (!result.success) {
        throw new Error(
            result.message || "Failed to fetch course filter facets.",
        );
    }

    return result;
}
