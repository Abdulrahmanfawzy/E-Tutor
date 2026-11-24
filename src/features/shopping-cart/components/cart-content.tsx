"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { cartCourses } from "../data/cart.mock";
import CartItemsList from "./cart-items-list";
import CartSummary from "./cart-summary";

export default function CartContent() {
    const t = useTranslations("ShoppingCart");

    const [courses, setCourses] = useState(cartCourses);

    const handleRemoveCourse = (id: number) => {
        setCourses((prev) =>
            prev.filter((course) => course.id !== id),
        );
    };

    const handleMoveToWishlist = (id: number) => {
        console.log("Move to wishlist:", id);
    };

    return (
        <section className="mx-auto w-full max-w-[1180px] px-4 py-8">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
                {t("cartTitle")} ({courses.length})
            </h2>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
                <CartItemsList
                    courses={courses}
                    onRemove={handleRemoveCourse}
                    onMoveToWishlist={handleMoveToWishlist}
                />

                <CartSummary courses={courses} />
            </div>
        </section>
    );
}