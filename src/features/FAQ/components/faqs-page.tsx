
"use client";

import { useMemo, useState } from "react";

import { useFaqs } from "../hooks/use-faqs";
import { FaqsHero } from "./faqs-hero";
import { FaqCategories } from "./faq-categories";
import { FaqAccordion } from "./faq-accordion";
import { FaqForm } from "./faq-form";

export function FaqsPage() {
  const { data, isLoading, isError } = useFaqs();

  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const [openFaqId, setOpenFaqId] = useState<number | null>(4);

  const filteredFaqs = useMemo(
    () =>
      data?.faqs.filter(
        (faq) => faq.categoryId === activeCategoryId,
      ) ?? [],
    [data, activeCategoryId],
  );

  const handleCategoryChange = (id: number) => {
    setActiveCategoryId(id);
    setOpenFaqId(null);
  };

  const handleFaqToggle = (id: number) => {
    setOpenFaqId((currentId) => (currentId === id ? null : id));
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-sm text-gray-500">Loading FAQs...</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-sm text-red-500">
          Something went wrong while loading FAQs.
        </p>
      </div>
    );
  }

  return (
    <main>
      <FaqsHero />

      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-[26px]">
              Frequently asked questions
            </h2>

            <select
              value={activeCategoryId}
              onChange={(event) =>
                handleCategoryChange(Number(event.target.value))
              }
              className="w-full border border-gray-100 bg-white px-3 py-2.5 text-xs text-gray-600 outline-none focus:border-orange-400 sm:w-32"
              aria-label="Select FAQ category"
            >
              {data.categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[162px_minmax(0,1fr)] lg:grid-cols-[162px_minmax(0,1fr)_213px]">
            <FaqCategories
              categories={data.categories}
              activeCategoryId={activeCategoryId}
              onSelect={handleCategoryChange}
            />

            <FaqAccordion
              faqs={filteredFaqs}
              openFaqId={openFaqId}
              onToggle={handleFaqToggle}
            />

            <FaqForm />
          </div>
        </div>
      </section>
    </main>
  );
}
