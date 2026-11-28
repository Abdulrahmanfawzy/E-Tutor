
"use client";

import { useQuery } from "@tanstack/react-query";
import { getCourseDetailsAction } from "../actions/course-details.action";



export default function useGetCourseDetails(slug: string) {
    return useQuery({
        queryKey: ["course-details", slug],
        queryFn: () => getCourseDetailsAction(slug),
        enabled: Boolean(slug),
    });
}
