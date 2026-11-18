"use client";

import { useState } from "react";
import { CreditCard, Check } from "lucide-react";
import { PaymentMethodType } from "../types/gift-course-type";
import SavedPaymentCard from "./saved-payment-card";
import NewPaymentCardForm from "./new-payment-card-form";


const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] =
    useState<PaymentMethodType>("new");

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-lg font-medium text-gray-900">Payment Method</h2>

      <div className="flex flex-col gap-5">
        {/* Visa */}
        <SavedPaymentCard
          type="visa"
          number="4855 **** **** ****"
          expiry="04/24"
          holder="Vako Shvili"
          selected={selectedMethod === "visa"}
          onSelect={() => setSelectedMethod("visa")}
        />

        {/* Mastercard */}
        <SavedPaymentCard
          type="mastercard"
          number="5795 **** **** ****"
          expiry="04/24"
          holder="Vako Shvili"
          selected={selectedMethod === "mastercard"}
          onSelect={() => setSelectedMethod("mastercard")}
        />

        {/* PayPal */}
        <button
          type="button"
          onClick={() => setSelectedMethod("paypal")}
          className={`w-full flex items-center gap-6 border px-6 py-2.5 text-left transition
            ${
              selectedMethod === "paypal"
                ? "border-success"
                : "border-gray-200 hover:border-gray-400"
            }`}
        >
          <span className="w-8 h-8 font-black italic text-blue-900">P</span>

          <span className="text-xs text-gray-500 font-normal">
            You will be redirected to the PayPal site after reviewing your
            order.
          </span>

          {selectedMethod === "paypal" && (
            <span className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
              <Check size={16} strokeWidth={3} />
            </span>
          )}
        </button>

        {/* New Payment Card */}
        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={() => setSelectedMethod("new")}
            className={`w-full flex items-center gap-6 border px-6 py-2.5 text-left transition
              ${
                selectedMethod === "new"
                  ? "border-success"
                  : "border-gray-200 hover:border-gray-400"
              }`}
          >
            <CreditCard
              size={32}
              strokeWidth={1.5}
              className="shrink-0 text-orange-500"
            />

            <span className="text-sm font-normal text-gray-700">
              New Payment Cards
            </span>

            {selectedMethod === "new" && (
              <span className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                <Check size={16} strokeWidth={3} />
              </span>
            )}
          </button>

          {selectedMethod === "new" && <NewPaymentCardForm />}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;