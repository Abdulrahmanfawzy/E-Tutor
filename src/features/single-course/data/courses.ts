import { Course } from "../types/course";


export const courses: Course[] = [
  {
    id: "1",
    slug: "complete-website-responsive-design",

    title:
      "Complete Website Responsive Design: from Figma to Webflow to Website Design",

    subtitle:
      "3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.",

    breadcrumbs: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Development",
        href: "/development",
      },
      {
        label: "Web Development",
        href: "/development/web",
      },
      {
        label: "Webflow",
      },
    ],

    instructors: [
      {
        id: "instructor-1",
        name: "Dianne Russell",
        avatar: "https://i.pravatar.cc/150?img=47",
      },
      {
        id: "instructor-2",
        name: "Kristin Watson",
        avatar: "https://i.pravatar.cc/150?img=44",
      },
    ],

    rating: {
      value: 4.8,
      reviewCount: 451144,
    },

    previewImage:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902",

    price: {
      current: 14,
      original: 28,
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
        icon: "globe",
      },
      {
        label: "Subtitle Language",
        value: "English",
        icon: "captions",
      },
    ],

    includes: [
      {
        id: "lifetime",
        title: "Lifetime access",
        icon: "clock",
      },
      {
        id: "guarantee",
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
        icon: "layers",
      },
    ],

    description:
      "Learn to create modern, responsive websites from scratch. Master Figma, Webflow, and responsive design fundamentals while building real-world projects.",
  },
];