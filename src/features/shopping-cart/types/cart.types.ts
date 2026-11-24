export interface CartCourse {
    id: number;
    title: string;
    image: string;
    rating: number;
    reviews: number;
    instructor: string;
    originalPrice?: number;
    price: number;
}