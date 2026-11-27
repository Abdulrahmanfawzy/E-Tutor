"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";

interface CurriculumVideoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpload: (fileName: string) => void;
}

const MAX_FILE_SIZE = 4 * 1024 * 1024 * 1024;
const MIN_VIDEO_HEIGHT = 720;

export default function CurriculumVideoDialog({
  open,
  onOpenChange,
  onUpload,
}: CurriculumVideoDialogProps) {
  const t = useTranslations("createCourse");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setSelectedFile(null);
      setIsUploaded(false);
      setError("");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [open]);

  const validateVideoResolution = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      const objectUrl = URL.createObjectURL(file);

      video.preload = "metadata";

      video.onloadedmetadata = () => {
        const isValid = video.videoHeight >= MIN_VIDEO_HEIGHT;

        URL.revokeObjectURL(objectUrl);
        resolve(isValid);
      };

      video.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        resolve(false);
      };

      video.src = objectUrl;
    });
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setError("");
    setSelectedFile(null);
    setIsUploaded(false);

    if (!file.type.startsWith("video/")) {
      setError(t("videoDialog.errors.invalidVideo"));
      event.target.value = "";
      return;
    }

    if (file.size >= MAX_FILE_SIZE) {
      setError(t("videoDialog.errors.videoTooLarge"));
      event.target.value = "";
      return;
    }

    const hasValidResolution = await validateVideoResolution(file);

    if (!hasValidResolution) {
      setError(t("videoDialog.errors.lowResolution"));
      event.target.value = "";
      return;
    }

    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile || isUploaded) return;

    onUpload(selectedFile.name);
    setIsUploaded(true);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/80" />

        <Dialog.Popup
          aria-describedby="lecture-video-description"
          className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-[648px] -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl outline-none"
        >
          {/* Dialog Header */}
          <div className="flex h-[54px] items-center justify-between border-b border-gray-100 px-[22px]">
            <Dialog.Title className="text-sm font-semibold text-gray-900">
              {t("videoDialog.title")}
            </Dialog.Title>

            <button
              type="button"
              aria-label={t("common.closeDialog")}
              onClick={() => onOpenChange(false)}
              className="flex size-7 items-center justify-center text-gray-400 transition-colors hover:text-gray-900"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* File Upload */}
          <div className="px-[22px] pt-6">
            <div className="flex h-[48px] w-full border border-gray-100">
              <div className="flex min-w-0 flex-1 items-center overflow-hidden px-4">
                <span
                  className={`truncate text-sm ${
                    selectedFile ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {selectedFile?.name || t("videoDialog.uploadFiles")}
                </span>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleFileChange}
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex h-full w-[133px] shrink-0 items-center justify-center bg-gray-100 px-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-200"
              >
                {t("videoDialog.uploadFile")}
              </button>
            </div>

            {/* File Requirements */}
            <Dialog.Description
              id="lecture-video-description"
              className="mt-[16px] text-xs leading-5 text-gray-600"
            >
              <span className="font-semibold text-gray-900">
                {t("videoDialog.noteLabel")}
              </span>{" "}
              {t("videoDialog.note")}
            </Dialog.Description>

            {error && (
              <p role="alert" className="mt-2 text-xs text-red-500">
                {error}
              </p>
            )}
          </div>

          {/* Dialog Footer */}
          <div className="flex items-center justify-between gap-3 px-[22px] pb-6 pt-6">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="flex h-[48px] min-w-[102px] items-center justify-center bg-gray-50 px-5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
            >
              {t("common.cancel")}
            </button>

            <button
              type="button"
              disabled={!selectedFile || isUploaded}
              onClick={handleUpload}
              className="flex h-[48px] min-w-[153px] items-center justify-center bg-orange-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-200 disabled:text-white"
            >
              {t("videoDialog.uploadVideo")}
            </button>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
