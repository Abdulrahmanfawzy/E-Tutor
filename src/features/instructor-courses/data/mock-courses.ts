import courseImage from "@/assets/images/Course Images.svg";
import type { InstructorCourse } from "../components/instructor-course-card";
import profile from "@/assets/Ellipse 300.svg";
import courseThumbnail from "@/assets/images/Course Thumbnail.svg"

export const COURSES: InstructorCourse[] = [
  { id: 1, title: "Premiere Pro CC for Beginners: Video Editing in Premiere", category: "Developments", image: courseImage, rating: 4.9, students: 982941, price: 24 },
  { id: 2, title: "Learn Python Programming Masterclass", category: "Developments", image: courseImage, rating: 4.0, students: 971123, price: 49 },
  { id: 3, title: "Data Structures & Algorithms Essentials (2021)", category: "Developments", image: courseImage, rating: 5.0, students: 197897, price: 23, oldPrice: 94.97 },
  { id: 4, title: "Learn Python Programming Masterclass: A-Z Hands-On Python & R In Data Science", category: "Developments", image: courseImage, rating: 4.7, students: 211434, price: 69 },
  { id: 5, title: "Complete Blender Creator: Learn 3D Modelling for Beginners", category: "Developments", image: courseImage, rating: 3.3, students: 409871, price: 16 },
  { id: 6, title: "SQL for NEWBS: Weekender Crash Course", category: "Developments", image: courseImage, rating: 4.7, students: 164817, price: 13 },
  { id: 7, title: "SEO 2021: Complete SEO Training + SEO for WordPress Websites", category: "Developments", image: courseImage, rating: 4.9, students: 181811, price: 57, oldPrice: 94.97 },
  { id: 8, title: "Angular - The Complete Guide (2021 Edition)", category: "Developments", image: courseImage, rating: 4.6, students: 236888, price: 22 },
  { id: 9, title: "Graphic Design Masterclass - Learn GREAT Design", category: "Developments", image: courseImage, rating: 5.0, students: 1306236, price: 89 },
  { id: 10, title: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2021", category: "Developments", image: courseImage, rating: 4.5, students: 428871, price: 24, oldPrice: 94.97 },
  { id: 11, title: "2021 Complete Python Bootcamp From Zero to Hero in Python", category: "Developments", image: courseImage, rating: 4.9, students: 120000, price: 18 },
  { id: 12, title: "Instagram Marketing 2021: Complete Guide To Instagram Growth", category: "Developments", image: courseImage, rating: 4.8, students: 654, price: 35 },
  { id: 13, title: "SQL for NEWBS: Weekender Crash Course", category: "Developments", image: courseImage, rating: 4.7, students: 164817, price: 13 },
  { id: 14, title: "SEO 2021: Complete SEO Training + SEO for WordPress Websites", category: "Developments", image: courseImage, rating: 4.9, students: 181811, price: 57, oldPrice: 94.97 },
  { id: 15, title: "Angular - The Complete Guide (2021 Edition)", category: "Developments", image: courseImage, rating: 4.6, students: 236888, price: 22 },
  { id: 16, title: "Graphic Design Masterclass - Learn GREAT Design", category: "Developments", image: courseImage, rating: 5.0, students: 1306236, price: 89 },
  { id: 17, title: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2021", category: "Developments", image: courseImage, rating: 4.5, students: 428871, price: 24, oldPrice: 94.97 },
  { id: 18, title: "2021 Complete Python Bootcamp From Zero to Hero in Python", category: "Developments", image: courseImage, rating: 4.9, students: 120000, price: 18 },
  { id: 19, title: "Instagram Marketing 2021: Complete Guide To Instagram Growth", category: "Developments", image: courseImage, rating: 4.8, students: 654, price: 35 },
];


export const COURSE = {
  image: courseThumbnail,
  uploadedAt: "Jan 21, 2020",
  updatedAt: "Sep 11, 2021",
  title: "2021 Complete Python BootCamp From Zero to Hero in Python",
  subtitle: "3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.",
  instructors: [
    { name: "Kevin Gilbert", avatar: profile },
    { name: "Kristin Watson", avatar: profile },
  ],
  rating: 4.8,
  ratingCount: 451444,
  price: 13.99,
  revenue: 131800455.82,
};