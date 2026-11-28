
"use server";

import { getCourses } from "../api/courses.api";
import type { GetCoursesParams } from "../types/courses.types";

export default async function getCoursesAction(
    params: GetCoursesParams = {}
) {
    return await getCourses(params);
}
