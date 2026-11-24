
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Faq } from "../types/faqs.types";

interface FaqAccordionProps {
  faqs: Faq[];
  openFaqId: number | null;
  onToggle: (id: number) => void;
}

export function FaqAccordion({
  faqs,
  openFaqId,
  onToggle,
}: FaqAccordionProps) {
  if (faqs.length === 0) {
    return (
      <p className="border border-gray-100 bg-white p-5 text-sm text-gray-500">
        No questions available in this category.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const isOpen = openFaqId === faq.id;

        return (
          <article
            key={faq.id}
            className={`border border-gray-100 bg-white ${
              isOpen ? "shadow-lg shadow-gray-200/60" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => onToggle(faq.id)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-xs font-medium transition ${
                isOpen
                  ? "bg-gray-900 text-white"
                  : "text-gray-900 hover:bg-gray-50"
              }`}
            >
              <span>{faq.question}</span>

              {isOpen ? (
                <ChevronUp size={16} className="shrink-0" />
              ) : (
                <ChevronDown size={16} className="shrink-0" />
              )}
            </button>

            {isOpen && (
              <div className="px-4 py-4 text-xs leading-6 text-gray-600">
                {faq.answer}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
