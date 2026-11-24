'use client'
import { Badge } from "@/components/ui/badge";
import { popularKeywords } from "../data/courses-data";
import { useState } from "react";


export default function PopularKeywords() {
  const [activeTool, setActiveTool] = useState("Developments");
  return (
    <section className="flex flex-wrap items-center gap-3">
      <h2 className="mr-1 text-[18px]  text-gray-900 tracking-[-1.5%]">
        Popular keyword:
      </h2>

      {popularKeywords.map((keyword) => (
        <Badge
          key={keyword}
          onClick={() => setActiveTool(keyword)}
          variant="secondary"
          className={`h-5 cursor-pointer rounded-none px-2 py-3.5 text-[14px] font-medium transition-colors ${keyword === activeTool
              ? "bg-orange-400 text-white"
              : "bg-muted text-gray-900 "
            }`}
        >
          {keyword}
        </Badge>
      ))}
    </section>
  );
}
