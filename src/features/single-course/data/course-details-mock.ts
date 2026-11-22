import type { Course } from "../types/course";

export const courseDetailsMock: Record<
  string,
  Partial<Course>
> = {
  "complete-2021-web-development-bootcamp": {
    price: {
      current: 14,
      original: 26,
      currency: "USD",
    },

    discountPercentage: 56,
    offerEndsInDays: 2,

    courseInfo: [
      {
        label: "Course Duration",
        translationKey: "courseDuration",
        value: "6 Month",
        icon: "clock",
      },
      {
        label: "Course Level",
        translationKey: "courseLevel",
        value: "Beginner and Intermediate",
        icon: "chart",
      },
      {
        label: "Students Enrolled",
        translationKey: "studentsEnrolled",
        value: "69,419,618",
        icon: "users",
      },
      {
        label: "Language",
        translationKey: "language",
        value: "Mandarin",
        icon: "languages",
      },
      {
        label: "Subtitle Language",
        translationKey: "subtitleLanguage",
        value: "English",
        icon: "captions",
      },
    ],

    includes: [
      {
        id: "lifetime-access",
        title: "Lifetime access",
        translationKey: "lifetime",
        icon: "clock",
      },
      {
        id: "money-back",
        title: "30-days money-back guarantee",
        translationKey: "guarantee",
        icon: "dollar",
      },
      {
        id: "resources",
        title: "Free exercises file & downloadable resources",
        translationKey: "resources",
        icon: "file",
      },
      {
        id: "certificate",
        title: "Shareable certificate of completion",
        translationKey: "certificate",
        icon: "award",
      },
      {
        id: "devices",
        title: "Access on mobile, tablet and TV",
        translationKey: "devices",
        icon: "monitor",
      },
      {
        id: "subtitles",
        title: "English subtitles",
        translationKey: "subtitles",
        icon: "captions",
      },
      {
        id: "online",
        title: "100% online course",
        translationKey: "online",
        icon: "globe",
      },
    ],
  },
};