import type { CourseSort } from "./courses.types";

export interface CourseFilterCategory {
    id: number;
    name: string;
    slug: string;
    courses_count: number;
    children: {
        id: number;
        name: string;
        slug: string;
        courses_count: number;
    }[];
}

export interface CourseFilterFacets {
    categories: CourseFilterCategory[];
    tools: {
        id: number;
        name: string;
        slug: string;
        courses_count: number;
    }[];
    ratings: {
        rating: number;
        courses_count: number;
    }[];
    levels: {
        value: "all" | "beginner" | "intermediate" | "expert";
        courses_count: number;
    }[];
    price: {
        min: number;
        max: number;
        free_count: number;
        paid_count: number;
    };
    durations: {
        value: string;
        courses_count: number;
    }[];
    sorts: CourseSort[];
    popular_keywords: {
        keyword: string;
        courses_count: number;
    }[];
}

export interface CourseFilterFacetsResponse {
    success: boolean;
    message: string | null;
    data: CourseFilterFacets;
}
