
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

export const purchases: Purchase[] = [
  { id: 1, date: "1st September, 2021 at 11:30 PM", coursesCount: 3, total: "$75.00 USD", method: "Credit Card", courses: [] },
  {
    id: 2,
    date: "1st September, 2021 at 11:30 PM",
    coursesCount: 2,
    total: "$75.00 USD",
    method: "Credit Card",
    card: { holder: "Kevin Gilbert", number: "4142 **** **** ****", expiry: "04/24" },
    courses: [
      { id: 1, title: "Learn Ethical Hacking From Scratch", instructor: "Kevin Mahoney", rating: 4.7, reviews: "451,444 Review", price: 13.99, image: "/images/student/image1.jpg" },
      { id: 2, title: "Mega Digital Marketing Course A-Z: 12 Courses in 1 + Updates", instructor: "Esther Howard", rating: 4.7, reviews: "451,444 Review", price: 49.0, image: "/images/student/image2.jpg" },
    ],
  },
  { id: 3, date: "31st August, 2021 at 11:30 PM", coursesCount: 60, total: "$60,720 USD", method: "Credit Card", courses: [] },
  { id: 4, date: "24th August, 2021 at 6:34 PM", coursesCount: 1, total: "$9.00 USD", method: "Credit Card", courses: [] },
  { id: 5, date: "1st September, 2021 at 8:47 PM", coursesCount: 1, total: "$25.00 USD", method: "Credit Card", courses: [] },
  { id: 6, date: "1st September, 2021 at 11:30 PM", coursesCount: 5, total: "$89.00 USD", method: "Credit Card", courses: [] },
  { id: 7, date: "17th July, 2021 at 10:51 AM", coursesCount: 7, total: "$149.00 USD", method: "Credit Card", courses: [] },
]; 
