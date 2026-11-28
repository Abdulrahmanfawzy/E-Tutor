
import "server-only";

import type { CategoryLandingResponse } from "../types/course-category.types";

export async function getCategoryLandingApi(categorySlug: string): Promise<CategoryLandingResponse> {
    if (!categorySlug.trim()) {
        throw new Error("Invalid category slug");
    }

    const response = await fetch(
        `${process.env.API}api/v1/categories/${encodeURIComponent(categorySlug)}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
            cache: "no-store",
        },
    );

    if (response.status === 404) {
        throw new Error("Category not found");
    }

    if (!response.ok) {
        throw new Error(
            `Failed to fetch category landing data (${response.status})`,
        );
    }

    return response.json();
}
