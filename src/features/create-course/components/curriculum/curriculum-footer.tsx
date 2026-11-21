"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface CurriculumFooterProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function CurriculumFooter({
  onPrevious,
  onNext,
}: CurriculumFooterProps) {
  const t = useTranslations("createCourse");

  return (
    <footer className="mt-auto flex flex-col-reverse items-stretch justify-between gap-4 px-5 pb-8 pt-12 sm:flex-row sm:items-center sm:px-8">
      <Button
        type="button"
        variant="outline"
        onClick={onPrevious}
        className="h-12 min-w-[120px] justify-center rounded-none border-gray-100 bg-white px-6 text-button-md text-gray-600 hover:bg-gray-50"
      >
        <ChevronLeft className="size-4" />
        {t("common.previous")}
      </Button>

      <Button
        type="button"
        onClick={onNext}
        className="h-12 min-w-[144px] justify-center rounded-none px-6 text-button-md"
      >
        {t("common.saveAndNext")}
      </Button>
    </footer>
  );
}
