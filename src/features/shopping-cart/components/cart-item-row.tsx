"use client";

import Image from "next/image";
import { X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartCourse } from "../types/cart.types";
import { useTranslations } from "next-intl";

interface CartItemRowProps {
    course: CartCourse;
    onRemove: (id: number) => void;
    onMoveToWishlist?: (id: number) => void;
}

export default function CartItemRow({
    course,
    onRemove,
    onMoveToWishlist,
}: CartItemRowProps) {
    const t = useTranslations("ShoppingCart");
    return (
        <div className="grid grid-cols-1 gap-4 border-b border-gray-100 p-4 sm:grid-cols-[minmax(0,1fr)_100px_120px] sm:items-center">
            {/* Course Info */}
            <div className="flex gap-3">
                <button
                    onClick={() => onRemove(course.id)}
                    aria-label={t("removeCourse")}
                    className="mt-1 shrink-0 text-gray-400 hover:text-red-500"
                >
                    <X size={15} />
                </button>

                <div className="relative h-[90px] w-[115px] shrink-0 overflow-hidden">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes="115px"
                        className="object-cover"
                    />
                </div>

                <div className="min-w-0 space-y-1">
                    <div className="flex items-center gap-1 text-xs">
                        <Star
                            size={12}
                            className="fill-[#FF6636] text-[#FF6636]"
                        />

                        <span className="font-medium text-gray-800">
                            {course.rating}
                        </span>

                        <span className="truncate text-gray-400">
                            ({course.reviews.toLocaleString()} {t("review")})
                        </span>
                    </div>

                    <h3 className="line-clamp-2 text-xs font-medium leading-5 text-gray-900">
                        {course.title}
                    </h3>

                    <p className="line-clamp-1 text-[10px] text-gray-400">
                        {t("courseBy")} : {course.instructor}
                    </p>
                </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 sm:justify-start">
                <span className="text-sm font-medium text-[#FF6636]">
                    ${course.price.toFixed(2)}
                </span>

                {course.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                        ${course.originalPrice.toFixed(2)}
                    </span>
                )}
            </div>

            {/* Actions */}
            <Button
                variant="ghost"
                onClick={() => onMoveToWishlist?.(course.id)}
                className="h-8 rounded-sm bg-[#FFF0EB] px-3 text-[10px] font-normal cursor-pointer text-[#FF6636] hover:bg-[#FFE1D6] hover:text-[#FF6636]"
            >
                {t("moveToWishlist")}
            </Button>
        </div>
    );
}