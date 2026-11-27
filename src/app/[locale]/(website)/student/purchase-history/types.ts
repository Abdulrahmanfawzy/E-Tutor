export type ApiPurchase = {
  id: number;
  total: number;
  currency: string;
  items_count: number;
  paid_at: string;
  payment: {
    method: string;
    brand: string | null;
    masked: string | null;
    holder_name: string | null;
  };
  items: {
    id: number;
    price: number;
    course: {
      id: number;
      title: string;
      thumbnail_url: string;
      rating: number;
      rating_count: number;
      instructor: { name: string };
    };
  }[];
};

export type ApiResponse = {
  success: boolean;
  message: string;
  data: {
    data: ApiPurchase[];
    meta: { current_page: number; last_page: number; end_message?: string };
  };
};

export type PurchasedCourse = {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviews: string;
  price: number;
  image: string;
};

export type Purchase = {
  id: number;
  date: string;
  coursesCount: number;
  total: string;
  method: string;
  card?: { holder: string; number: string; expiry: string };
  courses: PurchasedCourse[];
};