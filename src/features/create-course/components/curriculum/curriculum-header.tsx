"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

interface CurriculumHeaderProps {
  onSave: () => void;
  onSaveAndPreview: () => void;
}

export default function CurriculumHeader({
  onSave,
  onSaveAndPreview,
}: CurriculumHeaderProps) {
  const t = useTranslations("createCourse");

  return (
    <header className="flex min-h-[82px] flex-col justify-center gap-4 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <h1 className="text-heading-7 font-semibold text-gray-900">
        {t("curriculum.title")}
      </h1>

      <div className="flex items-center gap-4">

        <Button
          type="button"
          variant="primary-soft"
          onClick={onSave}
          className="h-11 min-w-[74px] rounded-none px-5 text-button-sm"
        >
          {t("common.save")}
        </Button>

        <Button
          type="button"
          variant="ghost"
          onClick={onSaveAndPreview}
          className="h-11 rounded-none px-4 text-button-sm text-orange-400 hover:bg-orange-50 hover:text-orange-500"
        >
          {t("common.saveAndPreview")}
        </Button>
      </div>
    </header>
  );
}
