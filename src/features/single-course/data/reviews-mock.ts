
import type {
    CourseReview,
    CourseRatingSummary,
} from "../types/review";

export const courseRatingMock: CourseRatingSummary = {
    averageRating: 4.8,
    totalReviews: 1250,
    distribution: [
        { stars: 5, percentage: 75 },
        { stars: 4, percentage: 21 },
        { stars: 3, percentage: 3 },
        { stars: 2, percentage: 1 },
        { stars: 1, percentage: 0.5 },
    ],
};

export const reviewsMock: Record<"en" | "ar", CourseReview[]> = {
    en: [
        {
            id: "review-1",
            studentName: "Guy Hawkins",
            studentImage:
                "https://i.pravatar.cc/100?img=12",
            rating: 5,
            createdAt: "1 week ago",
            comment:
                "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
        },
        {
            id: "review-2",
            studentName: "Dianne Russell",
            studentImage:
                "https://i.pravatar.cc/100?img=47",
            rating: 5,
            createdAt: "51 mins ago",
            comment:
                "This course is just amazing! It has great course content, the best practices, and a lot of real-world knowledge. I love the way of giving examples, the best tips by the instructor which are pretty interesting, fun and knowledgeable and I was never getting bored throughout the course. This course meets more than my expectation and I made the best investment of time to learn and practice what I am passionate about. Thank you so much to our excellent instructor Vako!! Highly recommend this course!",
        },
        {
            id: "review-3",
            studentName: "Bessie Cooper",
            studentImage:
                "https://i.pravatar.cc/100?img=44",
            rating: 5,
            createdAt: "6 hours ago",
            comment:
                "Webflow course was good, it covers design secrets, and to build responsive web pages, blog, and some more tricks and tips about webflow. I enjoyed the course and it helped me to add web development skills related to webflow in my toolbox. Thank you Vako.",
        },
        {
            id: "review-4",
            studentName: "Cody Fisher",
            studentImage:
                "https://i.pravatar.cc/100?img=33",
            rating: 4,
            createdAt: "2 days ago",
            comment:
                "Great course with useful examples and clear explanations. I learned a lot of new techniques.",
        },
    ],

    ar: [
        {
            id: "review-1",
            studentName: "Guy Hawkins",
            studentImage:
                "https://i.pravatar.cc/100?img=12",
            rating: 5,
            createdAt: "منذ أسبوع",
            comment:
                "أحببت الفيديوهات القصيرة والواضحة لأنها ساعدتني على التركيز بشكل أفضل. المدرب لديه خبرة كبيرة في تصميم المواقع ويشرح المعلومات بطريقة سهلة وممتعة. كانت من أفضل التجارب التعليمية بالنسبة لي.",
        },
        {
            id: "review-2",
            studentName: "Dianne Russell",
            studentImage:
                "https://i.pravatar.cc/100?img=47",
            rating: 5,
            createdAt: "منذ 51 دقيقة",
            comment:
                "الكورس رائع جدًا ومحتواه غني بالمعلومات والتطبيقات العملية. أحببت الأمثلة والنصائح التي يقدمها المدرب، فالشرح ممتع وواضح ولم أشعر بالملل طوال الكورس. أنصح الجميع بتجربته.",
        },
        {
            id: "review-3",
            studentName: "Bessie Cooper",
            studentImage:
                "https://i.pravatar.cc/100?img=44",
            rating: 5,
            createdAt: "منذ 6 ساعات",
            comment:
                "الكورس كان مفيد جدًا، وغطى أسرار التصميم وكيفية إنشاء صفحات ويب متجاوبة، بالإضافة إلى مجموعة من النصائح والحيل. استمتعت بالتعلم واستفدت كثيرًا من المحتوى.",
        },
        {
            id: "review-4",
            studentName: "Cody Fisher",
            studentImage:
                "https://i.pravatar.cc/100?img=33",
            rating: 4,
            createdAt: "منذ يومين",
            comment:
                "كورس ممتاز ويحتوي على أمثلة عملية وشرح واضح. تعلمت الكثير من التقنيات الجديدة التي سأستخدمها في مشاريعي.",
        },
    ],
};
