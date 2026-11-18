import type { Category, Course, Instructor } from "../types/home.types";
const images = {
  course1:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
  course2:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
  course3:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
  course4:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
  course5:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600",
  course6:
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600",
};

export const categories: Category[] = [
  { id: 1, name: "Label", coursesCount: "63,476 Courses", icon: "◈", color: "bg-violet-100 text-violet-500" },
  { id: 2, name: "Business", coursesCount: "52,822 Courses", icon: "♧", color: "bg-green-100 text-green-600" },
  { id: 3, name: "Finance & Accounting", coursesCount: "33,441 Courses", icon: "▤", color: "bg-orange-100 text-orange-500" },
  { id: 4, name: "IT & Software", coursesCount: "22,949 Courses", icon: "⚑", color: "bg-rose-100 text-rose-500" },
  { id: 5, name: "Personal Development", coursesCount: "20,126 Courses", icon: "♙", color: "bg-orange-100 text-orange-500" },
  { id: 6, name: "Office Productivity", coursesCount: "11,932 Courses", icon: "▥", color: "bg-slate-100 text-slate-600" },
  { id: 7, name: "Marketing", coursesCount: "12,000 Courses", icon: "⚑", color: "bg-indigo-100 text-indigo-500" },
  { id: 8, name: "Photography & Video", coursesCount: "6,196 Courses", icon: "▣", color: "bg-slate-100 text-slate-600" },
  { id: 9, name: "Lifestyle", coursesCount: "2,735 Courses", icon: "⬡", color: "bg-orange-100 text-orange-500" },
  { id: 10, name: "Design", coursesCount: "2,600 Courses", icon: "✎", color: "bg-rose-100 text-rose-500" },
  { id: 11, name: "Health & Fitness", coursesCount: "1,678 Courses", icon: "✚", color: "bg-green-100 text-green-600" },
  { id: 12, name: "Music", coursesCount: "989 Courses", icon: "♫", color: "bg-orange-100 text-orange-500" },
];

const courseTitles = [
  "Complete Python Bootcamp: From Zero to Hero",
  "The Complete 2021 Web Development Bootcamp",
  "Photography Masterclass: A Complete Guide",
  "The Complete Digital Marketing Course",
  "Masterclass: Become a Professional Developer",
  "The Complete Foundation Stock Trading Course",
  "Beginner to Pro in Excel: Financial Modeling",
  "The Python Mega Course: Build 10 Real World Apps",
  "Copywriting: Become a Freelance Copywriter",
  "Complete Analytics Certification Course",
];

export const courses: Course[] = courseTitles.map((title, index) => ({
  id: index + 1,
  title,
  instructor: "Kevin Gilbert",
  price: 57,
  rating: 5,
  students: "265.7K students",
  image: Object.values(images)[index % 6],
  tag: ["DESIGN", "WEB DEVELOPMENT", "BUSINESS", "MARKETING"][index % 4],
}));

export const instructors: Instructor[] = [
  {
    id: 1,
    name: "Devon Lane",
    job: "Senior Developer",
    rating: 4.6,
    students: "854 students",
    image: "/images/student1.jpg",
  },
  {
    id: 2,
    name: "Darrell Steward",
    job: "Digital Product Designer",
    rating: 4.8,
    students: "45,144 students",
    image: "/images/student2.jpg",
  },
  {
    id: 3,
    name: "Jane Cooper",
    job: "UI/UX Designer",
    rating: 4.8,
    students: "435,571 students",
    image: "/images/student3.jpg",
  },
  {
    id: 4,
    name: "Albert Flores",
    job: "Photo Instructor",
    rating: 4.7,
    students: "511,123 students",
    image: "/images/student4.jpg",
  },
  {
    id: 5,
    name: "Kathryn Murphy",
    job: "Cloud Engineer",
    rating: 4.2,
    students: "2,771 students",
    image: "/images/student5.jpg",
  },
];

export const homeData = {
  categories,
  courses,
  instructors,
};