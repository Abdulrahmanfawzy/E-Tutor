"use client";

import { useMemo, useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { MediaUploadField } from "./media-upload-field";
import { CourseDescriptionField } from "./course-description-field";
import { RepeatableTextSection } from "./repeatable-text-section";

import { createCourseAdvanceInformationSchema } from "../../schemas/course-schema";

import { advanceInformationInitialValues } from "../../data/course-options";

import type {
  CourseAdvanceInformationFormValues,
  SubmitAction,
} from "../../types/course-types";

export function AdvanceInformationForm() {
  const t = useTranslations("createCourse");
  const formRef = useRef<HTMLFormElement>(null);
  const submitAction = useRef<SubmitAction>("save");

  const [status, setStatus] = useState("");

  const courseAdvanceInformationSchema = useMemo(
    () => createCourseAdvanceInformationSchema(t),
    [t],
  );

  const {
    control,
    register,
    watch,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CourseAdvanceInformationFormValues>({
    resolver: zodResolver(courseAdvanceInformationSchema),
    defaultValues: advanceInformationInitialValues,
    mode: "onBlur",
  });

  // What you will learn
  const learnArray = useFieldArray({
    control,
    name: "whatYouWillLearn",
  });

  // Target audience
  const audienceArray = useFieldArray({
    control,
    name: "targetAudience",
  });

  // Course requirements
  const requirementsArray = useFieldArray({
    control,
    name: "courseRequirements",
  });

  const runSubmit = (action: SubmitAction) => {
    submitAction.current = action;
    setStatus("");
    formRef.current?.requestSubmit();
  };

  const onSubmit = (values: CourseAdvanceInformationFormValues) => {
    void values;

    const messages: Record<SubmitAction, string> = {
      save: t("advanced.status.save"),
      preview: t("advanced.status.preview"),
      next: t("advanced.status.next"),
    };

    setStatus(messages[submitAction.current]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Course creation progress */}

      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mx-auto w-full"
      >
        {/* Page heading */}
        <header className="flex flex-col gap-4 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <h1 className="text-base font-semibold text-gray-900">
            {t("advanced.heading")}
          </h1>

          <div className="flex items-center gap-3">
            <Button
              type="button"
              size="sm"
              variant="primary-soft"
              onClick={() => runSubmit("save")}
            >
              {t("common.save")}
            </Button>

            <Button
              type="button"
              size="sm"
              variant="ghost"
              className="text-orange-400 hover:bg-orange-50 hover:text-orange-500"
              onClick={() => runSubmit("preview")}
            >
              {t("common.saveAndPreview")}
            </Button>
          </div>
        </header>

        {/* Thumbnail and trailer */}
        <section className="grid gap-7 border-b border-gray-100 px-5 py-6 sm:px-7 lg:grid-cols-2 lg:gap-8">
          <MediaUploadField
            control={control}
            name="thumbnail"
            title={t("advanced.thumbnailTitle")}
            description={t("advanced.thumbnailDescription")}
            accept="image/jpeg,image/png"
            mediaType="image"
          />

          <MediaUploadField
            control={control}
            name="trailer"
            title={t("advanced.trailerTitle")}
            description={t("advanced.trailerDescription")}
            accept="video/mp4,video/webm,video/quicktime"
            mediaType="video"
          />
        </section>

        {/* Course description */}
        <CourseDescriptionField
          control={control}
          getValues={getValues}
          setValue={setValue}
          error={errors.courseDescription?.message}
        />

        {/* What you will learn */}
        <RepeatableTextSection
          title={t("advanced.whatYouWillLearn")}
          name="whatYouWillLearn"
          fields={learnArray.fields}
          register={register}
          watch={watch}
          onAdd={() => learnArray.append({ value: "" })}
          onRemove={learnArray.remove}
        />

        {/* Target audience */}
        <RepeatableTextSection
          title={t("advanced.targetAudience")}
          name="targetAudience"
          fields={audienceArray.fields}
          register={register}
          watch={watch}
          onAdd={() => audienceArray.append({ value: "" })}
          onRemove={audienceArray.remove}
        />

        {/* Course requirements */}
        <RepeatableTextSection
          title={t("advanced.courseRequirements")}
          name="courseRequirements"
          fields={requirementsArray.fields}
          register={register}
          watch={watch}
          onAdd={() => requirementsArray.append({ value: "" })}
          onRemove={requirementsArray.remove}
        />

        {/* Form actions */}
        <footer className="flex flex-col-reverse gap-3 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <Button
            type="button"
            variant="outline"
            size="default"
            className="w-full rounded-none border-gray-100 text-gray-600 sm:w-auto"
            onClick={() => setStatus(t("advanced.status.previous"))}
          >
            {t("common.previous")}
          </Button>

          <Button
            type="button"
            size="default"
            className="w-full rounded-none sm:w-auto"
            disabled={isSubmitting}
            onClick={() => runSubmit("next")}
          >
            {t("common.saveAndNext")}
          </Button>
        </footer>

        {status && (
          <p
            role="status"
            aria-live="polite"
            className="mx-5 mb-6 border border-green-100 bg-green-50 px-4 py-3 text-xs text-green-700 sm:mx-7"
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
}