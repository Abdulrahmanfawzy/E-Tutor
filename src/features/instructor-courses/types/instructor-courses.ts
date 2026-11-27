export interface InstructorCoursesResponse {
  success: boolean;
  message: string;
  data: {
    data: InstructorCourse[];
    links: CoursesLinks;
    meta: CoursesMeta;
  };
}

export interface InstructorCourse {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  thumbnail_url: string;
  category: Category;
  instructor: Instructor;
  level: string;
  duration: string;
  price: number;
  current_price: number;
  discount_percent: number;
  is_free: boolean;
  rating: number;
  rating_count: number;
  students_count: number;
  status: string;
  has_thumbnail: boolean;
  my_role: string;
  enrollments_count: number;
  submitted_at: string | null;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  color: string;
}

export interface Instructor {
  id: number;
  name: string;
  username: string;
  headline: string;
  avatar_url: string;
}

export interface CoursesLinks {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface CoursesMeta {
  current_page: number;
  from: number | null;
  last_page: number;
  links: CoursesPageLink[];
  path: string;
  per_page: number;
  to: number | null;
  total: number;
}

export interface CoursesPageLink {
  url: string | null;
  label: string;
  page: number | null;
  active: boolean;
}