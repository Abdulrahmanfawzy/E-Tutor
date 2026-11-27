
"use client";


import Image from "next/image";

import type { Purchase } from "@/app/[locale]/(website)/student/purchase-history/types"; 

type Props = {
  purchase: Purchase;
  open: boolean;
  onToggle: () => void;
};

export default function PurchaseItem({ purchase, open, onToggle }: Props) {
  return (
    <div className={`border-b border-gray-100 ${open ? "shadow-md" : ""}`}>
      {/* Header row */}
      <div className="flex items-center justify-between px-4 py-4">
        <div>
          <p className={`text-sm ${open ? "text-orange-500" : "text-gray-900"}`}>
            {purchase.date}
          </p>
          <div className="mt-2 flex items-center gap-6 text-xs text-gray-600">
            <span>{purchase.coursesCount} Courses</span>
            <span className="text-orange-500">{purchase.total}</span>
            <span className="text-green-600">{purchase.method}</span>
          </div>
        </div>

        <button
          onClick={onToggle}
          aria-expanded={open}
          className={`flex h-8 w-8 items-center justify-center rounded border text-sm transition ${
            open
              ? "border-orange-500 bg-orange-500 text-white"
              : "border-gray-200 text-gray-600"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* Details */}
      {open && purchase.courses.length > 0 && (
        <div className="flex flex-col border-t border-gray-100 md:flex-row">
          <div className="flex-1 space-y-4 p-4">
            {purchase.courses.map((c) => (
              <div key={c.id} className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-16 w-24 rounded object-cover bg-gray-200"
                />
                <div className="flex flex-1 items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-gray-600">
                      <span className="text-amber-500">★ {c.rating}</span> ({c.reviews})
                    </p>
                    <p className="text-sm font-medium text-gray-900">{c.title}</p>
                    <p className="text-xs text-gray-500">Course by: {c.instructor}</p>
                  </div>
                  <span className="text-sm font-semibold text-orange-500">
                    ${c.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 p-6 md:w-80 md:border-l md:border-t-0">
            <p className="text-lg text-gray-900">{purchase.date}</p>
            <div className="mt-2 flex items-center gap-6 text-xs text-gray-600">
              <span>{purchase.coursesCount} Courses</span>
              <span className="text-orange-500">{purchase.total}</span>
              <span className="text-green-600">{purchase.method}</span>
            </div>
            {purchase.card && (
              <div className="mt-4 flex items-center justify-between text-xs text-gray-700">
                <span>{purchase.card.holder}</span>
                <span className="font-medium">{purchase.card.number}</span>
                <span className="text-gray-500">{purchase.card.expiry}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
