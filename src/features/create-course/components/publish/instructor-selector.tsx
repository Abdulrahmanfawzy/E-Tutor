"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Search, X } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Input } from "@/components/ui/input";
import { Instructor } from "../../types/course-types";
import { instructors } from "../../data/course-options";

interface InstructorSelectorProps {
  selectedInstructors: Instructor[];
  onAdd: (instructor: Instructor) => void;
  onRemove: (instructorId: string) => void;
}

export default function InstructorSelector({
  selectedInstructors,
  onAdd,
  onRemove,
}: InstructorSelectorProps) {
  const t = useTranslations("createCourse");
  const [search, setSearch] = useState("");

  const availableInstructors = useMemo(() => {
    const selectedIds = new Set(selectedInstructors.map((item) => item.id));

    const query = search.trim().toLowerCase();

    return instructors.filter(
      (instructor) =>
        !selectedIds.has(instructor.id) &&
        (instructor.username.toLowerCase().includes(query) ||
          t(instructor.roleKey).toLowerCase().includes(query)),
    );
  }, [search, selectedInstructors, t]);

  return (
    <section aria-labelledby="instructors-heading">
      <h2
        id="instructors-heading"
        className="mb-6 text-lg font-medium text-gray-900"
      >
        {t("publish.instructorsTitle", {
          count: String(selectedInstructors.length).padStart(2, "0"),
        })}
      </h2>

      <div className="relative w-full max-w-[608px]">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-gray-900"
        />

        <Input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={t("publish.searchPlaceholder")}
          aria-label={t("publish.searchAriaLabel")}
          className="h-12 rounded-none border-gray-100 bg-white pl-[52px] pr-4 text-sm placeholder:text-gray-500 focus-visible:border-orange-400"
        />

        {search.trim() && (
          <div className="absolute inset-x-0 top-full z-20 mt-1 max-h-60 overflow-y-auto border border-gray-100 bg-white shadow-lg">
            {availableInstructors.length > 0 ? (
              availableInstructors.map((instructor) => (
                <button
                  key={instructor.id}
                  type="button"
                  onClick={() => {
                    onAdd(instructor);
                    setSearch("");
                  }}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-gray-50"
                >
                  <Avatar className="size-10">
                    <AvatarImage
                      src={instructor.avatar}
                      alt={instructor.username}
                    />

                    <AvatarFallback>
                      {instructor.username.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="truncate text-sm font-medium text-gray-900">
                      {instructor.username}
                    </span>

                    <span className="text-sm text-gray-600">
                      {t(instructor.roleKey)}
                    </span>
                  </span>
                </button>
              ))
            ) : (
              <p className="px-4 py-3 text-sm text-gray-500">
                {t("publish.noInstructors")}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 grid max-w-[648px] grid-cols-1 gap-6 sm:grid-cols-2">
        {selectedInstructors.map((instructor) => (
          <article
            key={instructor.id}
            className="flex h-20 min-w-0 items-center gap-3 bg-gray-50 px-4"
          >
            <Avatar className="size-12">
              <AvatarImage src={instructor.avatar} alt={instructor.username} />

              <AvatarFallback>
                {instructor.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-gray-900">
                {instructor.username}
              </p>

              <p className="mt-2 truncate text-sm text-gray-600">
                {t(instructor.roleKey)}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onRemove(instructor.id)}
              aria-label={t("common.removeNamed", {
                name: instructor.username,
              })}
              className="flex size-8 shrink-0 items-center justify-center text-gray-600 transition-colors hover:text-red-500"
            >
              <X className="size-5" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
