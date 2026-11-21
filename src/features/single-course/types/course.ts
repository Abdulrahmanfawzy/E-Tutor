import type { StaticImageData } from "next/image";

export interface CourseInstructor {
  id: string;
  name: string;
  avatar: string;
}

export interface CourseBreadcrumbItem {
  label: string;
  href?: string;
}

export interface CourseRating {
  value: number;
  reviewCount: number;
}

export interface CourseInfo {
  label: string;
  value: string;
  icon: string;
}

export interface CourseFeature {
  id: string;
  title: string;
  icon: string;
}

export interface CoursePrice {
  current: number;
  original: number;
  currency: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;

  breadcrumbs: CourseBreadcrumbItem[];

  instructors: CourseInstructor[];

  rating: CourseRating;

  previewImage: string | StaticImageData;
  previewVideo?: string;

  price: CoursePrice;

  discountPercentage: number;
  offerEndsInDays: number;

  courseInfo: CourseInfo[];

  includes: CourseFeature[];

  description: string;
}