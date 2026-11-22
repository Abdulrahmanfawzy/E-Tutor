import type { LectureContentType } from "../types/course-types";

export const contentTypeKeys: Record<LectureContentType, string> = {
  Video: "contentTypes.video",
  "Attach File": "contentTypes.attachFile",
  Captions: "contentTypes.captions",
  Description: "contentTypes.description",
  "Lecture Notes": "contentTypes.lectureNotes",
};
