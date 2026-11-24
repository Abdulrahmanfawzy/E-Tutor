import CartPageHeader from "@/features/shopping-cart/components/cart-page-header";
import CartContent from "@/features/shopping-cart/components/cart-content";

export default function ShoppingCartPage() {
    return (
        <main className="min-h-screen bg-white">
            <CartPageHeader />
            <CartContent />
        </main>
    );
}