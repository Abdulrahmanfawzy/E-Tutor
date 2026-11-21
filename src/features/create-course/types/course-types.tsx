import type { z } from "zod";

import type { createCourseAdvanceInformationSchema } from "../schemas/course-schema";

export type CourseAdvanceInformationFormValues = z.infer<
  ReturnType<typeof createCourseAdvanceInformationSchema>
>;

export type RepeatedFieldName =
  | "whatYouWillLearn"
  | "targetAudience"
  | "courseRequirements";

export type SubmitAction = "save" | "preview" | "next";

export interface Instructor {
  id: string;
  username: string;
  roleKey: string;
  avatar: string;
}

export type LectureUploadContentType = "Video" | "Attach File";

export type LectureTextContentType =
  | "Captions"
  | "Description"
  | "Lecture Notes";

export type LectureContentType =
  | LectureUploadContentType
  | LectureTextContentType;

export interface CurriculumLecture {
  id: string;
  title: string;
  contentType?: LectureUploadContentType;
  contentValue?: string;

  // Independently saved text content.
  captions?: string;
  description?: string;
  lectureNotes?: string;
  lectureNotesFileName?: string;
}

export interface CurriculumSection {
  id: string;
  title: string;
  lectures: CurriculumLecture[];
}
