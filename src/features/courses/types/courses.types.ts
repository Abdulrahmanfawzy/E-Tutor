
export interface CourseApiItem {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    thumbnail_url: string;

    category: {
        id: number;
        name: string;
        slug: string;
        color: string;
    };

    instructor: {
        id: number;
        name: string;
        username: string;
        headline: string;
        avatar_url: string;
    };

    level: "all" | "beginner" | "intermediate" | "expert";
    duration: string;

    price: number;
    current_price: number;
    discount_percent: number;
    is_free: boolean;

    rating: number;
    rating_count: number;
    students_count: number;
}

export interface CoursesPaginationMeta {
    total: number;
    current_page: number;
    last_page: number;
    per_page: number;
    from: number | null;
    to: number | null;
}

export interface CoursesResponse {
    success: boolean;
    message: string | null;

    data: {
        items: CourseApiItem[];
        meta: CoursesPaginationMeta;
        active_filters_count: number;
        sort: string;
    };
}

export interface GetCoursesParams {
    q?: string;
    category?: string | string[];
    subcategory?: string | string[];
    tools?: string | string[];
    rating?: number;
    level?: string | string[];
    price_min?: number;
    price_max?: number;
    price_type?: "all" | "paid" | "free";
    duration?: string | string[];
    sort?:
        | "trending"
        | "popular"
        | "rating"
        | "newest"
        | "price_asc"
        | "price_desc";
    page?: number;
    per_page?: number;
}
