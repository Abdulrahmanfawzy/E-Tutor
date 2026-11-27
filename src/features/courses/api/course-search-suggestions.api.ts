import "server-only";

import type { CourseSearchSuggestionsResponse } from "../types/course-search-suggestions.types";

export async function getCourseSearchSuggestions(
    query: string,
): Promise<CourseSearchSuggestionsResponse> {
    const normalizedQuery = query.trim();

    if (normalizedQuery.length < 2) {
        throw new Error("Search suggestions require at least 2 characters.");
    }

    const apiBaseUrl = process.env.API;

    if (!apiBaseUrl) {
        throw new Error("The API environment variable is not configured.");
    }

    const searchParams = new URLSearchParams({ q: normalizedQuery });
    const endpoint = `${apiBaseUrl}api/v1/search/suggestions`;
    const response = await fetch(`${endpoint}?${searchParams.toString()}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
        cache: "no-store",
    });

    if (response.status === 422) {
        throw new Error("Search suggestions require at least 2 characters.");
    }

    if (response.status === 429) {
        throw new Error("Search suggestions are temporarily rate limited.");
    }

    if (!response.ok) {
        throw new Error(
            `Failed to fetch search suggestions (${response.status}).`,
        );
    }

    const result: CourseSearchSuggestionsResponse = await response.json();

    if (!result.success) {
        throw new Error(result.message || "Failed to fetch search suggestions.");
    }

    return result;
}
