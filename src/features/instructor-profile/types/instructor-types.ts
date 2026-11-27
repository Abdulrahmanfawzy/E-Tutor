export type CourseCategory = "development" | "business" | "productivity";
export type SocialPlatform = "facebook" | "twitter" | "instagram" | "youtube" | "whatsapp";

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  price: number;
  rating: number;
  students: number;
  imageUrl: string;
}

export interface SocialLink {
  platform: SocialPlatform;
  href: string;
}

export interface Instructor {
  name: string;
  headline: string;
  badge: string;
  avatarUrl: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  coursesCount: number;
  website: string;
  bio: string[];
  socials: SocialLink[];
  courses: Course[];
}