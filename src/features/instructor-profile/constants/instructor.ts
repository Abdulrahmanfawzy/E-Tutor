import type { Course, Instructor } from "@/types/instructor";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=70`;

const base = { price: 57, rating: 5.0, students: 265700 };

const courses: Course[] = [
  { id: "1", title: "Machine Learning A-Z™: Hands-On Python & R In Data Science", category: "development", imageUrl: img("photo-1517694712202-14dd9538aa97"), ...base },
  { id: "2", title: "Selenium WebDriver with Java -Basics to Advanced+Frameworks", category: "business", imageUrl: img("photo-1497366216548-37526070297c"), ...base },
  { id: "3", title: "Data Structures & Algorithms Essentials (2021)", category: "development", imageUrl: img("photo-1522071820081-009f0129c71c"), ...base },
  { id: "4", title: "Complete Adobe Lightroom Megacourse: Beginner to Expert", category: "development", imageUrl: img("photo-1529156069898-49953e39b3ac"), ...base },
  { id: "5", title: "Graphic Design Masterclass - Learn GREAT Design", category: "development", imageUrl: img("photo-1543269865-cbf427effbad"), ...base },
  { id: "6", title: "Digital Marketing Masterclass - 23 Courses in 1", category: "productivity", imageUrl: img("photo-1556761175-5973dc0f32e7"), ...base },
];

export const instructor: Instructor = {
  name: "Vako Shvili",
  headline: "Web Designer & Best-Selling Instructor",
  badge: "Top Rated",
  avatarUrl: img("photo-1500648767791-00dcc994a43e"),
  rating: 4.8,
  reviewsCount: 134620,
  studentsCount: 430117,
  coursesCount: 7,
  website: "https://www.vakushvili.com",
  bio: [
    "One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or more like got himself fired from his own startup.",
    "He decided to work on his dream: be his own boss, travel the world, only do the work he enjoyed, and make a lot more money in the process. No more begging for vacation days and living from paycheck to paycheck. After trying everything from e-commerce stores to professional poker his lucky break came when he started freelance design. Vako fell in love with the field that gives him the lifestyle of his dreams.",
    "Vako realizes that people who take courses on Udemy want to transform their lives. Today with his courses and mentoring Vako is helping thousands of people transform their lives, just like he did once.",
  ],
  socials: [
    { platform: "facebook", href: "#" },
    { platform: "twitter", href: "#" },
    { platform: "instagram", href: "#" },
    { platform: "youtube", href: "#" },
    { platform: "whatsapp", href: "#" },
  ],
  courses,
};