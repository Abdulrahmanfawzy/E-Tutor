"use server";

import { getCourseFilterFacets } from "../api/course-filter-facets.api";

export default async function getCourseFilterFacetsAction() {
    return getCourseFilterFacets();
}
