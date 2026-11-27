
import type { FaqCategory } from "../types/faqs.types";

interface FaqCategoriesProps {
  categories: FaqCategory[];
  activeCategoryId: number;
  onSelect: (id: number) => void;
}

export function FaqCategories({
  categories,
  activeCategoryId,
  onSelect,
}: FaqCategoriesProps) {
  return (
    <aside>
      <div className="flex flex-col border border-gray-100">
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              className={`border-b border-gray-100 px-3 py-2.5 text-left text-xs transition last:border-b-0 ${
                isActive
                  ? "bg-orange-400 text-white"
                  : "bg-white text-gray-800 hover:bg-orange-50"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
