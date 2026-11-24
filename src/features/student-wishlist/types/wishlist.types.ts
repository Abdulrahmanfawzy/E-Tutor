
export interface StudentProfile {
  name: string;
  role: string;
  avatar: string;
}

export interface WishlistCourse {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice?: number;
  instructors: string[];
}

export interface WishlistData {
  student: StudentProfile;
  courses: WishlistCourse[];
}
