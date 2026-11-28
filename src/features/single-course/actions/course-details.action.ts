
"use server";

import { getCourseBySlug } from "../api/course-details.api";



export async function getCourseDetailsAction(slug: string) {
    return await getCourseBySlug(slug);
}
