"use client";

import { useEffect, useState } from "react";
import PurchaseItem from "./purchase-item";
import { fetchPurchases } from "@/app/[locale]/(website)/student/purchase-history/api"; 
import type { Purchase } from "@/app/[locale]/(website)/student/purchase-history/types";

export default function PurchaseHistorySection() {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [openId, setOpenId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchPurchases(controller.signal)
      .then((data) => {
        setPurchases(data);
        setOpenId(data[0]?.id ?? null);
      })
      .catch((e) => {
        if (e.name !== "AbortError") setError(e.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <section className="py-6">
      <h2 className="mb-4 text-lg font-medium text-gray-900">Purchase History</h2>

      {loading && <p className="py-8 text-center text-sm text-gray-500">Loading...</p>}
      {error && <p className="py-8 text-center text-sm text-red-500">{error}</p>}

      {!loading && !error && (
        <>
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
            {purchases.length
              ? "Yay! You have seen all your purchase history. 😎"
              : "You have no purchases yet."}
          </p>
        </>
      )}
    </section>
  );
}