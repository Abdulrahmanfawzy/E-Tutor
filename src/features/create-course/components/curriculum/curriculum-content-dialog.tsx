"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";

import type { LectureTextContentType } from "../../types/course-types";

interface CurriculumTextContentDialogProps {
  contentType: LectureTextContentType;
  initialValue: string;
  initialFileName?: string;
  onClose: () => void;
  onSave: (value: string, fileName?: string) => void;
}

export default function CurriculumTextContentDialog({
  contentType,
  initialValue,
  initialFileName = "",
  onClose,
  onSave,
}: CurriculumTextContentDialogProps) {
  const t = useTranslations("createCourse");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(initialValue);
  const [fileName, setFileName] = useState(initialFileName);

  const dialogConfig: Record<
    LectureTextContentType,
    {
      title: string;
      placeholder: string;
      description: string;
    }
  > = {
    Captions: {
      title: t("textDialog.captionsTitle"),
      placeholder: t("textDialog.captionsPlaceholder"),
      description: t("textDialog.captionsDescription"),
    },
    Description: {
      title: t("textDialog.descriptionTitle"),
      placeholder: t("textDialog.descriptionPlaceholder"),
      description: t("textDialog.descriptionDescription"),
    },
    "Lecture Notes": {
      title: t("textDialog.notesTitle"),
      placeholder: t("textDialog.notesPlaceholder"),
      description: t("textDialog.notesDescription"),
    },
  };

  const config = dialogConfig[contentType];

  useEffect(() => {
    setValue(initialValue);
    setFileName(initialFileName);
  }, [initialValue, initialFileName, contentType]);

  const handleSave = () => {
    onSave(value, fileName || undefined);
  };

  return (
    <Dialog.Root open onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-gray-900/80" />

        <Dialog.Popup
          aria-describedby="curriculum-text-description"
          className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-32px)] max-w-[557px] -translate-x-1/2 -translate-y-1/2 border border-gray-100 bg-white text-gray-900 shadow-xl outline-none"
        >
          {/* Header */}
          <div className="flex h-[45px] items-center justify-between border-b border-gray-100 px-4">
            <Dialog.Title className="text-sm font-medium text-gray-900">
              {config.title}
            </Dialog.Title>

            <Dialog.Close
              aria-label={t("common.closeDialog")}
              className="flex size-7 items-center justify-center text-gray-400 transition-colors hover:text-gray-900"
            >
              <X className="size-4" />
            </Dialog.Close>
          </div>

          {/* Content */}
          <div className="px-5 pt-5">
            <p
              id="curriculum-text-description"
              className="mb-3 text-xs text-gray-600"
            >
              {config.description}
            </p>

            <textarea
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder={config.placeholder}
              rows={6}
              className="w-full resize-y border border-gray-100 p-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-orange-400"
            />

            {contentType === "Lecture Notes" && (
              <div className="mt-4">
                <p className="mb-2 text-xs font-medium text-gray-700">
                  {t("textDialog.attachFileOptional")}
                </p>

                <div className="flex min-h-[42px] items-center justify-between gap-3 border border-gray-100 px-3">
                  <span className="min-w-0 truncate text-xs text-gray-500">
                    {fileName || t("common.noFileSelected")}
                  </span>

                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={(event) => {
                      const file = event.target.files?.[0];

                      if (file) {
                        setFileName(file.name);
                      }

                      event.target.value = "";
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="shrink-0 text-xs font-medium text-orange-500 hover:text-orange-600"
                  >
                    {fileName
                      ? t("textDialog.replaceFile")
                      : t("textDialog.browseFile")}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between gap-3 px-5 pb-5 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="h-[42px] min-w-[88px] bg-gray-50 px-5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
            >
              {t("common.cancel")}
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="h-[42px] min-w-[112px] bg-orange-400 px-5 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
            >
              {t("common.save")}
            </button>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
