"use client";

import { useTranslations } from "next-intl";
import { AlignLeft, Captions, FileText, Paperclip, Video } from "lucide-react";

import { contentTypeKeys } from "../../data/content-types";
import type { LectureContentType } from "../../types/course-types";

interface CurriculumContentMenuProps {
  onSelect: (contentType: LectureContentType) => void;
}

const contentOptions: {
  label: LectureContentType;
  icon: typeof Video;
}[] = [
  { label: "Video", icon: Video },
  { label: "Attach File", icon: Paperclip },
  { label: "Captions", icon: Captions },
  { label: "Description", icon: AlignLeft },
  { label: "Lecture Notes", icon: FileText },
];

export default function CurriculumContentMenu({
  onSelect,
}: CurriculumContentMenuProps) {
  const t = useTranslations("createCourse");

  return (
    <div
      role="menu"
      aria-label={t("contentMenu.ariaLabel")}
      className="absolute right-0 top-full z-50 mt-1 w-38.5 border border-gray-100 bg-white py-2 shadow-lg"
    >
      {contentOptions.map(({ label, icon: Icon }) => (
        <button
          key={label}
          type="button"
          role="menuitem"
          onClick={() => onSelect(label)}
          className="flex h-7 w-full items-center gap-2 px-3 text-left text-xs text-gray-600 transition-colors hover:bg-orange-50 hover:text-orange-500"
        >
          <Icon className="size-3.5 sm:hidden" />
          {t(contentTypeKeys[label])}
        </button>
      ))}
    </div>
  );
}
