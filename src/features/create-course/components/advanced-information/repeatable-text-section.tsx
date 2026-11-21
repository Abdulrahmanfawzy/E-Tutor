"use client";

import type { UseFormRegister, UseFormWatch, FieldPath } from "react-hook-form";
import { useTranslations } from "next-intl";

import { Plus, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { CourseAdvanceInformationFormValues, RepeatedFieldName } from "../../types/course-types";

type RepeatableTextSectionProps = {
  title: string;
  name: RepeatedFieldName;
  fields: Array<{ id: string; value: string }>;
  register: UseFormRegister<CourseAdvanceInformationFormValues>;
  watch: UseFormWatch<CourseAdvanceInformationFormValues>;
  onAdd: () => void;
  onRemove: (index: number) => void;
};

export function RepeatableTextSection({
  title,
  name,
  fields,
  register,
  watch,
  onAdd,
  onRemove,
}: RepeatableTextSectionProps) {
  const t = useTranslations("createCourse");

  const placeholders: Record<RepeatedFieldName, string> = {
    whatYouWillLearn: t("advanced.whatYouWillLearnPlaceholder"),
    targetAudience: t("advanced.targetAudiencePlaceholder"),
    courseRequirements: t("advanced.courseRequirementsPlaceholder"),
  };

  return (
    <section className="border-b border-gray-100 px-5 py-6 sm:px-7">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-sm font-medium text-gray-900">
          {title} ({fields.length}/8)
        </h2>

        <button
          type="button"
          onClick={onAdd}
          disabled={fields.length >= 8}
          className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-orange-400 transition-colors hover:text-orange-500 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Plus size={14} aria-hidden="true" />
          {t("common.addNew")}
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {fields.map((field, index) => {
          const fieldName =
            `${name}.${index}.value` as FieldPath<CourseAdvanceInformationFormValues>;

          const value = (watch(fieldName) as string | undefined) ?? "";

          return (
            <div key={field.id}>
              <label
                htmlFor={`${name}-${index}`}
                className="mb-1.5 block text-label-xs font-medium text-gray-600"
              >
                {String(index + 1).padStart(2, "0")}
              </label>

              <div className="relative">
                <Input
                  id={`${name}-${index}`}
                  maxLength={120}
                  placeholder={placeholders[name]}
                  className="h-9 rounded-none border-gray-100 bg-white pr-20 text-xs shadow-none placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-orange-300"
                  aria-describedby={`${name}-${index}-count`}
                  {...register(fieldName)}
                />

                <span
                  id={`${name}-${index}-count`}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-label-sm tabular-nums text-gray-500"
                >
                  {value.length}/120
                </span>

                {index >= 4 && (
                  <button
                    type="button"
                    aria-label={t("common.removeItem", { index: index + 1 })}
                    onClick={() => onRemove(index)}
                    className="absolute -right-8 top-1/2 hidden -translate-y-1/2 text-gray-400 hover:text-red-500 sm:inline-flex"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
