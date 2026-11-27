import { useQuery } from "@tanstack/react-query";
import type { GetCoursesParams } from "../types/courses.types";
import getCoursesAction from "../action/courses.actions";

export default function useGetCourses(params: GetCoursesParams = {}) {
    return useQuery({
        queryKey: ["courses", params],
        queryFn: () => getCoursesAction(params),
    });
}