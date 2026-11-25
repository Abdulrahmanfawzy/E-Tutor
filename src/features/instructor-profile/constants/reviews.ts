import type { RatingFilterOption, Review } from "@/types/review";

const avatar = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=96&h=96&q=70`;

const longComment =
  "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.";

export const reviews: Review[] = [
  { id: "1", authorName: "Guy Hawkins", authorAvatarUrl: avatar("photo-1507003211169-0a1dd7228f2d"), postedAt: "1 week ago", rating: 5, comment: longComment },
  { id: "2", authorName: "Dianne Russell", authorAvatarUrl: avatar("photo-1500648767791-00dcc994a43e"), postedAt: "51 mins ago", rating: 5, comment: "This course is just amazing! has great course content, the best practices, and a lot of real-world knowledge. I love the way of giving examples, the best tips by the instructor which are pretty interesting, fun and knowledgeable and I was never getting bored throughout the course. This course meets more than my expectation and, I made the best investment of time to learn and practice what I am passionate about. Thank you so much to our excellent instructor Vako!! Highly recommend this course!! Take the next step." },
  { id: "3", authorName: "Bessie Cooper", authorAvatarUrl: avatar("photo-1494790108377-be9c29b29330"), postedAt: "6 hours ago", rating: 5, comment: "Webflow course was good, it coves design secrtes, and to build responsive web pages, blog, and some more tricks and tips about webflow. I enjoyed the course and it helped me to add web development skills related to webflow in my toolbox. Thank you Vako." },
  { id: "4", authorName: "Eleanor Pena", authorAvatarUrl: avatar("photo-1438761681033-6461ffad8d80"), postedAt: "1 days ago", rating: 5, comment: longComment },
  { id: "5", authorName: "Ralph Edwards", authorAvatarUrl: avatar("photo-1472099645785-5658abf4ff4e"), postedAt: "3 days ago", rating: 5, comment: "GREAT Course! Instructor was very descriptive and professional. I learned a TON that is going to apply immediately to real life work. Thanks so much, cant wait for the next one!" },
  { id: "6", authorName: "Arlene McCoy", authorAvatarUrl: avatar("photo-1544005313-94ddf0286df2"), postedAt: "1 week ago", rating: 5, comment: "This should be one of the best course I ever made about UXUI in Udemy. Highly recommend to those who is new to UXUI and want to become UXUI freelancer!!" },
];

export const ratingFilterOptions: RatingFilterOption[] = [5, 4, 3, 2, 1].map((n) => ({
  value: String(n),
  label: `${n} Star Rating`,
}));