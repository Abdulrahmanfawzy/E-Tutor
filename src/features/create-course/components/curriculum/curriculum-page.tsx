"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { X } from "lucide-react";

import CurriculumFooter from "./curriculum-footer";
import CurriculumHeader from "./curriculum-header";
import CurriculumSection from "./curriculum-section";

import { getInitialCurriculum } from "../../data/course-options";
import { contentTypeKeys } from "../../data/content-types";

import type {
  CurriculumSection as CurriculumSectionType,
  LectureContentType,
} from "../../types/course-types";

import { useCourseCreation } from "../../context/course-creation-context";

function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export default function CurriculumPage() {
  const t = useTranslations("createCourse");
  const router = useRouter();

  const { curriculum, isDraftHydrated, setCurriculum } = useCourseCreation();

  const initialSections = useMemo(() => getInitialCurriculum(t), [t]);

  const sections = curriculum ?? initialSections;

  const [feedback, setFeedback] = useState("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Initialize curriculum only when no saved curriculum exists.
  useEffect(() => {
    if (isDraftHydrated && curriculum === null) {
      setCurriculum(initialSections);
    }
  }, [isDraftHydrated, curriculum, initialSections, setCurriculum]);

  const totalLectures = useMemo(
    () =>
      sections.reduce((total, section) => total + section.lectures.length, 0),
    [sections],
  );

  const updateSection = (
    sectionId: string,
    updater: (section: CurriculumSectionType) => CurriculumSectionType,
  ) => {
    setCurriculum((current) =>
      (current ?? initialSections).map((section) =>
        section.id === sectionId ? updater(section) : section,
      ),
    );
  };

  const addSection = () => {
    setCurriculum((current) => [
      ...(current ?? initialSections),
      {
        id: createId("section"),
        title: t("curriculum.defaultSectionName"),
        lectures: [],
      },
    ]);

    setFeedback(t("curriculum.feedback.sectionAdded"));
  };

  const deleteSection = (sectionId: string) => {
    setCurriculum((current) =>
      (current ?? initialSections).filter(
        (section) => section.id !== sectionId,
      ),
    );

    setFeedback(t("curriculum.feedback.sectionRemoved"));
  };

  const addLecture = (sectionId: string) => {
    updateSection(sectionId, (section) => ({
      ...section,
      lectures: [
        ...section.lectures,
        {
          id: createId("lecture"),
          title: t("curriculum.defaultLectureName"),
        },
      ],
    }));

    setFeedback(t("curriculum.feedback.lectureAdded"));
  };

  const deleteLecture = (sectionId: string, lectureId: string) => {
    updateSection(sectionId, (section) => ({
      ...section,
      lectures: section.lectures.filter((lecture) => lecture.id !== lectureId),
    }));

    setFeedback(t("curriculum.feedback.lectureRemoved"));
  };

  const renameLecture = (
    sectionId: string,
    lectureId: string,
    title: string,
  ) => {
    updateSection(sectionId, (section) => ({
      ...section,
      lectures: section.lectures.map((lecture) =>
        lecture.id === lectureId ? { ...lecture, title } : lecture,
      ),
    }));
  };

  const updateLectureContent = (
    sectionId: string,
    lectureId: string,
    contentType: LectureContentType,
    value: string,
    fileName?: string,
  ) => {
    updateSection(sectionId, (section) => ({
      ...section,
      lectures: section.lectures.map((lecture) => {
        if (lecture.id !== lectureId) {
          return lecture;
        }

        switch (contentType) {
          case "Captions":
            return {
              ...lecture,
              captions: value,
            };

          case "Description":
            return {
              ...lecture,
              description: value,
            };

          case "Lecture Notes":
            return {
              ...lecture,
              lectureNotes: value,
              lectureNotesFileName: fileName ?? "",
            };

          case "Video":
          case "Attach File":
            return {
              ...lecture,
              contentType,
              contentValue: value,
            };

          default:
            return lecture;
        }
      }),
    }));
  };

  const handleSave = () => {
    setIsPreviewOpen(false);
    setFeedback(t("curriculum.feedback.saved"));
  };

  const handlePreview = () => {
    setFeedback("");
    setIsPreviewOpen(true);
  };

  const handlePrevious = () => {
    router.push("/instructor/create-course/advanced");
  };

  const handleNext = () => {
    // Curriculum is already stored in the shared provider.
    router.push("/instructor/create-course/publish");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-[1134px] flex-col bg-white">
        <CurriculumHeader
          onSave={handleSave}
          onSaveAndPreview={handlePreview}
        />

        <div className="space-y-7 px-5 pt-8 sm:px-8 sm:pt-8">
          <div className="flex flex-col gap-7">
            {sections.map((section, index) => (
              <CurriculumSection
                key={section.id}
                section={section}
                index={index}
                onRename={(title) =>
                  updateSection(section.id, (current) => ({
                    ...current,
                    title,
                  }))
                }
                onDelete={() => deleteSection(section.id)}
                onAddLecture={() => addLecture(section.id)}
                onRenameLecture={(lectureId, title) =>
                  renameLecture(section.id, lectureId, title)
                }
                onDeleteLecture={(lectureId) =>
                  deleteLecture(section.id, lectureId)
                }
                onUpdateLectureContent={(
                  lectureId,
                  contentType,
                  value,
                  fileName,
                ) =>
                  updateLectureContent(
                    section.id,
                    lectureId,
                    contentType,
                    value,
                    fileName,
                  )
                }
              />
            ))}
          </div>

          <button
            type="button"
            onClick={addSection}
            className="flex min-h-[42px] w-full items-center justify-center bg-orange-50 px-4 text-sm font-semibold text-orange-500 transition-colors hover:bg-orange-100"
          >
            {t("curriculum.addSections")}
          </button>
        </div>

        {feedback && (
          <p
            role="status"
            aria-live="polite"
            className="px-5 pt-4 text-sm text-gray-600 sm:px-8"
          >
            {feedback}
          </p>
        )}

        <CurriculumFooter onPrevious={handlePrevious} onNext={handleNext} />
      </div>

      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 p-4"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsPreviewOpen(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="curriculum-preview-title"
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto bg-white p-5 shadow-xl sm:p-7"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2
                  id="curriculum-preview-title"
                  className="text-lg font-semibold text-gray-900"
                >
                  {t("curriculum.preview.title")}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {t("curriculum.preview.summary", {
                    sections: sections.length,
                    lectures: totalLectures,
                  })}
                </p>
              </div>

              <button
                type="button"
                aria-label={t("curriculum.preview.close")}
                onClick={() => setIsPreviewOpen(false)}
                className="flex size-9 items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="space-y-4">
              {sections.map((section, index) => (
                <div key={section.id} className="border border-gray-100 p-4">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {t("curriculum.sectionHeading", {
                      number: String(index + 1).padStart(2, "0"),
                      title: section.title,
                    })}
                  </h3>

                  {section.lectures.length > 0 ? (
                    <ul className="mt-3 space-y-3">
                      {section.lectures.map((lecture) => (
                        <li key={lecture.id} className="text-sm text-gray-600">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span>{lecture.title}</span>

                            {lecture.contentType && (
                              <span className="text-xs text-orange-500">
                                {t(contentTypeKeys[lecture.contentType])}
                              </span>
                            )}
                          </div>

                          {lecture.contentType === "Video" &&
                            lecture.contentValue && (
                              <p className="mt-1 break-all text-xs text-gray-500">
                                {lecture.contentValue}
                              </p>
                            )}

                          {lecture.contentType === "Attach File" &&
                            lecture.contentValue && (
                              <p className="mt-1 text-xs text-gray-500">
                                {lecture.contentValue}
                              </p>
                            )}

                          {lecture.captions && (
                            <p className="mt-2 whitespace-pre-wrap text-xs text-gray-500">
                              <span className="font-medium">
                                {t("curriculum.preview.captions")}{" "}
                              </span>
                              {lecture.captions}
                            </p>
                          )}

                          {lecture.description && (
                            <p className="mt-2 whitespace-pre-wrap text-xs text-gray-500">
                              <span className="font-medium">
                                {t("curriculum.preview.description")}{" "}
                              </span>
                              {lecture.description}
                            </p>
                          )}

                          {(lecture.lectureNotes ||
                            lecture.lectureNotesFileName) && (
                            <div className="mt-2 text-xs text-gray-500">
                              <span className="font-medium">
                                {t("curriculum.preview.lectureNotes")}{" "}
                              </span>

                              {lecture.lectureNotes}

                              {lecture.lectureNotesFileName && (
                                <p className="mt-1 text-orange-500">
                                  {lecture.lectureNotesFileName}
                                </p>
                              )}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm text-gray-500">
                      {t("curriculum.noLecturesAdded")}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="bg-button-primary px-5 py-3 text-sm font-semibold text-white hover:bg-button-primary-hover"
              >
                {t("curriculum.preview.close")}
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
