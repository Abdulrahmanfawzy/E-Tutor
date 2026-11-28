import type { Curriculum } from "../types/curriculum";

export const curriculumMock: Curriculum = {
    totalDuration: "19h 37m",

    sections: [
        {
            id: "section-1",
            title: "Getting Started",
            duration: "51m",
            lessons: [
                {
                    id: "lesson-1",
                    title: "What's is Webflow?",
                    duration: "07:31",
                    type: "video",
                    isPreview: true,
                },
                {
                    id: "lesson-2",
                    title: "Sign up in Webflow",
                    duration: "07:31",
                    type: "video",
                },
                {
                    id: "lesson-3",
                    title: "Webflow Terms & Conditions",
                    fileSize: "5.3 MB",
                    type: "file",
                },
                {
                    id: "lesson-4",
                    title: "Teaser of Webflow",
                    duration: "07:31",
                    type: "video",
                },
                {
                    id: "lesson-5",
                    title: "Practice Project",
                    fileSize: "5.3 MB",
                    type: "file",
                },
            ],
        },

        {
            id: "section-2",
            title: "Secret of Good Design",
            duration: "5h 49m",
            lessons: Array.from({ length: 52 }, (_, index) => ({
                id: `section-2-lesson-${index + 1}`,
                title: `Secret of Good Design - Lesson ${index + 1}`,
                duration: "06:45",
                type: "video" as const,
            })),
        },

        {
            id: "section-3",
            title: "Practice Design Like an Artist",
            duration: "53m",
            lessons: Array.from({ length: 43 }, (_, index) => ({
                id: `section-3-lesson-${index + 1}`,
                title: `Practice Design - Lesson ${index + 1}`,
                duration: "05:30",
                type: "video" as const,
            })),
        },

        {
            id: "section-4",
            title: "Web Development (Webflow)",
            duration: "10h 6m",
            lessons: Array.from({ length: 137 }, (_, index) => ({
                id: `section-4-lesson-${index + 1}`,
                title: `Web Development - Lesson ${index + 1}`,
                duration: "08:15",
                type: "video" as const,
            })),
        },

        {
            id: "section-5",
            title: "Secrets of Making Money Freelancing",
            duration: "38m",
            lessons: Array.from({ length: 21 }, (_, index) => ({
                id: `section-5-lesson-${index + 1}`,
                title: `Freelancing - Lesson ${index + 1}`,
                duration: "04:20",
                type: "video" as const,
            })),
        },

        {
            id: "section-6",
            title: "Advanced",
            duration: "91m",
            lessons: Array.from({ length: 39 }, (_, index) => ({
                id: `section-6-lesson-${index + 1}`,
                title: `Advanced Webflow - Lesson ${index + 1}`,
                duration: "07:15",
                type: "video" as const,
            })),
        },
    ],
};