import { CartCourse } from "../types/cart.types";
import imge from "@/assets/images/Course Images.svg"
export const cartCourses: CartCourse[] = [
    {
        id: 1,
        title: "The Python Mega Course: Build 10 Real World Applications",
        image: imge,
        rating: 4.7,
        reviews: 451444,
        instructor: "Leslie Alexander • Guy Hawkins",
        originalPrice: 49,
        price: 37.99,
    },
    {
        id: 2,
        title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
        image: imge,
        rating: 4.3,
        reviews: 451444,
        instructor: "Bessie Cooper",
        price: 9.99,
    },
    {
        id: 3,
        title: "Learn Ethical Hacking From Scratch",
        image: imge,
        rating: 4.7,
        reviews: 451444,
        instructor: "Marvin McKinney",
        price: 13.99,
    },
];