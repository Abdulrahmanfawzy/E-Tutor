"use client";

import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-lg border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-gray-800">
            {t("name")}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            placeholder={t("namePlaceholder")}
            className="h-11 rounded-md border border-gray-200 bg-gray-50 px-3 text-sm outline-none focus:border-[#FF6636]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="text-sm font-medium text-gray-800">
            {t("email")}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder={t("emailPlaceholder")}
            className="h-11 rounded-md border border-gray-200 bg-gray-50 px-3 text-sm outline-none focus:border-[#FF6636]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-subject" className="text-sm font-medium text-gray-800">
          {t("subject")}
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          placeholder={t("subjectPlaceholder")}
          className="h-11 rounded-md border border-gray-200 bg-gray-50 px-3 text-sm outline-none focus:border-[#FF6636]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-gray-800">
          {t("message")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          placeholder={t("messagePlaceholder")}
          className="resize-y rounded-md border border-gray-200 bg-gray-50 p-3 text-sm outline-none focus:border-[#FF6636]"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 self-start bg-[#FF6636] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e95327]"
      >
        <Send className="h-4 w-4" />
        {submitted ? t("success") : t("submit")}
      </button>
    </form>
  );
}
