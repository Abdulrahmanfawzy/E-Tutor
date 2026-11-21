"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";

interface CurriculumUploadDialogProps {
  open: boolean;
  contentType: "Video" | "Attach File";
  onOpenChange: (open: boolean) => void;
  onConfirm: (file: File) => void;
}

const MAX_VIDEO_SIZE = 4 * 1024 * 1024 * 1024;

export default function CurriculumUploadDialog({
  open,
  contentType,
  onOpenChange,
  onConfirm,
}: CurriculumUploadDialogProps) {
  const t = useTranslations("createCourse");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const isVideo = contentType === "Video";

  useEffect(() => {
    if (!open) {
      setSelectedFile(null);
      setError("");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [open]);

  const handleFileSelect = (file?: File) => {
    if (!file) return;

    setError("");
    setSelectedFile(null);

    if (isVideo && !file.type.startsWith("video/")) {
      setError(t("uploadDialog.errors.invalidVideo"));
      return;
    }

    if (isVideo && file.size > MAX_VIDEO_SIZE) {
      setError(t("uploadDialog.errors.videoTooLarge"));
      return;
    }

    setSelectedFile(file);
  };

  const handleConfirm = () => {
    if (!selectedFile) return;

    onConfirm(selectedFile);
    onOpenChange(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const file = event.dataTransfer.files?.[0];

    handleFileSelect(file);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-gray-900/80" />

        <Dialog.Popup
          aria-describedby="curriculum-upload-description"
          className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-32px)] max-w-[557px] -translate-x-1/2 -translate-y-1/2 border border-gray-100 bg-white text-gray-900 shadow-xl outline-none"
        >
          {/* Header */}
          <div className="flex h-[45px] items-center justify-between border-b border-gray-100 px-4">
            <Dialog.Title className="text-sm font-medium text-gray-900">
              {isVideo
                ? t("uploadDialog.videoTitle")
                : t("uploadDialog.attachFileTitle")}
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
            {isVideo ? (
              <>
                <div className="flex h-[42px] w-full border border-gray-100">
                  <div
                    className="flex min-w-0 flex-1 items-center truncate px-4 text-sm text-gray-400"
                    title={selectedFile?.name}
                  >
                    {selectedFile?.name || t("uploadDialog.uploadFiles")}
                  </div>

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="h-full shrink-0 bg-gray-100 px-5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200"
                  >
                    {t("uploadDialog.uploadFile")}
                  </button>
                </div>

                <p
                  id="curriculum-upload-description"
                  className="mt-3 text-xs text-gray-600"
                >
                  <span className="font-semibold text-gray-900">
                    {t("uploadDialog.noteLabel")}
                  </span>{" "}
                  {t("uploadDialog.note")}
                </p>
              </>
            ) : (
              <div
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleDrop}
                className="flex h-[87px] w-full flex-col items-center justify-center border border-gray-100 bg-white"
              >
                {selectedFile ? (
                  <>
                    <p
                      className="max-w-[90%] truncate text-sm font-medium text-gray-900"
                      title={selectedFile.name}
                    >
                      {selectedFile.name}
                    </p>

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="mt-1 text-xs text-purple-500 hover:underline"
                    >
                      {t("uploadDialog.replaceFile")}
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-medium text-gray-900">
                      {t("uploadDialog.attachFile")}
                    </p>

                    <p className="mt-2 text-xs text-gray-500">
                      {t("uploadDialog.dragDrop")}{" "}
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="font-medium text-gray-600 hover:text-orange-500"
                      >
                        {t("uploadDialog.browseFile")}
                      </button>
                    </p>
                  </>
                )}
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept={isVideo ? "video/*" : undefined}
              className="sr-only"
              tabIndex={-1}
              aria-label={
                isVideo
                  ? t("uploadDialog.chooseVideoFile")
                  : t("uploadDialog.chooseAttachment")
              }
              onChange={(event) => {
                handleFileSelect(event.target.files?.[0]);
                event.target.value = "";
              }}
            />

            {error && (
              <p role="alert" className="mt-2 text-xs text-red-500">
                {error}
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between gap-3 px-5 pb-5 pt-5">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="h-[42px] min-w-[88px] bg-gray-50 px-5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
            >
              {t("common.cancel")}
            </button>

            <button
              type="button"
              disabled={!selectedFile}
              onClick={handleConfirm}
              className="h-[42px] min-w-[112px] bg-orange-400 px-5 text-sm font-semibold text-white transition-colors hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-orange-100 disabled:text-white"
            >
              {isVideo
                ? t("uploadDialog.uploadVideo")
                : t("uploadDialog.attachFile")}
            </button>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
