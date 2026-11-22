import courseImage from '@/assets/images/Course Images.svg'
import { StaticImageData } from 'next/image';
export const COURSE_CATEGORIES = [
  "DESIGN",
  "DEVELOPMENTS",
  "BUSINESS",
  "MARKETING",
  "IT & SOFTWARE",
] as const;

export type CourseCategory = (typeof COURSE_CATEGORIES)[number];
export interface Course {
  id: number;
  slug: string;
  category: CourseCategory;
  title: string;
  price: number;
  rating: number;
  students: string;
  image: string | StaticImageData;
}
export const coursesData:Course[] = [
  {
    id: 1,
    slug: "machine-learning-a-z-hands-on-python-r-in-data-science",
    category: "DESIGN",
    title: "Machine Learning A-Z: Hands-On Python & R in Data Science",
    price: 57,
    rating: 5.0,
    students: "265.7K",
    image:
      courseImage,
  },
  {
    id: 2,
    slug: "complete-2021-web-development-bootcamp",
    category: "DEVELOPMENTS",
    title: "The Complete 2021 Web Development Bootcamp",
    price: 57,
    rating: 5.0,
    students: "265.7K",
    image:
      courseImage,
  },
  {
    id: 3,
    slug: "learn-python-programming-masterclass",
    category: "BUSINESS",
    title: "Learn Python Programming Masterclass",
    price: 57,
    rating: 5.0,
    students: "265.7K",
    image:
      courseImage,
  },
  {
    id: 4,
    slug: "complete-digital-marketing-course-12-courses-in-1",
    category: "MARKETING",
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    price: 57,
    rating: 5.0,
    students: "265.7K",
    image:
      courseImage,
  },
  {
    id: 5,
    slug: "reed-level-i-ii-and-master-teacher-prep",
    category: "IT & SOFTWARE",
    title: "Reed Level I, II and Master/Teacher Prep",
    price: 57,
    rating: 5.0,
    students: "265.7K",
    image:
     courseImage,
  },
];

export const popularTools = [
  { name: "HTML 5", courses: "2,736 Courses" },
  { name: "CSS 3", courses: "13,932 Courses" },
  { name: "Javascript", courses: "52,822 Courses" },
  { name: "Saas", courses: "20,126 Courses" },
  { name: "Laravel", courses: "6,196 Courses" },
  { name: "Django", courses: "22,649 Courses" },
];

export const popularKeywords = [
  "HTML 5",
  "Web Development",
  "Responsive Developments",
  "Developments",
  "Programing",
  "Website",
  "Technology",
  "Wordpress",
];
