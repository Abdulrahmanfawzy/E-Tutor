'use client'
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import type { PopularKeyword } from "../types/course-category.types";
import { useState } from "react";

interface PopularKeywordsProps {
  keywords: PopularKeyword[];
}

export default function PopularKeywords({ keywords }: PopularKeywordsProps) {
  const t = useTranslations("courseCategories");
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  return (
    <section className="flex flex-wrap items-center gap-3">
      <h2 className="mr-1 text-[18px]  text-gray-900 tracking-[-1.5%]">
        {t("popularKeywords.title")}
      </h2>

      {keywords.map((keyword) => (
        <Badge
          key={keyword.keyword}
          onClick={() => setActiveKeyword(keyword.keyword)}
          title={t("courseCount", { count: keyword.courses_count })}
          variant="secondary"
          className={`h-5 cursor-pointer rounded-none px-2 py-3.5 text-[14px] font-medium transition-colors ${keyword.keyword === activeKeyword
            ? "bg-orange-400 text-white"
            : "bg-muted text-gray-900 "
            }`}
        >
          {keyword.keyword}
        </Badge>
      ))}
    </section>
  );
}
