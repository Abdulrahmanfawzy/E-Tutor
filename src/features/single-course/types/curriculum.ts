export interface CurriculumLesson {
    id: string;
    title: string;
    duration?: string;
    fileSize?: string;
    type: "video" | "file" | "article" | "quiz";
    isPreview?: boolean;
    previewUrl?: string | null;
}

export interface CurriculumSection {
    id: string;
    title: string;
    lessons: CurriculumLesson[];
    duration?: string;
}

export interface Curriculum {
    sections: CurriculumSection[];
    totalDuration?: string;
}