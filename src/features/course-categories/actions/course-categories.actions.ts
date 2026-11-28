
"use server";

import { getCategoryLandingApi } from "../api/course-categories.api";

export default async function getCategoryLandingAction(
    categorySlug: string,
) {
    return await getCategoryLandingApi(categorySlug);
}
