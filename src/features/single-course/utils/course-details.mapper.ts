
import type { Course } from "../types/course";
import type { Curriculum } from "../types/curriculum";
import { CourseApiCurriculum, CourseDetailsApiData } from "../types/course-details.types";


export function mapCourseDetails(
    apiCourse: CourseDetailsApiData,

): Course {
    return {
        id: String(apiCourse.id),

        slug: apiCourse.slug,

        title: apiCourse.title,

        subtitle: apiCourse.subtitle,

        breadcrumbs: [
            {
                label: "Home",
                href: `/`,
            },
            {
                label: "Course List",
                href: `/course-list`,
            },
            {
                label: apiCourse.category.name,
            },
        ],

        instructors: apiCourse.instructors.map((instructor) => ({
            id: String(instructor.id),
            name: instructor.name,
            avatar: instructor.avatar_url,
        })),

        rating: {
            value: apiCourse.rating_summary.average,
            reviewCount: apiCourse.rating_summary.count,
        },

        previewImage: apiCourse.thumbnail_url,

        previewVideo: apiCourse.trailer_url ?? undefined,

        price: {
            current: apiCourse.current_price,
            original: apiCourse.price,
            currency: "",
        },

        discountPercentage: apiCourse.discount_percent,

        offerEndsInDays: apiCourse.discount_days_left ?? 0,

        courseInfo: [
            {
                label: "Category",
                value: apiCourse.category.name,
                icon: "layers",
            },
            {
                label: "Students Enrolled",
                translationKey: "studentsEnrolled",
                value: apiCourse.students_count.toLocaleString(),
                icon: "users",
            },
            {
                label: "Level",
                value: apiCourse.level,
                icon: "chart",
            },
            {
                label: "Duration",
                value: apiCourse.duration,
                icon: "clock",
            },
            {
                label: "Language",
                value: apiCourse.language,
                icon: "languages",
            },
            {
                label: "Subtitles",
                value: apiCourse.subtitle_language,
                icon: "captions",
            },
        ],

        includes: [
            {
                id: "duration",
                title: `${Math.round(apiCourse.includes.duration_seconds / 3600)} hours of on-demand video`,
                icon: "clock",
            },
            {
                id: "lectures",
                title: `${apiCourse.includes.lectures_count} lectures`,
                icon: "book-open",
            },
            {
                id: "downloadable-files",
                title: `${apiCourse.includes.downloadable_files_count} downloadable files`,
                icon: "file-text",
            },
            ...(apiCourse.includes.lifetime_access
                ? [{
                    id: "lifetime-access",
                    title: "Full lifetime access",
                    icon: "award",
                }]
                : []),
            ...(apiCourse.includes.certificate
                ? [{
                    id: "certificate",
                    title: "Certificate of completion",
                    icon: "award",
                }]
                : []),
            ...(apiCourse.includes.mobile_tv_access
                ? [{
                    id: "mobile-tv",
                    title: "Access on mobile and TV",
                    icon: "monitor",
                }]
                : []),
        ],

        description: apiCourse.description,
    };
}


function formatDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    }

    return `${minutes}m`;
}

export function mapCourseCurriculum(
    apiCurriculum: CourseApiCurriculum
): Curriculum {
    return {
        sections: apiCurriculum.sections.map((section) => ({
            id: String(section.id),

            title: section.title,

            duration: formatDuration(section.duration_seconds),

            lessons: section.lectures.map((lecture) => ({
                id: String(lecture.id),

                title: lecture.title,

                type: lecture.type,

                duration: formatDuration(lecture.duration_seconds),

                isPreview: lecture.is_preview,
                previewUrl: lecture.preview_url,
            })),
        })),

        totalDuration: formatDuration(apiCurriculum.duration_seconds),
    };
}
