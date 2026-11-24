
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import type { PopularTool } from "../types/course-category.types";

interface PopularToolsProps {
  tools: PopularTool[];
}

export default function PopularTools({ tools }: PopularToolsProps) {
  const t = useTranslations("courseCategories");
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const visibleTools = Array.from(
    { length: Math.min(6, tools.length) },
    (_, index) => tools[(activeIndex + index) % tools.length],
  );

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % tools.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + tools.length) % tools.length);
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          {t("popularTools.title")}
        </h2>

        {tools.length > 6 && (
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              aria-label={t("previousTools")}
              className="text-red-400 transition-colors hover:text-red-600"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              onClick={handleNext}
              aria-label={t("nextTools")}
              className="text-gray-400 transition-colors hover:text-gray-700"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {visibleTools.map((tool) => (
          <Card
            key={tool.id}
            onClick={() => setActiveTool(tool.name)}
            className={`flex cursor-pointer flex-col items-center justify-center gap-1 rounded-none  px-2 py-4 shadow-none transition-all hover:-translate-y-1 hover:shadow-md ${activeTool === tool.name
              ? "border-transparent shadow-md"
              : ""
              }`}
          >
            <h3
              className={`text-base leading-5.5 ${activeTool === tool.name
                ? "text-orange-400"
                : "text-gray-900"
                }
              `}
            >
              {tool.name}
            </h3>

            <span className="text-xs text-gray-500 leading-4">
              {t("courseCount", { count: tool.courses_count })}
            </span>
          </Card>
        ))}
      </div>
    </section>
  );
}
