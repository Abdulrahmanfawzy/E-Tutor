import type { CourseApiItem } from "./courses.types";

export interface CourseSearchSuggestionsResponse {
    success: boolean;
    message: string | null;
    data: {
        courses: Pick<CourseApiItem, "id" | "slug" | "title">[];
        keywords: string[];
        categories: {
            id: number;
            name: string;
            slug: string;
            parent_id: number | null;
        }[];
        instructors: {
            name: string;
        }[];
    };
}
