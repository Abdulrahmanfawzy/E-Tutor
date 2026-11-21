"use client";

import { useTranslations } from "next-intl";
import { Controller, type Control } from "react-hook-form";
import { PublishCourseFormValues } from "../../schemas/course-schema";


interface CourseMessagesFormProps {
  control: Control<PublishCourseFormValues>;
}

const messageFields = [
  {
    name: "welcomeMessage",
    labelKey: "publish.welcomeLabel",
    placeholderKey: "publish.welcomePlaceholder",
  },
  {
    name: "congratulationsMessage",
    labelKey: "publish.congratulationsLabel",
    placeholderKey: "publish.congratulationsPlaceholder",
  },
] as const;

export default function CourseMessagesForm({
  control,
}: CourseMessagesFormProps) {
  const t = useTranslations("createCourse");

  return (
    <section aria-labelledby="course-message-heading">
      <h2
        id="course-message-heading"
        className="mb-7 text-lg font-medium text-gray-900"
      >
        {t("publish.messagesTitle")}
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {messageFields.map((item) => (
          <div key={item.name} className="flex min-w-0 flex-col gap-2">
            <label
              htmlFor={item.name}
              className="text-sm font-normal text-gray-900"
            >
              {t(item.labelKey)}
            </label>

            <Controller
              name={item.name}
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <textarea
                    {...field}
                    id={item.name}
                    rows={4}
                    maxLength={500}
                    placeholder={t(item.placeholderKey)}
                    aria-invalid={Boolean(fieldState.error)}
                    aria-describedby={
                      fieldState.error ? `${item.name}-error` : undefined
                    }
                    className="h-[120px] w-full resize-none border border-gray-100 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-500 focus:border-orange-400 aria-invalid:border-red-400"
                  />

                  {fieldState.error && (
                    <p
                      id={`${item.name}-error`}
                      role="alert"
                      className="text-xs text-red-500"
                    >
                      {fieldState.error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
