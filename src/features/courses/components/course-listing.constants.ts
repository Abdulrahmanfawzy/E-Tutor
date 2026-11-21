import { CourseDuration, CourseLevel, FilterOption } from "@/features/courses/types/course-listing.types";


export const COURSE_CATEGORIES_FILTER = [
    {
        label: "Development",
        value: "development",
        subcategories: [
            { label: "Web Development", value: "web-development" },
            { label: "Data Science", value: "data-science" },
            { label: "Mobile Development", value: "mobile-development" },
            { label: "Software Testing", value: "software-testing" },
            { label: "Software Engineering", value: "software-engineering" },
            { label: "Software Development Tools", value: "software-development-tools" },
            { label: "No-Code Development", value: "no-code-development" },
        ],
    },
    { label: "Business", value: "business", subcategories: [] },
    { label: "Finance & Accounting", value: "finance-accounting", subcategories: [] },
    { label: "IT & Software", value: "it-software", subcategories: [] },
    { label: "Office Productivity", value: "office-productivity", subcategories: [] },
    { label: "Personal Development", value: "personal-development", subcategories: [] },
    { label: "Design", value: "design", subcategories: [] },
    { label: "Marketing", value: "marketing", subcategories: [] },
    { label: "Lifestyle", value: "lifestyle", subcategories: [] },
    { label: "Photography & Video", value: "photography-video", subcategories: [] },
    { label: "Music", value: "music", subcategories: [] },
    { label: "Health & Fitness", value: "health-fitness", subcategories: [] },
] as const;

export const COURSE_TOOLS: FilterOption[] = [
    { label: "HTML 5", value: "html-5" },
    { label: "CSS 3", value: "css-3" },
    { label: "React", value: "react" },
    { label: "Webflow", value: "webflow" },
    { label: "Node.js", value: "node-js" },
    { label: "Laravel", value: "laravel" },
    { label: "Sass", value: "sass" },
    { label: "WordPress", value: "wordpress" },
];

export const COURSE_RATINGS = [
    { label: "5 Star", value: 5 },
    { label: "4 Star & up", value: 4 },
    { label: "3 Star & up", value: 3 },
    { label: "2 Star & up", value: 2 },
    { label: "1 Star & up", value: 1 },
] as const;

export const COURSE_LEVEL_OPTIONS: readonly CourseLevel[] = [
    "Beginner",
    "Intermediate",
    "Expert",
];

export const COURSE_DURATION_OPTIONS: readonly CourseDuration[] = [
    "6-12 Months",
    "3-6 Months",
    "1-3 Months",
    "1-4 Weeks",
    "1-7 Days",
];

export const DEFAULT_COURSE_FILTERS = {
    categories: [],
    subcategories: [],
    tools: [],
    ratings: [],
    levels: [],
    minPrice: 0,
    maxPrice: 1000,
    priceTypes: [],
    durations: [],
};