"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

interface PublishCourseHeaderProps {
  onSave: () => void;
  onSaveAndPreview: () => void;
}

export default function PublishCourseHeader({
  onSave,
  onSaveAndPreview,
}: PublishCourseHeaderProps) {
  const t = useTranslations("createCourse");

  return (
    <header className="flex min-h-24 flex-col justify-center gap-4 border-b border-gray-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
      <h1 className="text-2xl font-semibold text-gray-900">
        {t("publish.title")}
      </h1>

      <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="primary-soft"
          className="h-12 min-w-21 rounded-none px-6"
          onClick={onSave}
        >
          {t("common.save")}
        </Button>

        <Button
          type="button"
          variant="ghost"
          className="h-12 rounded-none px-5 text-orange-400 hover:bg-orange-50 hover:text-orange-500"
          onClick={onSaveAndPreview}
        >
          {t("common.saveAndPreview")}
        </Button>
      </div>
    </header>
  );
}
