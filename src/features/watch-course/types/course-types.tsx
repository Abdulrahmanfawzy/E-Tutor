export type LectureStatus = "completed" | "playing" | "idle";

export interface Lecture {
  id: string;
  title: string;
  duration: string;
  status: LectureStatus;
}

export interface SectionProgress {
  percent: number;
  finished: number;
  total: number;
}

export interface CourseSection {
  id: string;
  title: string;
  lecturesCount: number;
  duration: string;
  progress?: SectionProgress;
  lectures?: Lecture[];
}

export interface CourseOverview {
  title: string;
  sectionsCount: number;
  lecturesCount: number;
  totalDuration: string;
  completedPercent: number;
}

export interface PlaybackState {
  lectureTitle: string;
  videoUrl?: string | null;
  posterUrl: string;
  currentTime: string;
  duration: string;
  playedPercent: number;
  bufferedPercent: number;
}
