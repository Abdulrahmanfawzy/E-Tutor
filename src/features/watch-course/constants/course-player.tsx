import { CourseOverview, CourseSection, PlaybackState } from "../types/course-types";

export const courseOverview: CourseOverview = {
  title: "Complete Website Responsive Design: from Figma to Webflow to Website Design",
  sectionsCount: 6,
  lecturesCount: 202,
  totalDuration: "19h 37m",
  completedPercent: 15,
};

export const playback: PlaybackState = {
  lectureTitle: "2. Sign up in Webflow",
  videoUrl: null,
  posterUrl:
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=75",
  currentTime: "1:25",
  duration: "9:15",
  playedPercent: 31,
  bufferedPercent: 52,
};

export const sections: CourseSection[] = [
  {
    id: "s1",
    title: "Getting Started",
    lecturesCount: 4,
    duration: "51m",
    progress: { percent: 25, finished: 1, total: 4 },
    lectures: [
      { id: "l1", title: "1. What is Webflow?", duration: "07:31", status: "completed" },
      { id: "l2", title: "2. Sign up in Webflow", duration: "07:31", status: "playing" },
      { id: "l3", title: "3. Teaser of Webflow", duration: "07:31", status: "idle" },
      { id: "l4", title: "4. Figma Introduction", duration: "07:31", status: "idle" },
    ],
  },
  { id: "s2", title: "Secret of Good Design", lecturesCount: 52, duration: "5h 49m" },
  { id: "s3", title: "Practice Design Like an Artist", lecturesCount: 43, duration: "51m" },
  { id: "s4", title: "Web Development (webflow)", lecturesCount: 137, duration: "10h 6m" },
  { id: "s5", title: "Secrets of Making Money Freelancing", lecturesCount: 21, duration: "38m" },
  { id: "s6", title: "Advanced", lecturesCount: 39, duration: "1h 31m" },
  { id: "s7", title: "What's Next", lecturesCount: 7, duration: "1h 17m" },
];
