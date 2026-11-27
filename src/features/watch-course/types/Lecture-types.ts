export interface TextSegment {
  text: string;
  bold?: boolean;
}

export type ContentBlock =
  | { type: "paragraph"; segments: TextSegment[] }
  | { type: "list"; items: TextSegment[][] };

export interface Attachment {
  id: string;
  name: string;
  size: string;
  url: string;
}

export interface LectureDetails {
  watchersCount: number;
  watcherAvatars: string[];
  lastUpdated: string;
  commentsCount: number;
  description: string[];
  notes: ContentBlock[];
  notesUrl: string;
  attachments: Attachment[];
}