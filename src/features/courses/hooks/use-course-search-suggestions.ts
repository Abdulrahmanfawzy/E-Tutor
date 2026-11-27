import { useQuery } from "@tanstack/react-query";
import getCourseSearchSuggestionsAction from "../action/course-search-suggestions.actions";

export default function useCourseSearchSuggestions(query: string) {
    const normalizedQuery = query.trim();

    return useQuery({
        queryKey: ["course-search-suggestions", normalizedQuery],
        queryFn: () => getCourseSearchSuggestionsAction(normalizedQuery),
        enabled: normalizedQuery.length >= 2,
        staleTime: 30_000,
        retry: false,
    });
}
