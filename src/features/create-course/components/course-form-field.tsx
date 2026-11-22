"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";

type CourseFormFieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  optional?: boolean;
};

export default function CourseFormField({
  label,
  htmlFor,
  error,
  children,
  optional = false,
}: CourseFormFieldProps) {
  const t = useTranslations("createCourse");

  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-gray-900">
        {label}

        {optional && (
          <span className="ml-1 text-gray-500">{t("common.optional")}</span>
        )}
      </label>

      {children}

      {error && (
        <p role="alert" className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
