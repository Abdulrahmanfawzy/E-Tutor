import {
    BookOpen,
    CheckSquare,
    Trophy,
    Users,
} from "lucide-react";
import courseImg from "@/assets/images/Course Images.svg"
export const dashboardStats = [
    {
        id: "enrolled",
        title: "Enrolled Courses",
        value: 957,
        icon: BookOpen,
        iconColor: "text-[#FF6636]",
        bgColor: "bg-[#FFF0EB]",
    },
    {
        id: "active",
        title: "Active Courses",
        value: 6,
        icon: CheckSquare,
        iconColor: "text-[#635BFF]",
        bgColor: "bg-[#EDEBFF]",
    },
    {
        id: "completed",
        title: "Completed Courses",
        value: 951,
        icon: Trophy,
        iconColor: "text-green-500",
        bgColor: "bg-[#E1F6E5]",
    },
    {
        id: "instructors",
        title: "Course Instructors",
        value: 241,
        icon: Users,
        iconColor: "text-orange-500",
        bgColor: "bg-[#FFF2E5]",
    },
];

export const studentCourses = [
    {
        id: "1",
        title: "1. Introductions",
        instructor: "Raki Level I, II and Master Teacher Program",
        image: courseImg,
        progress: 0,
    },
    {
        id: "2",
        title: "167. What You'll Need to Get Started",
        instructor: "The Complete 2021 Web Development Bootcamp",
        image: courseImg,
        progress: 61,
    },
    {
        id: "3",
        title: "1. How to get started with figma",
        instructor: "Copywriting - Become a Freelance Copywriter",
        image: courseImg,
        progress: 0,
    },
    {
        id: "4",
        title: "9. Advanced CSS - Selector Priority",
        instructor: "2021 Complete Python Bootcamp From Zero",
        image: courseImg,
        progress: 12,
    },
    {
        id: "5",
        title: "Introduction to React",
        instructor: "Modern React Development",
        image: courseImg,
        progress: 35,
    },
];