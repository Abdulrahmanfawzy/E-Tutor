"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, ChevronUp, Grip, Pencil, Trash2 } from "lucide-react";

import CurriculumContentMenu from "./curriculum-content-menu";
import CurriculumTextContentDialog from "./curriculum-content-dialog";
import CurriculumVideoDialog from "./curriculum-video-dialog";
import CurriculumUploadDialog from "./curriculum-upload-dialog";
import InlineNameEditor from "./inline-name-editor";

import { contentTypeKeys } from "../../data/content-types";

import type {
  CurriculumLecture as CurriculumLectureType,
  LectureContentType,
  LectureTextContentType,
} from "../../types/course-types";

interface CurriculumLectureProps {
  lecture: CurriculumLectureType;
  onRename: (title: string) => void;
  onDelete: () => void;
  onUpdateContent: (
    contentType: LectureContentType,
    value: string,
    fileName?: string,
  ) => void;
}

const textContentFields: {
  type: LectureTextContentType;
  labelKey: string;
}[] = [
  { type: "Captions", labelKey: "contentTypes.captions" },
  { type: "Description", labelKey: "contentTypes.description" },
  { type: "Lecture Notes", labelKey: "contentTypes.lectureNotes" },
];

const getTextContentValue = (
  lecture: CurriculumLectureType,
  contentType: LectureTextContentType,
): string => {
  switch (contentType) {
    case "Captions":
      return lecture.captions ?? "";

    case "Description":
      return lecture.description ?? "";

    case "Lecture Notes":
      return lecture.lectureNotes ?? "";
  }
};

export default function CurriculumLecture({
  lecture,
  onRename,
  onDelete,
  onUpdateContent,
}: CurriculumLectureProps) {
  const t = useTranslations("createCourse");
  const [isEditing, setIsEditing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(lecture.id === "lecture-2");

  const [textDialogType, setTextDialogType] =
    useState<LectureTextContentType | null>(null);

  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);

  const selectContent = (contentType: LectureContentType) => {
    setIsMenuOpen(false);

    switch (contentType) {
      case "Video":
        setIsVideoDialogOpen(true);
        return;

      case "Attach File":
        setIsUploadDialogOpen(true);
        return;

      case "Captions":
      case "Description":
      case "Lecture Notes":
        setTextDialogType(contentType);
        return;
    }
  };

  const handleTextDialogSave = (value: string, fileName?: string) => {
    if (!textDialogType) return;

    onUpdateContent(textDialogType, value, fileName);
    setTextDialogType(null);
  };

  const handleClearUploadContent = () => {
    if (lecture.contentType) {
      onUpdateContent(lecture.contentType, "");
    }
  };

  const isInlineContent =
    lecture.contentType === "Video" || lecture.contentType === "Attach File";

  return (
    <div className="relative overflow-visible">
      {/* Lecture header */}
      <div className="relative z-10 flex min-h-[55px] items-center gap-2 bg-white px-3 sm:px-4">
        <Grip
          aria-hidden="true"
          className="size-4 shrink-0 cursor-grab text-gray-400"
        />

        {isEditing ? (
          <InlineNameEditor
            value={lecture.title}
            onSave={(value) => {
              onRename(value);
              setIsEditing(false);
            }}
            onCancel={() => setIsEditing(false)}
            className="flex-1"
          />
        ) : (
          <span className="min-w-0 flex-1 truncate text-sm text-gray-900">
            {lecture.title}
          </span>
        )}

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-haspopup="menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-[35px] items-center gap-2 bg-orange-50 px-3 text-xs font-medium text-orange-500 transition-colors hover:bg-orange-100 sm:px-4"
          >
            {t("curriculum.contents")}
            {isMenuOpen ? (
              <ChevronUp className="size-3.5" />
            ) : (
              <ChevronDown className="size-3.5" />
            )}
          </button>

          <button
            type="button"
            aria-label={t("common.editNamed", { name: lecture.title })}
            onClick={() => setIsEditing(true)}
            className="flex size-6 items-center justify-center text-gray-500 hover:text-gray-900"
          >
            <Pencil className="size-4" />
          </button>

          <button
            type="button"
            aria-label={t("common.deleteNamed", { name: lecture.title })}
            onClick={onDelete}
            className="flex size-6 items-center justify-center text-gray-400 hover:text-red-500"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      </div>

      {/* Content menu */}
      {isMenuOpen && (
        <div className="relative z-50">
          <CurriculumContentMenu onSelect={selectContent} />
        </div>
      )}

      {/* Video / Attach File content display */}
      {lecture.contentType && isInlineContent && (
        <div className="border-t border-gray-100 bg-white px-4 py-3">
          <div className="mb-2 flex items-center justify-between gap-3">
            <p className="text-xs font-medium text-gray-700">
              {t(contentTypeKeys[lecture.contentType])}
            </p>

            <button
              type="button"
              onClick={handleClearUploadContent}
              className="text-xs text-gray-500 hover:text-red-500"
            >
              {t("common.clear")}
            </button>
          </div>

          <p className="truncate text-xs text-gray-500">
            {lecture.contentValue || t("common.noFileSelected")}
          </p>
        </div>
      )}

      {/* Independently saved text content */}
      {textContentFields.map(({ type, labelKey }) => {
        const content = getTextContentValue(lecture, type);

        const fileName =
          type === "Lecture Notes" ? lecture.lectureNotesFileName : undefined;

        if (!content && !fileName) return null;

        return (
          <div
            key={type}
            className="border-t border-gray-100 bg-white px-4 py-3"
          >
            <div className="mb-1 flex items-center justify-between gap-3">
              <p className="text-xs font-medium text-gray-700">
                {t(labelKey)}
              </p>

              <button
                type="button"
                onClick={() => setTextDialogType(type)}
                className="text-xs text-orange-500 hover:text-orange-600"
              >
                {t("common.edit")}
              </button>
            </div>

            {content && (
              <p className="line-clamp-2 whitespace-pre-wrap text-xs text-gray-500">
                {content}
              </p>
            )}

            {fileName && (
              <p className="mt-1 truncate text-xs text-orange-500">
                {fileName}
              </p>
            )}
          </div>
        );
      })}

      <CurriculumVideoDialog
        open={isVideoDialogOpen}
        onOpenChange={setIsVideoDialogOpen}
        onUpload={(fileName) => {
          onUpdateContent("Video", fileName);
        }}
      />

      <CurriculumUploadDialog
        open={isUploadDialogOpen}
        contentType="Attach File"
        onOpenChange={setIsUploadDialogOpen}
        onConfirm={(file) => {
          onUpdateContent("Attach File", file.name);
        }}
      />

      {/* Reusable text content dialog */}
      {textDialogType && (
        <CurriculumTextContentDialog
          key={`${lecture.id}-${textDialogType}`}
          contentType={textDialogType}
          initialValue={getTextContentValue(lecture, textDialogType)}
          initialFileName={
            textDialogType === "Lecture Notes"
              ? (lecture.lectureNotesFileName ?? "")
              : ""
          }
          onClose={() => setTextDialogType(null)}
          onSave={handleTextDialogSave}
        />
      )}
    </div>
  );
}
