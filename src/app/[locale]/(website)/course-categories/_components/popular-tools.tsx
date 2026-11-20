
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { popularTools } from "./courses-data";

export default function PopularTools() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTool, setActiveTool] = useState("Laravel");

  const visibleTools = Array.from(
    { length: 6 },
    (_, index) => popularTools[(activeIndex + index) % popularTools.length]
  );

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % popularTools.length);
  };

  const handlePrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + popularTools.length) % popularTools.length
    );
  };

  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Popular tools
        </h2>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevious}
            aria-label="Previous tools"
            className="text-red-400 transition-colors hover:text-red-600"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next tools"
            className="text-gray-400 transition-colors hover:text-gray-700"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Tools */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {visibleTools.map((tool, index) => (
          <Card
            key={`${tool.name}-${index}`}
            onClick={()=>setActiveTool(tool.name)}
            className={`flex cursor-pointer flex-col items-center justify-center gap-1 rounded-none  px-2 py-4 shadow-none transition-all hover:-translate-y-1 hover:shadow-md ${
              activeTool === tool.name 
                ? "border-transparent shadow-md"
                : ""
            }`}
          >
            <h3
              className={`text-base leading-5.5 ${
                activeTool === tool.name 
                  ? "text-orange-400"
                  : "text-gray-900"
              }
              `}
            >
              {tool.name}
            </h3>

            <span className="text-xs text-gray-500 leading-4">
              {tool.courses}
            </span>
          </Card>
        ))}
      </div>
    </section>
  );
}
