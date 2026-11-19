"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard } from "lucide-react";

const cardSchema = z.object({
  nameOnCard: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  cardNumber: z
    .string()
    .min(16, "Card number must be 16 digits")
    .max(19, "Invalid card number")
    .regex(/^\d+$/, "Card number must contain only numbers"),
  expiry: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use MM/YY format"),
  cvc: z
    .string()
    .min(3, "CVC must be 3 or 4 digits")
    .max(4, "CVC must be 3 or 4 digits")
    .regex(/^\d+$/, "CVC must be numbers only"),
  rememberCard: z.boolean().optional(),
});

type CardFormData = z.infer<typeof cardSchema>;

const NewPaymentCardForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CardFormData>({
    resolver: zodResolver(cardSchema),
    mode: "onBlur",
    defaultValues: {
      rememberCard: false,
    },
  });

  const onSubmit = (data: CardFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      
      {/* Name Card */}
      <div className="flex flex-col gap-1.5 mt-6">
        <label htmlFor="card-name" className="text-sm font-normal text-gray-900" >
          Name on Card
        </label>
        <input
          id="card-name"
          type="text"
          placeholder="Name on card"
          className="w-full bg-white border border-gray-100 pl-4.5 pt-3 pb-2.5 text-label-lg font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          {...register("nameOnCard")}
        />
        {errors.nameOnCard && (
          <p className="text-sm text-red-500 mt-1">
            {errors.nameOnCard.message}
          </p>
        )}
      </div>

{/* Card Number */}
<div className="flex flex-col gap-1.5">
  <label
    htmlFor="card-number"
    className="text-sm font-normal text-gray-900"
  >
    Card Number
  </label>

  <div className="relative">
    {/* Icon + vertical line */}
    <div className="pointer-events-none absolute left-4.5 top-1/2 -translate-y-1/2 flex items-center gap-3">
      <CreditCard size={20} strokeWidth={1.5} className="text-orange-500" />
      <div className="h-6 border bg-gray-100" />
    </div>

    <input
      id="card-number"
      type="text"
      inputMode="numeric"
      placeholder="Label"
      className="w-full bg-white border border-gray-100 pl-15.5 pt-3 pb-2.5 text-label-lg font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      {...register("cardNumber")}
    />
  </div>

  {errors.cardNumber && (
    <p className="text-sm text-red-500 mt-1">
      {errors.cardNumber.message}
    </p>
  )}
</div>

      {/* MM/YY */}
      <div className="grid grid-cols-2 gap-4.5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="card-expiry" className="text-sm font-normal text-gray-900" >
            MM/YY
          </label>
          <input
            id="card-expiry"
            type="text"
            placeholder="MM/YY"
            className="w-full bg-white border border-gray-100 pl-4.5 pt-3 pb-2.5 text-label-lg font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            {...register("expiry")}
          />
          {errors.expiry && (
            <p className="text-sm text-red-500 mt-1">
              {errors.expiry.message}
            </p>
          )}
        </div>

        {/* cvc */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="card-cvc" className="text-sm font-normal text-gray-900" >
            CVC
          </label>
          <input
            id="card-cvc"
            type="password"
            inputMode="numeric"
            placeholder="Security Code"
            className="w-full bg-white border border-gray-100 pl-4.5 pt-3 pb-2.5 text-label-lg font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            {...register("cvc")}
          />
          {errors.cvc && (
            <p className="text-sm text-red-500 mt-1">
              {errors.cvc.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <input
            type="checkbox"
            id="remember-card"
            className="size-5.5 appearance-none flex items-center justify-center  border border-gray-300 bg-white checked:border-orange-400 checked:bg-orange-400 checked:before:content-['✓'] checked:before:text-white checked:before:text-sm checked:before:font-bold checked:before:leading-none checked:before:grid checked:before:place-content-center cursor-pointer"
            {...register("rememberCard")}
        />
        <label htmlFor="remember-card" className="text-sm font-normal">
          Remember this card, save it on my card list
        </label>
      </div>
    </form>
  );
};

export default NewPaymentCardForm;