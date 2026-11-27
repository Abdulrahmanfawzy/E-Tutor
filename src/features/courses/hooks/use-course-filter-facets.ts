import { useQuery } from "@tanstack/react-query";
import getCourseFilterFacetsAction from "../action/course-filter-facets.actions";

export default function useCourseFilterFacets() {
    return useQuery({
        queryKey: ["course-filter-facets"],
        queryFn: getCourseFilterFacetsAction,
        staleTime: 60_000,
        retry: false,
    });
}
