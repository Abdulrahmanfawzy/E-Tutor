"use client";

import { useQuery } from "@tanstack/react-query";
import getCategoryLandingAction from "../actions/course-categories.actions";

export function useCategoryLanding(categorySlug: string) {
    return useQuery({
        queryKey: ["category-landing", categorySlug],
        queryFn: () => getCategoryLandingAction(categorySlug),
        enabled: !!categorySlug?.trim(),
    });
}