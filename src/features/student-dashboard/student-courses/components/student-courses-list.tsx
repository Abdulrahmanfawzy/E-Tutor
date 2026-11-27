"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import CourseSearchInput from "@/components/common/course-search-input"; 
import CourseEmptyState from "@/components/common/course-empty-state";
import CustomPagination from "@/components/common/custom-pagination";

import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import DashboardCourseCard, { DashboardCourse } from "@/components/common/dashboard-course-card/dashboard-course-card";

const PAGE_SIZE = 16;

export default function StudentCoursesList({ courses }: { courses: DashboardCourse[] }) {
  const t = useTranslations("studentCourses");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [status, setStatus] = useState("all");
  const [teacher, setTeacher] = useState("all");
  const [page, setPage] = useState(1);

  const teachers = useMemo(() => [...new Set(courses.map((c) => c.instructor))], [courses]);

  const filtered = useMemo(() => {
    let list = courses.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()));
    if (status === "inProgress") list = list.filter((c) => c.progress > 0 && c.progress < 100);
    if (status === "completed") list = list.filter((c) => c.progress >= 100);
    if (teacher !== "all") list = list.filter((c) => c.instructor === teacher);
    if (sort === "oldest") list = [...list].reverse();
    if (sort === "progress") list = [...list].sort((a, b) => b.progress - a.progress);
    return list;
  }, [courses, search, status, teacher, sort]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);


  const reset = <T,>(setter: (v: T) => void) => (v: T) => { setter(v); setPage(1); };

  const clearAll = () => { setSearch(""); setStatus("all"); setTeacher("all"); setSort("latest"); setPage(1); };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end gap-4">
        <div className="flex min-w-60 flex-1 flex-col gap-2">
          <p className="text-xs text-gray-500">{t("filters.search")}</p>
          <CourseSearchInput value={search} onChange={reset(setSearch)} placeholder={t("filters.searchPlaceholder")} />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-500">{t("filters.sortBy")}</p>
          <Select value={sort} onValueChange={(v) => reset(setSort)(v as string)}>
            <SelectTrigger className="h-10 w-40"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">{t("sort.latest")}</SelectItem>
              <SelectItem value="oldest">{t("sort.oldest")}</SelectItem>
              <SelectItem value="progress">{t("sort.progress")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-500">{t("filters.status")}</p>
          <Select value={status} onValueChange={(v) => reset(setStatus)(v as string)}>
            <SelectTrigger className="h-10 w-40"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("status.all")}</SelectItem>
              <SelectItem value="inProgress">{t("status.inProgress")}</SelectItem>
              <SelectItem value="completed">{t("status.completed")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-500">{t("filters.teacher")}</p>
          <Select value={teacher} onValueChange={(v) => reset(setTeacher)(v as string)}>
            <SelectTrigger className="h-10 w-44"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("teacher.all")}</SelectItem>
              {teachers.map((name) => (
                <SelectItem key={name} value={name}>{name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {visible.length === 0 ? (
        <CourseEmptyState onClear={clearAll} />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((c) => <DashboardCourseCard key={c.id} course={c} />)}
        </div>
      )}

      <CustomPagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}