import type {
  InstructorBenefit,
  InstructorRule,
  InstructorStat,
  InstructorStep,
    InstructorTestimonial,
} from "../types/instructor.types";
import { Users, Award, Earth, BadgeCheck, Layers, Certificate, IdCard, CirclePlay, Handshake } from "lucide-react";
import rule1 from "@/assets/instructor/01.png";
import rule2 from "@/assets/instructor/01.png";
import rule3 from "@/assets/instructor/02.png";
import rule4 from "@/assets/instructor/03.png";
import rule5 from "@/assets/instructor/04.png";
import rule6 from "@/assets/instructor/05.png";
import rule7 from "@/assets/instructor/06.png";
import rule8 from "@/assets/instructor/07.png";

import type { InfoSectionProps } from "../types/instructor.types";
export const containerClass = "mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10";
export const instructorInfoSections: InfoSectionProps[] = [
  {
    title: "Instructor rules & regulations",
    description: "Sed auctor, nisl non elementum ornare...",
    bullets: ["Sed ullamcorper libero...", "Nam leo tortor..."],
    image: {
      src: rule1,
      alt: "Instructor teaching online",
    },
  },
  {
    reverse: true,
    title: "Instructor rules & regulations",
    description: "Sed auctor, nisl non elementum ornare...",
    bullets: ["Sed ullamcorper libero...", "Nam leo tortor..."],
    image: {
      src: rule1,
      alt: "Instructor teaching online",
    },
  },
  
];
export const instructorStats: InstructorStat[] = [
  { icons: Users, color: "text-orange-500", value: "20K+", label: "Students learning" },
  {
    icons: Award,
    color: "text-purple-500",
    value: "1K+",
    label: "Certified instructors",
  },
  { icons: Earth, color: "text-red-500", value: "120+", label: "Countries reached" },
  {
    icons: BadgeCheck,
    color: "text-green-500",
    value: "95%",
    label: "Student satisfaction",
  },
  { icons: Layers, color: "text-orange-500", value: "500+", label: "Trusted companies" },
];

export const instructorBenefits: InstructorBenefit[] = [
  {
    title: "Reach learners everywhere",
    description:
      "Share your knowledge with learners from different backgrounds and communities around the world.",
    icon: "users",
  },
  {
    title: "Teach what you love",
    description:
      "Create learning experiences around your expertise and help students develop practical skills.",
    icon: "book",
  },
  {
    title: "Grow your career",
    description:
      "Build your teaching profile, develop your reputation, and reach more learners over time.",
    icon: "chart",
  },
];

export const instructorSteps: InstructorStep[] = [
  {
    icon: Certificate,
    color: "text-purple-400",
    backgroundColor: "bg-purple-50",
    title: "Create your account",
    description:
      "Get started by creating your instructor account and entering your basic information.",
  },

  {
    icon: IdCard,
    color: "text-red-400",
    backgroundColor: "bg-red-50",
    title: "Complete your profile",
    description:
      "Tell learners about your experience, qualifications, and the subjects you want to teach.",
  },
  {
    icon: CirclePlay,
    color: "text-orange-400",
    backgroundColor: "bg-orange-50",
    title: "Submit your application",
    description:
      "Review the instructor requirements and submit your information for approval.",
  },
  {
    icon: Handshake,
    color: "text-green-400",
    backgroundColor: "bg-green-50",
    title: "Start teaching",
    description:
      "Once approved, publish your learning content and start connecting with students.",
  },
];

export const instructorRules: InstructorRule[] = [
  {
    title: "Share original content",
    description:
      "Make sure your lessons are accurate, useful, and respect the intellectual property of others.",
  },
  {
    title: "Maintain a professional environment",
    description:
      "Communicate respectfully and create an inclusive learning experience for every student.",
  },
  {
    title: "Deliver quality lessons",
    description:
      "Prepare your materials carefully and keep your course content clear and up to date.",
  },
  {
    title: "Support your learners",
    description:
      "Engage with students, respond to relevant questions, and encourage continuous learning.",
  },
];

export const instructorTestimonials: InstructorTestimonial[] = [
  {
    quote:
      "The platform gave me a place to share what I know and connect with learners who are eager to grow.",
    name: "Instructor",
    role: "Course creator",
    image: "/images/instructor/instructor-portrait-01.png",
  },
  {
    quote:
      "Creating lessons and reaching students has become a more organized and rewarding experience.",
    name: "Instructor",
    role: "Online educator",
    image: "/images/instructor/instructor-portrait-02.jpg",
  },
  {
    quote:
      "I can focus on teaching and building useful learning experiences for my students.",
    name: "Instructor",
    role: "Professional trainer",
    image: "/images/instructor/instructor-portrait-03.jpg",
  },
  {
    quote:
      "It is rewarding to see learners use the knowledge from my courses to develop their skills.",
    name: "Instructor",
    role: "Course instructor",
    image: "/images/instructor/instructor-portrait-04.jpg",
  },
  {
    quote:
      "A useful place to turn subject knowledge into structured lessons for a wider audience.",
    name: "Instructor",
    role: "Independent educator",
    image: "/images/instructor/instructor-portrait-05.jpg",
  },
];

export const testimonials = [
  {
    quote:
      "Nulla sed malesuada augue. Morbi interdum vulputate imperdiet. Pellentesque ullamcorper auctor ante, egestas interdum quam facilisis commodo. Phasellus efficitur quis ex in consectetur. Mauris tristique suscipit metus, a molestie dui dapibus vel.",
  },
  // add more testimonials here; the arrows cycle through them
];

// Positions are percentages of a 760 x 984 canvas, taken from the design.
export const collage = [
  {
    src: rule1,
    alt: "Instructor portrait",
    left: 0,
    top: 7.22,
    w: 16.97,
    h: 13.11,
  },
  {
    src: rule2,
    alt: "Instructor portrait",
    left: 29.47,
    top: 0,
    w: 26.32,
    h: 20.33,
  },
  {
    src: rule3,
    alt: "Instructor portrait",
    left: 58.95,
    top: 5.39,
    w: 26.32,
    h: 31.71,
  },
  {
    src: rule4,
    alt: "Instructor portrait",
    left: 0,
    top: 22.76,
    w: 55.79,
    h: 43.09,
  },
  {
    src: rule5,
    alt: "Instructor portrait",
    left: 58.95,
    top: 39.53,
    w: 41.05,
    h: 31.71,
  },
  {
    src: rule6,
    alt: "Instructor portrait",
    left: 0,
    top: 68.29,
    w: 26.32,
    h: 20.33,
  },
  {
    src: rule7,
    alt: "Instructor portrait",
    left: 29.47,
    top: 68.29,
    w: 26.32,
    h: 31.71,
  },
  {
    src: rule8,
    alt: "Instructor portrait",
    left: 58.95,
    top: 73.68,
    w: 26.32,
    h: 20.33,
  },
];
 