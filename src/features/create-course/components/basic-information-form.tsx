"use client";

import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "@/i18n/navigation";

import CourseFormField from "./course-form-field";

import {
  courseCategories,
  courseSubcategories,
  courseLanguages,
  courseLevels,
  durationUnits,
} from "../data/course-options";

import {
  createCourseSchema,
  defaultCourseValues,
  type CourseFormValues,
} from "../schemas/course-schema";

import { useCourseCreation } from "../context/course-creation-context";

const inputClassName =
  "h-12 w-full rounded-none border-gray-100 bg-white px-4 text-sm shadow-none placeholder:text-gray-500 focus-visible:border-orange-400 focus-visible:ring-0";

const selectTriggerClassName =
  "h-12 w-full rounded-none border-gray-100 bg-white px-4 text-sm font-normal shadow-none focus-visible:border-orange-400 focus-visible:ring-0";

export default function BasicInformationForm() {
  const t = useTranslations("createCourse");
  const router = useRouter();

  const { basicInformation, isDraftHydrated, setBasicInformation, clearDraft } =
    useCourseCreation();

  const [status, setStatus] = useState("");

  const courseSchema = useMemo(() => createCourseSchema(t), [t]);

  const {
    register,
    control,
    watch,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CourseFormValues>({
    resolver: zodResolver(courseSchema),
    defaultValues: defaultCourseValues,
    mode: "onTouched",
  });

  useEffect(() => {
    if (isDraftHydrated) {
      reset(basicInformation);
    }
  }, [isDraftHydrated, basicInformation, reset]);

  const title = watch("title");
  const subtitle = watch("subtitle");

  const onSave = (values: CourseFormValues) => {
    setBasicInformation(values);
    setStatus(t("basic.status.saved"));
  };

  const handleSave = () => {
    setStatus("");
    void handleSubmit(onSave)();
  };

  const handleSaveAndPreview = () => {
    setStatus("");
    void handleSubmit((values) => {
      setBasicInformation(values);
      setStatus(t("basic.status.previewNotConnected"));
    })();
  };

  const handleCancel = () => {
    clearDraft();
    reset(defaultCourseValues);
    setStatus("");
  };

  const handleSaveAndNext = handleSubmit((values) => {
    setBasicInformation(values);
    setStatus("");
    router.push("/instructor/create-course/advanced");
  });

  return (
    <section className="bg-white">
      <div className="flex flex-col gap-4 border-b border-gray-100 px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          {t("basic.heading")}
        </h1>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            type="button"
            variant="primary-soft"
            size="lg"
            className="rounded-none px-6"
            onClick={handleSave}
            disabled={!isDraftHydrated || isSubmitting}
          >
            {t("common.save")}
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="lg"
            className="rounded-none text-orange-400 hover:bg-orange-50 hover:text-orange-500"
            onClick={handleSaveAndPreview}
            disabled={!isDraftHydrated || isSubmitting}
          >
            {t("common.saveAndPreview")}
          </Button>
        </div>
      </div>

      <form
        id="basic-information-form"
        onSubmit={handleSaveAndNext}
        noValidate
        className="flex flex-col gap-6 px-6 py-8 lg:px-10 lg:py-9"
      >
        <CourseFormField
          label={t("basic.title")}
          htmlFor="course-title"
          error={errors.title?.message}
        >
          <div className="relative">
            <Input
              id="course-title"
              {...register("title")}
              maxLength={80}
              placeholder={t("basic.titlePlaceholder")}
              aria-invalid={!!errors.title}
              className={`${inputClassName} pr-20`}
            />

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-600">
              {title.length}/80
            </span>
          </div>
        </CourseFormField>

        <CourseFormField
          label={t("basic.subtitle")}
          htmlFor="course-subtitle"
          error={errors.subtitle?.message}
        >
          <div className="relative">
            <Input
              id="course-subtitle"
              {...register("subtitle")}
              maxLength={120}
              placeholder={t("basic.subtitlePlaceholder")}
              aria-invalid={!!errors.subtitle}
              className={`${inputClassName} pr-20`}
            />

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-600">
              {subtitle.length}/120
            </span>
          </div>
        </CourseFormField>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <CourseFormField
            label={t("basic.category")}
            htmlFor="course-category"
            error={errors.category?.message}
          >
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="course-category"
                    aria-invalid={!!errors.category}
                    className={selectTriggerClassName}
                  >
                    <SelectValue placeholder={t("common.select")} />
                  </SelectTrigger>

                  <SelectContent>
                    {courseCategories.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {t(option.labelKey)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </CourseFormField>

          <CourseFormField
            label={t("basic.subcategory")}
            htmlFor="course-subcategory"
            error={errors.subcategory?.message}
          >
            <Controller
              name="subcategory"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="course-subcategory"
                    aria-invalid={!!errors.subcategory}
                    className={selectTriggerClassName}
                  >
                    <SelectValue placeholder={t("common.select")} />
                  </SelectTrigger>

                  <SelectContent>
                    {courseSubcategories.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {t(option.labelKey)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </CourseFormField>
        </div>

        <CourseFormField
          label={t("basic.topic")}
          htmlFor="course-topic"
          error={errors.topic?.message}
        >
          <Input
            id="course-topic"
            {...register("topic")}
            placeholder={t("basic.topicPlaceholder")}
            aria-invalid={!!errors.topic}
            className={inputClassName}
          />
        </CourseFormField>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <CourseFormField
            label={t("basic.language")}
            htmlFor="course-language"
            error={errors.language?.message}
          >
            <Controller
              name="language"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="course-language"
                    aria-invalid={!!errors.language}
                    className={selectTriggerClassName}
                  >
                    <SelectValue placeholder={t("common.select")} />
                  </SelectTrigger>

                  <SelectContent>
                    {courseLanguages.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {t(option.labelKey)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </CourseFormField>

          <CourseFormField
            label={t("basic.subtitleLanguage")}
            htmlFor="subtitle-language"
            optional
            error={errors.subtitleLanguage?.message}
          >
            <Controller
              name="subtitleLanguage"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="subtitle-language"
                    className={selectTriggerClassName}
                  >
                    <SelectValue placeholder={t("common.select")} />
                  </SelectTrigger>

                  <SelectContent>
                    {courseLanguages.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {t(option.labelKey)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </CourseFormField>

          <CourseFormField
            label={t("basic.level")}
            htmlFor="course-level"
            error={errors.level?.message}
          >
            <Controller
              name="level"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="course-level"
                    aria-invalid={!!errors.level}
                    className={selectTriggerClassName}
                  >
                    <SelectValue placeholder={t("common.select")} />
                  </SelectTrigger>

                  <SelectContent>
                    {courseLevels.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {t(option.labelKey)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </CourseFormField>

          <CourseFormField
            label={t("basic.duration")}
            htmlFor="course-duration"
            error={errors.duration?.message || errors.durationUnit?.message}
          >
            <div className="flex h-12 w-full items-center border border-gray-100">
              <Input
                id="course-duration"
                type="number"
                min="1"
                {...register("duration")}
                placeholder={t("basic.durationPlaceholder")}
                aria-invalid={!!errors.duration}
                className="h-full min-w-0 flex-1 rounded-none border-0 px-4 shadow-none focus-visible:ring-0"
              />

              <Controller
                name="durationUnit"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      aria-label={t("basic.durationUnitAria")}
                      className="h-full w-24 shrink-0 rounded-none border-0 px-2 shadow-none focus-visible:ring-0"
                    >
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      {durationUnits.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {t(option.labelKey)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </CourseFormField>
        </div>

        {status && (
          <p role="status" className="text-sm text-green-600">
            {status}
          </p>
        )}

        <div className="flex flex-col-reverse gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="h-14 w-full rounded-none border-gray-100 px-8 text-gray-600 sm:w-auto"
            onClick={handleCancel}
          >
            {t("common.cancel")}
          </Button>

          <Button
            type="submit"
            size="lg"
            className="h-14 w-full rounded-none px-8 sm:w-auto"
            disabled={!isDraftHydrated || isSubmitting}
          >
            {t("common.saveAndNext")}
          </Button>
        </div>
      </form>
    </section>
  );
}
