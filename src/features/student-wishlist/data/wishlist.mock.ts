
import type { WishlistData } from "../types/wishlist.types";

export const wishlistMockData: WishlistData = {
  student: {
    name: "Kevin Gilbert",
    role: "Web Designer & Best-Selling Instructor",
    avatar: "/images/student/profile.jpg",
  },

  courses: [
    {
      id: 1,
      title: "The Ultimate Drawing Course - Beginner to Advanced",
      image: "/images/student/image1.jpg",
      rating: 4.6,
      reviewsCount: 451444,
      price: 37,
      originalPrice: 49,
      instructors: ["Harry Potter", "John Wick"],
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass - 23 Courses in 1",
      image: "/images/student/image2.jpg",
      rating: 4.8,
      reviewsCount: 451444,
      price: 24,
      instructors: ["Nobody"],
    },
    {
      id: 3,
      title: "Angular - The Complete Guide (2021 Edition)",
      image: "/images/student/image3.jpg",
      rating: 4.7,
      reviewsCount: 451444,
      price: 13,
      instructors: ["Kevin Gilbert"],
    },
  ],
};
