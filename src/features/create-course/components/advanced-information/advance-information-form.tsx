"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";

import { MediaUploadField } from "./media-upload-field";
import { CourseDescriptionField } from "./course-description-field";
import { RepeatableTextSection } from "./repeatable-text-section";

import { createCourseAdvanceInformationSchema } from "../../schemas/course-schema";
import { advanceInformationInitialValues } from "../../data/course-options";

import type {
  CourseAdvanceInformationFormValues,
  SubmitAction,
} from "../../types/course-types";

import { useCourseCreation } from "../../context/course-creation-context";

export function AdvanceInformationForm() {
  const t = useTranslations("createCourse");
  const router = useRouter();

  const { advanceInformation, isDraftHydrated, setAdvanceInformation } =
    useCourseCreation();

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
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CourseAdvanceInformationFormValues>({
    resolver: zodResolver(courseAdvanceInformationSchema),
    defaultValues: advanceInformationInitialValues,
    mode: "onBlur",
  });

  useEffect(() => {
    if (isDraftHydrated) {
      reset(advanceInformation);
    }
  }, [isDraftHydrated, advanceInformation, reset]);

  const learnArray = useFieldArray({
    control,
    name: "whatYouWillLearn",
  });

  const audienceArray = useFieldArray({
    control,
    name: "targetAudience",
  });

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
    setAdvanceInformation(values);

    const action = submitAction.current;

    const messages: Record<SubmitAction, string> = {
      save: t("advanced.status.save"),
      preview: t("advanced.status.preview"),
      next: t("advanced.status.next"),
    };

    if (action === "next") {
      router.push("/instructor/create-course/curriculum");
      return;
    }

    setStatus(messages[action]);
  };

  const handlePrevious = () => {
    router.push("/instructor/create-course");
  };

  return (
    <div className="min-h-screen bg-white">
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mx-auto w-full"
      >
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
              disabled={!isDraftHydrated || isSubmitting}
            >
              {t("common.save")}
            </Button>

            <Button
              type="button"
              size="sm"
              variant="ghost"
              className="text-orange-400 hover:bg-orange-50 hover:text-orange-500"
              onClick={() => runSubmit("preview")}
              disabled={!isDraftHydrated || isSubmitting}
            >
              {t("common.saveAndPreview")}
            </Button>
          </div>
        </header>

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

        <CourseDescriptionField
          control={control}
          getValues={getValues}
          setValue={setValue}
          error={errors.courseDescription?.message}
        />

        <RepeatableTextSection
          title={t("advanced.whatYouWillLearn")}
          name="whatYouWillLearn"
          fields={learnArray.fields}
          register={register}
          watch={watch}
          onAdd={() => learnArray.append({ value: "" })}
          onRemove={learnArray.remove}
        />

        <RepeatableTextSection
          title={t("advanced.targetAudience")}
          name="targetAudience"
          fields={audienceArray.fields}
          register={register}
          watch={watch}
          onAdd={() => audienceArray.append({ value: "" })}
          onRemove={audienceArray.remove}
        />

        <RepeatableTextSection
          title={t("advanced.courseRequirements")}
          name="courseRequirements"
          fields={requirementsArray.fields}
          register={register}
          watch={watch}
          onAdd={() => requirementsArray.append({ value: "" })}
          onRemove={requirementsArray.remove}
        />

        <footer className="flex flex-col-reverse gap-3 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <Button
            type="button"
            variant="outline"
            size="default"
            className="w-full rounded-none border-gray-100 text-gray-600 sm:w-auto"
            onClick={handlePrevious}
          >
            {t("common.previous")}
          </Button>

          <Button
            type="button"
            size="default"
            className="w-full rounded-none sm:w-auto"
            disabled={!isDraftHydrated || isSubmitting}
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
