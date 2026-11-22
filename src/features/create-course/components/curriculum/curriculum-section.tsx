"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Grip, Pencil, Plus, Trash2 } from "lucide-react";

import CurriculumLecture from "./curriculum-lecture";
import InlineNameEditor from "./inline-name-editor";

import type {
  CurriculumLecture as CurriculumLectureType,
  CurriculumSection as CurriculumSectionType,
  LectureContentType,
} from "../../types/course-types";

interface CurriculumSectionProps {
  section: CurriculumSectionType;
  index: number;
  onRename: (title: string) => void;
  onDelete: () => void;
  onAddLecture: () => void;
  onRenameLecture: (lectureId: string, title: string) => void;
  onDeleteLecture: (lectureId: string) => void;
  onUpdateLectureContent: (
    lectureId: string,
    contentType: LectureContentType,
    value: string,
    fileName?: string,
  ) => void;
}

export default function CurriculumSection({
  section,
  index,
  onRename,
  onDelete,
  onAddLecture,
  onRenameLecture,
  onDeleteLecture,
  onUpdateLectureContent,
}: CurriculumSectionProps) {
  const t = useTranslations("createCourse");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="bg-gray-50 p-4 sm:p-5">
      <div className="mb-4 flex min-h-7 flex-wrap items-center gap-2">
        <Grip aria-hidden="true" className="size-4 shrink-0 text-gray-600" />

        {isEditing ? (
          <InlineNameEditor
            value={section.title}
            onSave={(value) => {
              onRename(value);
              setIsEditing(false);
            }}
            onCancel={() => setIsEditing(false)}
            className="min-w-45 flex-1"
          />
        ) : (
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-900">
            <span className="font-medium">
              {t("curriculum.sectionLabel", {
                number: String(index + 1).padStart(2, "0"),
              })}
            </span>

            <span className="truncate">{section.title}</span>
          </div>
        )}

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label={t("curriculum.addLecture")}
            onClick={onAddLecture}
            className="flex size-7 items-center justify-center text-gray-400 transition-colors hover:text-gray-900"
          >
            <Plus className="size-5" />
          </button>

          <button
            type="button"
            aria-label={t("curriculum.editSectionName")}
            onClick={() => setIsEditing(true)}
            className="flex size-7 items-center justify-center text-gray-400 transition-colors hover:text-gray-900"
          >
            <Pencil className="size-4" />
          </button>

          <button
            type="button"
            aria-label={t("curriculum.deleteSection", { index: index + 1 })}
            onClick={onDelete}
            className="flex size-7 items-center justify-center text-gray-400 transition-colors hover:text-red-500"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {section.lectures.map((lecture: CurriculumLectureType) => (
          <CurriculumLecture
            key={lecture.id}
            lecture={lecture}
            onRename={(title) => onRenameLecture(lecture.id, title)}
            onDelete={() => onDeleteLecture(lecture.id)}
            onUpdateContent={(contentType, value, fileName) =>
              onUpdateLectureContent(lecture.id, contentType, value, fileName)
            }
          />
        ))}

        {section.lectures.length === 0 && (
          <p className="bg-white px-4 py-5 text-center text-sm text-gray-500">
            {t("curriculum.emptySection")}
          </p>
        )}
      </div>
    </section>
  );
}
