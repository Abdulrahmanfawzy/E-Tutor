"use server";

import { getCourseSearchSuggestions } from "../api/course-search-suggestions.api";

export default async function getCourseSearchSuggestionsAction(query: string) {
    return getCourseSearchSuggestions(query);
}
