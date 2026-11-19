export interface Category {
  id: number;
  name: string;
  coursesCount: string;
  icon: string;
  color: string;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  rating: number;
  students: string;
  image: string;
  tag: string;
}

export interface Instructor {
  id: number;
  name: string;
  job: string;
  rating: number;
  students: string;
  image: string;
}