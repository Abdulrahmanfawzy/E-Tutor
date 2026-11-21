"use client";

import { useTranslations } from "next-intl";
import { Controller, type Control } from "react-hook-form";
import { Image as ImageIcon, CirclePlay, Upload } from "lucide-react";
import { CourseAdvanceInformationFormValues } from "../../types/course-types";

type MediaUploadFieldProps = {
  control: Control<CourseAdvanceInformationFormValues>;
  name: "thumbnail" | "trailer";
  title: string;
  description: string;
  accept: string;
  mediaType: "image" | "video";
};

export function MediaUploadField({
  control,
  name,
  title,
  description,
  accept,
  mediaType,
}: MediaUploadFieldProps) {
  const t = useTranslations("createCourse");
  const inputId = `course-${name}`;
  const MediaIcon = mediaType === "image" ? ImageIcon : CirclePlay;

  return (
    <div className="min-w-0">
      <h2 className="mb-4 text-sm font-medium text-gray-900">{title}</h2>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-28 w-full shrink-0 items-center justify-center bg-gray-50 sm:w-40">
          <MediaIcon
            aria-hidden="true"
            className="size-16 text-gray-300"
            strokeWidth={1.5}
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="mb-3 text-xs leading-[1.6] text-gray-500">
            {description}
          </p>

          <Controller
            control={control}
            name={name}
            render={({ field }) => (
              <div className="flex flex-wrap items-center gap-2">
                <input
                  id={inputId}
                  ref={field.ref}
                  type="file"
                  accept={accept}
                  className="sr-only"
                  onBlur={field.onBlur}
                  onChange={(event) =>
                    field.onChange(event.target.files?.[0] ?? null)
                  }
                />

                <label
                  htmlFor={inputId}
                  className="inline-flex h-9 cursor-pointer items-center gap-2 bg-orange-50 px-4 text-xs font-semibold text-orange-400 transition-colors hover:bg-orange-100"
                >
                  {typeof File !== "undefined" && field.value instanceof File
                    ? t("advanced.changeFile")
                    : mediaType === "image"
                      ? t("advanced.uploadImage")
                      : t("advanced.uploadVideo")}

                  <Upload size={15} aria-hidden="true" />
                </label>

                {typeof File !== "undefined" && field.value instanceof File && (
                  <span className="max-w-full truncate text-xs text-gray-500">
                    {field.value.name}
                  </span>
                )}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}
