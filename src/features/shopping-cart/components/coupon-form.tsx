"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function CouponForm() {
    const [coupon, setCoupon] = useState("");

    const handleApplyCoupon = () => {
        if (!coupon.trim()) return;

        // Coupon API will be added later
        console.log("Applying coupon:", coupon);
    };
    const t = useTranslations("ShoppingCart");
    return (
        <div className="space-y-3 border-t border-gray-100 pt-4">
            <p className="text-xs font-medium text-gray-900">
                {t("applyCoupon")}
            </p>

            <div className="flex">
                <Input
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder={t("couponPlaceholder")}
                    className="h-9 rounded-sm border-gray-200 text-xs"
                />

                <Button
                    onClick={handleApplyCoupon}
                    className="h-9 rounded-sm text-white  bg-gray-900 px-4 text-xs hover:bg-gray-700"
                >
                    {t("apply")}
                </Button>
            </div>
        </div>
    );
}