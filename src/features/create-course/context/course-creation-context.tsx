"use client";

import { createContext, useCallback, useContext, useMemo } from "react";
import type { ReactNode } from "react";

import {
  advanceInformationInitialValues,
  initialInstructorIds,
} from "../data/course-options";

import {
  defaultCourseValues,
  type CourseAdvanceInformationFormValues,
  type CourseFormValues,
  type PublishCourseFormValues,
} from "../schemas/course-schema";

import type { CurriculumSection } from "../types/course-types";

import { useSessionStorage } from "../hooks/use-session-storage";

const STORAGE_KEY = "e-tutor:create-course:draft:v1";

interface CourseCreationDraft {
  basicInformation: CourseFormValues;
  advanceInformation: CourseAdvanceInformationFormValues;
  curriculum: CurriculumSection[] | null;
  publishInformation: PublishCourseFormValues;
  selectedInstructorIds: string[];
}

interface CourseCreationContextValue extends CourseCreationDraft {
  isDraftHydrated: boolean;
  setBasicInformation: (values: CourseFormValues) => void;
  setAdvanceInformation: (values: CourseAdvanceInformationFormValues) => void;
  setCurriculum: (sections: CurriculumSection[]) => void;
  setPublishInformation: (values: PublishCourseFormValues) => void;
  setSelectedInstructorIds: (ids: string[]) => void;
}

interface CourseCreationProviderProps {
  children: ReactNode;
}

const createInitialDraft = (): CourseCreationDraft => ({
  basicInformation: defaultCourseValues,
  advanceInformation: advanceInformationInitialValues,
  curriculum: null,
  publishInformation: {
    welcomeMessage: "",
    congratulationsMessage: "",
  },
  selectedInstructorIds: initialInstructorIds,
});

// File objects are not JSON-serializable.
// Persist the other fields and restore files as null.
const serializeDraft = (draft: CourseCreationDraft): string =>
  JSON.stringify({
    ...draft,
    advanceInformation: {
      ...draft.advanceInformation,
      thumbnail: null,
      trailer: null,
    },
  });

const deserializeDraft = (storedValue: string): CourseCreationDraft => {
  const parsed = JSON.parse(storedValue) as Partial<CourseCreationDraft>;
  const initialDraft = createInitialDraft();

  return {
    ...initialDraft,
    ...parsed,

    basicInformation: {
      ...initialDraft.basicInformation,
      ...parsed.basicInformation,
    },

    advanceInformation: {
      ...initialDraft.advanceInformation,
      ...parsed.advanceInformation,
      thumbnail: null,
      trailer: null,
    },

    publishInformation: {
      ...initialDraft.publishInformation,
      ...parsed.publishInformation,
    },

    selectedInstructorIds:
      parsed.selectedInstructorIds ?? initialDraft.selectedInstructorIds,

    curriculum: parsed.curriculum ?? initialDraft.curriculum,
  };
};

const CourseCreationContext = createContext<CourseCreationContextValue | null>(
  null,
);

export function CourseCreationProvider({
  children,
}: CourseCreationProviderProps) {
  const {
    value: draft,
    setValue: setDraft,
    isHydrated: isDraftHydrated,
  } = useSessionStorage<CourseCreationDraft>(
    STORAGE_KEY,
    createInitialDraft(),
    {
      serialize: serializeDraft,
      deserialize: deserializeDraft,
    },
  );

  const setBasicInformation = useCallback(
    (values: CourseFormValues) => {
      setDraft((current) => ({
        ...current,
        basicInformation: values,
      }));
    },
    [setDraft],
  );

  const setAdvanceInformation = useCallback(
    (values: CourseAdvanceInformationFormValues) => {
      setDraft((current) => ({
        ...current,
        advanceInformation: values,
      }));
    },
    [setDraft],
  );

  const setCurriculum = useCallback(
    (sections: CurriculumSection[]) => {
      setDraft((current) => ({
        ...current,
        curriculum: sections,
      }));
    },
    [setDraft],
  );

  const setPublishInformation = useCallback(
    (values: PublishCourseFormValues) => {
      setDraft((current) => ({
        ...current,
        publishInformation: values,
      }));
    },
    [setDraft],
  );

  const setSelectedInstructorIds = useCallback(
    (ids: string[]) => {
      setDraft((current) => ({
        ...current,
        selectedInstructorIds: ids,
      }));
    },
    [setDraft],
  );

  const contextValue = useMemo(
    () => ({
      ...draft,
      isDraftHydrated,
      setBasicInformation,
      setAdvanceInformation,
      setCurriculum,
      setPublishInformation,
      setSelectedInstructorIds,
    }),
    [
      draft,
      isDraftHydrated,
      setBasicInformation,
      setAdvanceInformation,
      setCurriculum,
      setPublishInformation,
      setSelectedInstructorIds,
    ],
  );

  return (
    <CourseCreationContext.Provider value={contextValue}>
      {children}
    </CourseCreationContext.Provider>
  );
}

export function useCourseCreation() {
  const context = useContext(CourseCreationContext);

  if (!context) {
    throw new Error(
      "useCourseCreation must be used within CourseCreationProvider",
    );
  }

  return context;
}
