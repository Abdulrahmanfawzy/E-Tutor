"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import CourseMessagesForm from "./course-messages-form";
import InstructorSelector from "./instructor-selector";
import PublishCourseFooter from "./publish-course-footer";
import PublishCourseHeader from "./publish-course-header";
import {
  createPublishCourseSchema,
  PublishCourseFormValues,
} from "../../schemas/course-schema";
import { initialInstructorIds, instructors } from "../../data/course-options";
import { Instructor } from "../../types/course-types";




export default function PublishCoursePage() {
  const t = useTranslations("createCourse");
  const router = useRouter();

  const [selectedInstructorIds, setSelectedInstructorIds] =
    useState<string[]>(initialInstructorIds);

  const [feedback, setFeedback] = useState("");

  const [preview, setPreview] = useState<PublishCourseFormValues | null>(null);

  const publishCourseSchema = useMemo(
    () => createPublishCourseSchema(t),
    [t],
  );

  const selectedInstructors = useMemo(
    () =>
      instructors.filter((instructor) =>
        selectedInstructorIds.includes(instructor.id),
      ),
    [selectedInstructorIds],
  );

  const { control, handleSubmit } = useForm<PublishCourseFormValues>({
    resolver: zodResolver(publishCourseSchema),
    defaultValues: {
      welcomeMessage: "",
      congratulationsMessage: "",
    },
  });

  const handleSave = handleSubmit(() => {
    setPreview(null);
    setFeedback(t("publish.feedback.saved"));
  });

  const handleSaveAndPreview = handleSubmit((values) => {
    setPreview(values);
    setFeedback(t("publish.feedback.previewGenerated"));
  });

  const handleReview = (values: PublishCourseFormValues) => {
    setPreview(null);

    setFeedback(
      t("publish.feedback.submitted", {
        count:
          values.welcomeMessage.length + values.congratulationsMessage.length,
      }),
    );
  };

  const addInstructor = (instructor: Instructor) => {
    setSelectedInstructorIds((current) =>
      current.includes(instructor.id) ? current : [...current, instructor.id],
    );
  };

  const removeInstructor = (instructorId: string) => {
    setSelectedInstructorIds((current) =>
      current.filter((id) => id !== instructorId),
    );
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <PublishCourseHeader
        onSave={handleSave}
        onSaveAndPreview={handleSaveAndPreview}
      />

      <form
        onSubmit={handleSubmit(handleReview)}
        className="flex flex-1 flex-col"
        noValidate
      >
        <div className="space-y-10 px-5 pt-10 sm:px-10">
          <CourseMessagesForm control={control} />

          <InstructorSelector
            selectedInstructors={selectedInstructors}
            onAdd={addInstructor}
            onRemove={removeInstructor}
          />

          {preview && (
            <section
              aria-label={t("publish.preview.ariaLabel")}
              className="max-w-4xl border border-gray-100 bg-gray-50 p-5"
            >
              <h2 className="text-base font-semibold text-gray-900">
                {t("publish.preview.title")}
              </h2>

              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {t("publish.preview.welcome")}
                  </h3>

                  <p className="mt-2 whitespace-pre-wrap text-sm text-gray-600">
                    {preview.welcomeMessage || t("publish.preview.noWelcome")}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {t("publish.preview.congratulations")}
                  </h3>

                  <p className="mt-2 whitespace-pre-wrap text-sm text-gray-600">
                    {preview.congratulationsMessage ||
                      t("publish.preview.noCongratulations")}
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>

        {feedback && (
          <p
            role="status"
            aria-live="polite"
            className="mx-5 mt-6 text-sm text-gray-600 sm:mx-10"
          >
            {feedback}
          </p>
        )}

        <PublishCourseFooter onPreviousStep={() => router.back()} />
      </form>
    </main>
  );
}
