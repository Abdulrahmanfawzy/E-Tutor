"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import {
  Controller,
  type Control,
  type UseFormGetValues,
  type UseFormSetValue,
} from "react-hook-form";

import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link2,
  List,
  ListOrdered,
} from "lucide-react";
import { CourseAdvanceInformationFormValues } from "../../types/course-types";


type CourseDescriptionFieldProps = {
  control: Control<CourseAdvanceInformationFormValues>;
  getValues: UseFormGetValues<CourseAdvanceInformationFormValues>;
  setValue: UseFormSetValue<CourseAdvanceInformationFormValues>;
  error?: string;
};

export function CourseDescriptionField({
  control,
  getValues,
  setValue,
  error,
}: CourseDescriptionFieldProps) {
  const t = useTranslations("createCourse");
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const applyFormatting = (prefix: string, suffix = "") => {
    const textarea = descriptionRef.current;

    if (!textarea) return;

    const currentValue = getValues("courseDescription");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const selectedText =
      currentValue.slice(start, end) || t("advanced.descriptionFallback");

    const replacement = `${prefix}${selectedText}${suffix}`;

    const nextValue =
      currentValue.slice(0, start) + replacement + currentValue.slice(end);

    setValue("courseDescription", nextValue, {
      shouldDirty: true,
      shouldValidate: true,
    });

    requestAnimationFrame(() => {
      textarea.focus();

      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + selectedText.length,
      );
    });
  };

  return (
    <section className="border-b border-gray-100 px-5 py-6 sm:px-7">
      <label
        htmlFor="course-description"
        className="mb-3 block text-sm font-medium text-gray-900"
      >
        {t("advanced.descriptionLabel")}
      </label>

      <Controller
        control={control}
        name="courseDescription"
        render={({ field }) => (
          <div className="border border-gray-100">
            <textarea
              id="course-description"
              ref={(element) => {
                field.ref(element);
                descriptionRef.current = element;
              }}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              rows={7}
              maxLength={5000}
              placeholder={t("advanced.descriptionPlaceholder")}
              className="block min-h-32 w-full resize-y border-0 bg-white px-3 py-3 text-xs leading-6 text-gray-700 outline-none placeholder:text-gray-400 focus:ring-0"
            />

            {/* Formatting toolbar */}
            <div className="flex min-h-10 flex-wrap items-center gap-1 border-t border-gray-100 px-2 py-1">
              <button
                type="button"
                aria-label={t("advanced.toolbar.bold")}
                title={t("advanced.toolbar.bold")}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => applyFormatting("**", "**")}
                className="flex size-7 items-center justify-center bg-gray-50 text-gray-700 hover:bg-gray-100"
              >
                <Bold size={14} />
              </button>

              <button
                type="button"
                aria-label={t("advanced.toolbar.italic")}
                title={t("advanced.toolbar.italic")}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => applyFormatting("*", "*")}
                className="flex size-7 items-center justify-center text-gray-500 hover:bg-gray-100"
              >
                <Italic size={14} />
              </button>

              <button
                type="button"
                aria-label={t("advanced.toolbar.underline")}
                title={t("advanced.toolbar.underline")}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => applyFormatting("__", "__")}
                className="flex size-7 items-center justify-center text-gray-500 hover:bg-gray-100"
              >
                <Underline size={14} />
              </button>

              <button
                type="button"
                aria-label={t("advanced.toolbar.strikethrough")}
                title={t("advanced.toolbar.strikethrough")}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => applyFormatting("~~", "~~")}
                className="flex size-7 items-center justify-center text-gray-500 hover:bg-gray-100"
              >
                <Strikethrough size={14} />
              </button>

              <button
                type="button"
                aria-label={t("advanced.toolbar.insertLink")}
                title={t("advanced.toolbar.insertLink")}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => applyFormatting("[", "](https://)")}
                className="flex size-7 items-center justify-center text-gray-500 hover:bg-gray-100"
              >
                <Link2 size={14} />
              </button>

              <button
                type="button"
                aria-label={t("advanced.toolbar.bulletedList")}
                title={t("advanced.toolbar.bulletedList")}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => applyFormatting("- ", "")}
                className="flex size-7 items-center justify-center text-gray-500 hover:bg-gray-100"
              >
                <List size={14} />
              </button>

              <button
                type="button"
                aria-label={t("advanced.toolbar.numberedList")}
                title={t("advanced.toolbar.numberedList")}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => applyFormatting("1. ", "")}
                className="flex size-7 items-center justify-center text-gray-500 hover:bg-gray-100"
              >
                <ListOrdered size={14} />
              </button>
            </div>
          </div>
        )}
      />

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </section>
  );
}
