
export interface CategoryReference {
  id: number;
  name: string;
  slug: string;
  icon: string | null;
  color: string | null;
  courses_count: number;
}

export interface CourseCategory extends CategoryReference {
  parent_id: number | null;
  parent: CategoryReference | null;
  children: CategoryReference[];
}

export interface CourseInstructor {
  id: number;
  name: string;
  username: string;
  headline: string;
  avatar_url: string | null;
}

export interface BestSellingCourse {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  thumbnail_url: string | null;
  category: {
    id: number;
    name: string;
    slug: string;
    color: string;
  };
  instructor: CourseInstructor;
  level: "beginner" | "intermediate" | "expert";
  duration: string;
  price: number;
  current_price: number;
  discount_percent: number;
  is_free: boolean;
  rating: number;
  rating_count: number;
  students_count: number;
  status: string;
}

export interface PopularTool {
  id: number;
  name: string;
  slug: string;
  courses_count: number;
}

export interface PopularKeyword {
  keyword: string;
  courses_count: number;
}

export interface PopularInstructor extends CourseInstructor {
  bio: string;
  rating: number;
  reviews_count: number;
  students_count: number;
  courses_count: number;
}

export interface CategoryLandingData {
  category: CourseCategory;
  best_selling: BestSellingCourse[];
  popular_tools: PopularTool[];
  popular_keywords: PopularKeyword[];
  popular_instructors: PopularInstructor[];
}

export interface CategoryLandingResponse {
  success: boolean;
  message: string | null;
  data: CategoryLandingData;
}
