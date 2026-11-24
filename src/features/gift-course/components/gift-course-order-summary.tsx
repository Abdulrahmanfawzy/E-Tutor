
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import type { Course } from "@/features/single-course/types/course";

interface GiftCourseOrderSummaryProps {
    course: Course;
}

const GiftCourseOrderSummary = ({
    course,
}: GiftCourseOrderSummaryProps) => {
    const t = useTranslations("giftCourse.card");

    const formatPrice = (price: number) =>
        `${course.price.currency} ${price.toFixed(2)}`;

    return (
        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-6">
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
                {t("title")}
            </h3>

            <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
                        <Image
                            src={course.previewImage}
                            alt={course.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 380px"
                            className="object-cover"
                        />

                    </div>
                    <div className="flex flex-col gap-2">


                        <p className="text-sm text-gray-500">
                            {t("courseBy")}:{" "}
                            <span className="font-medium text-gray-700">
                                {course.instructors[0]?.name}
                            </span>
                        </p>
                        <h4 className="font-semibold leading-6 text-gray-900">
                            {course.title}
                        </h4>
                    </div>
                </div>





                <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between gap-3 text-sm">
                        <span className="text-gray-500">{t("price")}</span>

                        <div className="flex items-center gap-2">
                            {course.price.original > course.price.current && (
                                <span className="text-gray-400 line-through">
                                    {formatPrice(course.price.original)}
                                </span>
                            )}

                            <span className="font-semibold text-gray-900">
                                {formatPrice(course.price.current)}
                            </span>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
                        <span className="font-semibold text-gray-900">
                            {t("total")}
                        </span>

                        <span className="text-lg font-bold text-gray-900">
                            {formatPrice(course.price.current)}
                        </span>
                    </div>
                </div>

                <Button type="button" className="h-12 w-full bg-orange-400 text-white">
                    {t("placeOrder")}
                </Button>
            </div>
        </div>
    );
};

export default GiftCourseOrderSummary;
