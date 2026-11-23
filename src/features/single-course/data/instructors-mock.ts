import type { CourseInstructor } from "../types/instructor";

export const instructorsMock: Record<"en" | "ar", CourseInstructor[]> = {
    en: [
        {
            id: "instructor-1",
            name: "Vako Shvili",
            title: "Web Designer & Best-Selling Instructor",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
            rating: 4.9,
            studentsCount: 236568,
            coursesCount: 9,
            description:
                "One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or more like got himself fired from his own startup. He decided to work on his dream: be his own boss, travel the world, and only do the work he enjoyed. His passion for design and teaching helped thousands of students build successful careers.",
        },
        {
            id: "instructor-2",
            name: "Nima Tahami",
            title: "Entrepreneur & Designer • Founder of ShiftRide",
            image:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop",
            rating: 4.6,
            studentsCount: 5342,
            coursesCount: 1,
            description:
                "I'm an entrepreneur & designer with a high passion for building products of all sorts and seeing ideas come to life. As a serial entrepreneur, I've designed and built projects in fields ranging from fashion to technology. I have over 10 years of experience in both design and product development.",
        },
    ],

    ar: [
        {
            id: "instructor-1",
            name: "Vako Shvili",
            title: "مصمم مواقع ومدرب من الأكثر مبيعًا",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
            rating: 4.9,
            studentsCount: 236568,
            coursesCount: 9,
            description:
                "في يوم قرر Vako إنه مش عايز يكمل في روتين العمل التقليدي، وترك شغله عشان يحقق حلمه ويكون مدير نفسه، ويسافر ويشتغل في الحاجات اللي بيحبها. شغفه بالتصميم والتعليم ساعد آلاف الطلاب إنهم يطوروا مهاراتهم ويبدأوا مسيرتهم المهنية بنجاح.",
        },
        {
            id: "instructor-2",
            name: "Nima Tahami",
            title: "رائد أعمال ومصمم • مؤسس ShiftRide",
            image:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop",
            rating: 4.6,
            studentsCount: 5342,
            coursesCount: 1,
            description:
                "أنا رائد أعمال ومصمم عندي شغف كبير ببناء المنتجات وتحويل الأفكار لواقع. اشتغلت على مشاريع مختلفة في مجالات متنوعة من الموضة لحد التكنولوجيا، وعندي أكتر من 10 سنين خبرة في التصميم وتطوير المنتجات.",
        },
    ],
};