"use client";

import SearchInput from "@/components/common/search-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";

export default function CoursesFilters() {
  const t = useTranslations("instructorCourses");

  return (
    <div className="flex flex-wrap items-end gap-4">
      <div className="min-w-60 flex-1">
        <p className="mb-2 text-label-sm text-gray-500">&nbsp;</p>
        <SearchInput placeholder={t("searchPlaceholder")} className="max-w-none" />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-label-sm text-gray-500">{t("filters.sortBy")}</p>
        <Select defaultValue="latest">
          <SelectTrigger className="h-10 w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">{t("sortOptions.latest")}</SelectItem>
            <SelectItem value="oldest">{t("sortOptions.oldest")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-label-sm text-gray-500">{t("filters.category")}</p>
        <Select defaultValue="all">
          <SelectTrigger className="h-10 w-44">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("categoryOptions.all")}</SelectItem>
            <SelectItem value="development">{t("categoryOptions.development")}</SelectItem>
            <SelectItem value="design">{t("categoryOptions.design")}</SelectItem>
            <SelectItem value="marketing">{t("categoryOptions.marketing")}</SelectItem>
            <SelectItem value="business">{t("categoryOptions.business")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-label-sm text-gray-500">{t("filters.rating")}</p>
        <Select defaultValue="all">
          <SelectTrigger className="h-10 w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("ratingOptions.all")}</SelectItem>
            <SelectItem value="3.5">{t("ratingOptions.threeAndHalfUp")}</SelectItem>
            <SelectItem value="3.0">{t("ratingOptions.threeUp")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}