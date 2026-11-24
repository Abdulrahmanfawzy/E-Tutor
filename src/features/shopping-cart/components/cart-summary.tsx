import { Button } from "@/components/ui/button";
import { CartCourse } from "../types/cart.types";
import CouponForm from "./coupon-form";
import { useTranslations } from "next-intl";

interface CartSummaryProps {
    courses: CartCourse[];
    discountPercentage?: number;
    tax?: number;
}

export default function CartSummary({
    courses,
    discountPercentage = 8,
    tax = 17.99,
}: CartSummaryProps) {
    const subtotal = courses.reduce(
        (total, course) => total + course.price,
        0,
    );

    const discount = subtotal * (discountPercentage / 100);

    const total = subtotal - discount + tax;

    const formatPrice = (price: number) => `$${price.toFixed(2)} USD`;
    const t = useTranslations("ShoppingCart");
    return (
        <aside className="h-fit w-full space-y-4">
            {/* Price Details */}
            <div className="space-y-3">
                <div className="flex justify-between text-xs text-gray-500">
                    <span>{t("subtotal")}</span>
                    <span className="text-gray-900">
                        {formatPrice(subtotal)}
                    </span>
                </div>

                <div className="flex justify-between text-xs text-gray-500">
                    <span>{t("couponDiscount")}</span>
                    <span>{discountPercentage}%</span>
                </div>

                <div className="flex justify-between text-xs text-gray-500">
                    <span>{t("taxes")}</span>
                    <span className="text-gray-900">
                        {formatPrice(tax)}
                    </span>
                </div>

                <div className="border-t border-gray-100 pt-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">
                            {t("total")}
                        </span>

                        <span className="text-lg font-bold text-gray-900">
                            {formatPrice(total)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Checkout */}
            <Button className="h-11 w-full rounded-sm bg-[#FF6636] text-sm text-white hover:bg-[#E85528]">

                {t("proceedToCheckout")}

            </Button>

            <CouponForm />
        </aside>
    );
}