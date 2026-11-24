
import type { FaqsData } from "../types/faqs.types";

export const faqsMockData: FaqsData = {
  categories: [
    { id: 1, name: "Students" },
    { id: 2, name: "Courses" },
    { id: 3, name: "Payments" },
    { id: 4, name: "Instructors" },
    { id: 5, name: "Certificates" },
    { id: 6, name: "Account" },
    { id: 7, name: "Technical Support" },
    { id: 8, name: "General Questions" },
  ],

  faqs: [
    {
      id: 1,
      categoryId: 1,
      question: "Nulla tempor odio ut fringilla",
      answer:
        "Aliquam semper tellus vel lacus rutrum mollis. Nunc vitae iaculis lacus, id fringilla leo. Nulla dictum, enim nec bibendum auctor, lorem mi rutrum urna, sed luctus urna nibh sit amet velit.",
    },
    {
      id: 2,
      categoryId: 1,
      question: "Donec malesuada",
      answer:
        "You can manage your learning activities and track your progress directly from your student dashboard.",
    },
    {
      id: 3,
      categoryId: 1,
      question: "Quisque",
      answer:
        "Browse the available courses, choose the course you are interested in, and follow the enrollment steps.",
    },
    {
      id: 4,
      categoryId: 1,
      question: "Toquam, in accumsan",
      answer:
        "Your course materials and learning resources are available from your enrolled courses.",
    },
    {
      id: 5,
      categoryId: 1,
      question: "Ut sed orci",
      answer:
        "You can contact our support team whenever you need help with your learning experience.",
    },
    {
      id: 6,
      categoryId: 1,
      question: "Nullam non ante",
      answer:
        "Course progress is updated as you complete lessons and learning activities.",
    },
    {
      id: 7,
      categoryId: 1,
      question: "Phasellus",
      answer:
        "You can access your account settings to update your personal information.",
    },
    {
      id: 8,
      categoryId: 1,
      question: "Etiam eu libero elementum",
      answer:
        "For additional assistance, please contact our support team.",
    },
    {
      id: 9,
      categoryId: 2,
      question: "How can I find the right course?",
      answer:
        "Explore course categories and review the course descriptions before enrolling.",
    },
    {
      id: 10,
      categoryId: 2,
      question: "Can I access courses anytime?",
      answer:
        "You can access your enrolled courses according to their availability and access conditions.",
    },
  ],
};
