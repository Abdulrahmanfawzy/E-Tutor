
import "server-only";

import type {
    CoursesResponse,
    GetCoursesParams,
} from "../types/courses.types";

export async function getCourses(params: GetCoursesParams = {}) {
    const queryParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value === undefined || value === null || value === "") {
            return;
        }

        if (Array.isArray(value)) {
            if (value.length > 0) {
                queryParams.set(key, value.join(","));
            }

            return;
        }

        queryParams.set(key, String(value));
    });

    const queryString = queryParams.toString();
    const apiBaseUrl = process.env.API;

    if (!apiBaseUrl) {
        throw new Error("The API environment variable is not configured.");
    }

    const endpoint = `${apiBaseUrl}api/v1/courses`;
    const response = await fetch(`${endpoint}${queryString ? `?${queryString}` : ""}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
        cache: "no-store",
    });

    if (response.status === 401) {
        throw new Error("Unauthorized access.");
    }

    if (response.status === 404) {
        throw new Error("Courses endpoint not found.");
    }

    if (!response.ok) {
        throw new Error("Failed to fetch courses.");
    }

    const result: CoursesResponse = await response.json();

    return result;
}
