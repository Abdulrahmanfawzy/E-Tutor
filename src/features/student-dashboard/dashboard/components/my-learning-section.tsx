"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { studentCourses } from "../data/dashboard.mock";
import DashboardCourseCard from "@/components/common/dashboard-course-card/dashboard-course-card";

export default function MyLearningSection() {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: false,
            }}
            className="w-full"
        >
            {/* Section Header */}
            <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-gray-900">
                    Let's start learning, Kevin
                </h2>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2">
                    <CarouselPrevious
                        className="static size-8 translate-y-0 rounded-sm border-orange-100 bg-[#FFF0EB] text-[#FF6636] hover:bg-[#FFE1D6]"
                    />

                    <CarouselNext
                        className="static size-8 translate-y-0 rounded-sm border-orange-100 bg-[#FFF0EB] text-[#FF6636] hover:bg-[#FFE1D6]"
                    />
                </div>
            </div>

            {/* Carousel Items */}
            <CarouselContent className="">
                {studentCourses.map((course) => (
                    <CarouselItem
                        key={course.id}
                        className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    >
                        <DashboardCourseCard course={course} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}