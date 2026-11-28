
export interface CourseApiCategory {
    id: number;
    name: string;
    slug: string;
    color: string;
}

export interface CourseApiInstructor {
    id: number;
    name: string;
    username: string;
    headline: string;
    avatar_url: string;
}

export interface CourseApiBreadcrumb {
    name: string;
    slug: string;
}

export interface CourseApiTool {
    id: number;
    name: string;
    slug: string;
}

export interface CourseApiOutcomes {
    learn: string[];
    audience: string[];
    requirement: string[];
}

export interface CourseApiInstructorDetails extends CourseApiInstructor {
    bio: string | null;
    role: string;
    rating: number;
    reviews_count: number;
    students_count: number;
    courses_count: number;
}

export interface CourseApiLecture {
    id: number;
    title: string;
    type: "video" | "file";
    duration_seconds: number;
    is_preview: boolean;
    preview_url: string | null;
}

export interface CourseApiSection {
    id: number;
    title: string;
    lectures_count: number;
    duration_seconds: number;
    lectures: CourseApiLecture[];
}

export interface CourseApiCurriculum {
    sections_count: number;
    lectures_count: number;
    duration_seconds: number;
    sections: CourseApiSection[];
}

export interface CourseApiIncludes {
    duration_seconds: number;
    lectures_count: number;
    downloadable_files_count: number;
    lifetime_access: boolean;
    certificate: boolean;
    mobile_tv_access: boolean;
    language: string;
    subtitle_language: string;
}

export interface CourseApiRatingBreakdown {
    stars: number;
    count: number;
    percent: number;
}

export interface CourseApiRatingSummary {
    average: number;
    count: number;
    breakdown: CourseApiRatingBreakdown[];
}

export interface CourseApiViewer {
    is_authenticated: boolean;
    is_enrolled: boolean;
    in_cart: boolean;
    in_wishlist: boolean;
    is_instructor: boolean;
}

export interface CourseDetailsApiData {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    thumbnail_url: string;

    category: CourseApiCategory;
    instructor: CourseApiInstructor;

    level: string;
    duration: string;
    price: number;
    current_price: number;
    discount_percent: number;
    is_free: boolean;
    rating: number;
    rating_count: number;
    students_count: number;
    status: string;

    description: string;
    topic: string;
    language: string;
    subtitle_language: string;

    duration_value: number;
    duration_unit: string;

    trailer_url: string | null;
    discount_ends_at: string | null;
    discount_days_left: number | null;

    published_at: string;
    updated_at: string;

    breadcrumb: CourseApiBreadcrumb[];
    subcategory: CourseApiCategory | null;
    tools: CourseApiTool[];

    outcomes: CourseApiOutcomes;
    instructors: CourseApiInstructorDetails[];

    curriculum: CourseApiCurriculum;
    includes: CourseApiIncludes;
    rating_summary: CourseApiRatingSummary;
    viewer: CourseApiViewer;
}

export interface CourseDetailsApiResponse {
    success: boolean;
    message: string | null;
    data: CourseDetailsApiData;
}
