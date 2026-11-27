"use client";

import { useState } from "react";
import { purchases } from "@/app/[locale]/(website)/student/purchase-history/data"; 
import PurchaseItem from "./purchase-item";

export default function PurchaseHistorySection() {
  const [openId, setOpenId] = useState<number | null>(2);

  return (
    <section className="py-6">
      <h2 className="mb-4 text-lg font-medium text-gray-900">Purchase History</h2>

      <div className="border-t border-gray-100">
        {purchases.map((p) => (
          <PurchaseItem
            key={p.id}
            purchase={p}
            open={openId === p.id}
            onToggle={() => setOpenId(openId === p.id ? null : p.id)}
          />
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-gray-700">
        Yay! You have seen all your purchase history. 😎
      </p>
    </section>
  );
}
