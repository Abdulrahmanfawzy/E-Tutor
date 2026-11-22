import { StaticImageData } from "next/image";

export interface CourseInstructor {
    id: string;
    name: string;
    title: string;
    image: string | StaticImageData;
    rating: number;
    studentsCount: number;
    coursesCount: number;
    description: string;
}