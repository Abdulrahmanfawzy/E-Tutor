"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const recipientSchema = z.object({
  recipientName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  recipientEmail: z
    .string()
    .email("Please enter a valid email address"),
  personalMessage: z
    .string()
    .max(500, "Message can't be longer than 500 characters")
    .optional(),
});

type RecipientFormData = z.infer<typeof recipientSchema>;

const RecipientInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecipientFormData>({
    resolver: zodResolver(recipientSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: RecipientFormData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4">
      <span className="text-lg font-medium">
        Recipient's Information
      </span>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4.5">
        {/* Recipient Name */}
        <div className="flex flex-col gap-1.5 self-stretch">
          <label
            htmlFor="recipient-name"
            className="text-sm font-normal"
          >
            Recipient's Name
          </label>

          <input
            id="recipient-name"
            type="text"
            placeholder="Full name"
            className="w-full bg-white border border-gray-100 pl-4.5 pt-3 pb-2.5 text-label-lg font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            {...register("recipientName")}
          />
          {errors.recipientName && (
            <p className="text-sm text-red-500 mt-1">
              {errors.recipientName.message}
            </p>
          )}
        </div>

        {/* Recipient Email */}
        <div className="flex flex-col gap-1.5 self-stretch">
          <label
            htmlFor="recipient-email"
            className="text-sm font-medium"
          >
            Recipient's Email
          </label>

          <input
            id="recipient-email"
            type="email"
            placeholder="Email Address"
            className="w-full bg-white border border-gray-100 pl-4.5 pt-3 pb-2.5 text-label-lg font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            {...register("recipientEmail")}
          />
          {errors.recipientEmail && (
            <p className="text-sm text-red-500 mt-1">
              {errors.recipientEmail.message}
            </p>
          )}
        </div>

        {/* Personal Message */}
        <div className="flex flex-col gap-1.5 self-stretch">
          <label
            htmlFor="recipient-message"
            className="text-sm font-medium"
          >
            Personal Message
          </label>

          <textarea
            id="recipient-message"
            rows={4}
            placeholder="Add your personal message here... "
            className="w-full resize-none bg-white border border-gray-100 pl-4.5 pt-3 text-label-lg outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            {...register("personalMessage")}
          />
          {errors.personalMessage && (
            <p className="text-sm text-red-500 mt-1">
              {errors.personalMessage.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default RecipientInformation;