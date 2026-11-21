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
        value: "6 Month",
        icon: "clock",
      },
      {
        label: "Course Level",
        value: "Beginner and Intermediate",
        icon: "chart",
      },
      {
        label: "Students Enrolled",
        value: "69,419,618",
        icon: "users",
      },
      {
        label: "Language",
        value: "Mandarin",
        icon: "languages",
      },
      {
        label: "Subtitle Language",
        value: "English",
        icon: "captions",
      },
    ],

    includes: [
      {
        id: "lifetime-access",
        title: "Lifetime access",
        icon: "clock",
      },
      {
        id: "money-back",
        title: "30-days money-back guarantee",
        icon: "dollar",
      },
      {
        id: "resources",
        title: "Free exercises file & downloadable resources",
        icon: "file",
      },
      {
        id: "certificate",
        title: "Shareable certificate of completion",
        icon: "award",
      },
      {
        id: "devices",
        title: "Access on mobile, tablet and TV",
        icon: "monitor",
      },
      {
        id: "subtitles",
        title: "English subtitles",
        icon: "captions",
      },
      {
        id: "online",
        title: "100% online course",
        icon: "globe",
      },
    ],
  },
};