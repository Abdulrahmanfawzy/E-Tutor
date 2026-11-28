
import "server-only";

import { cache } from "react";
import { CourseDetailsApiData, CourseDetailsApiResponse } from "../types/course-details.types";



export const getCourseBySlug = cache(
    async (slug: string): Promise<CourseDetailsApiData | null> => {
        const response = await fetch(
            `${process.env.API}api/v1/courses/${encodeURIComponent(slug)}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
                cache: "no-store",
            }
        );

        if (response.status === 404) {
            return null;
        }

        if (!response.ok) {
            throw new Error(
                `Failed to fetch course details: ${response.status}`
            );
        }

        const result: CourseDetailsApiResponse = await response.json();

        if (!result.success || !result.data) {
            throw new Error("Invalid course details response.");
        }

        return result.data;
    }
);
