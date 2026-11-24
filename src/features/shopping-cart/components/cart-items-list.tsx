import { useTranslations } from "next-intl";
import { CartCourse } from "../types/cart.types";
import CartItemRow from "./cart-item-row";

interface CartItemsListProps {
    courses: CartCourse[];
    onRemove: (id: number) => void;
    onMoveToWishlist: (id: number) => void;
}

export default function CartItemsList({
    courses,
    onRemove,
    onMoveToWishlist,
}: CartItemsListProps) {
    const t = useTranslations("ShoppingCart");
    return (
        <div className="overflow-hidden border border-gray-100 rounded-sm">
            {/* Table Header */}
            <div className="hidden grid-cols-[minmax(0,1fr)_100px_120px] border-b border-gray-100 bg-white px-4 py-3 text-[10px] uppercase text-gray-500 sm:grid">
                <span>{t("course")}</span>
                <span>{t("prices")}</span>
                <span>{t("action")}</span>
            </div>

            {courses.length > 0 ? (
                courses.map((course) => (
                    <CartItemRow
                        key={course.id}
                        course={course}
                        onRemove={onRemove}
                        onMoveToWishlist={onMoveToWishlist}
                    />
                ))
            ) : (
                <div className="py-12 text-center text-sm text-gray-500">
                    {t("emptyCart")}
                </div>
            )}
        </div>
    );
}