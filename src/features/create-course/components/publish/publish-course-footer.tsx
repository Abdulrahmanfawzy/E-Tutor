"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface PublishCourseFooterProps {
  onPreviousStep: () => void;
}

export default function PublishCourseFooter({
  onPreviousStep,
}: PublishCourseFooterProps) {
  const t = useTranslations("createCourse");

  return (
    <footer className="mt-auto flex flex-col-reverse items-stretch justify-between gap-4 px-5 pb-10 pt-12 sm:flex-row sm:items-center sm:px-10">
      <Button
        type="button"
        variant="outline"
        onClick={onPreviousStep}
        className="h-14 justify-center rounded-none border-transparent bg-gray-50 px-8 text-base text-gray-900 hover:bg-gray-100 sm:min-w-[147px]"
      >
        <ChevronLeft className="size-4" />
        {t("publish.prevStep")}
      </Button>

      <Button
        type="submit"
        className="h-14 justify-center rounded-none px-8 text-base sm:min-w-[223px]"
      >
        {t("publish.submitForReview")}
      </Button>
    </footer>
  );
}
