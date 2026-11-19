import SearchInput from '@/components/common/search-input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function CoursesFilters() {

   const t = useTranslations("instructorCourses");

  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col">
          <SearchInput placeholder={t("searchPlaceholder")} />
      </div>
        <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">{t("filters.sortBy")}</p>
         <Select defaultValue="latest">
      <SelectTrigger className=" border-0 text-label-sm shadow-none text-gray-600">
        <SelectValue />
      </SelectTrigger>
      <SelectContent >
        <SelectItem value="latest">{t("sortOptions.latest")}</SelectItem>
        <SelectItem value="oldest">  {t("sortOptions.oldest")}</SelectItem>
      </SelectContent>
    </Select>
        </div>
        <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500"> {t("filters.category")}</p>
         <Select defaultValue="All Categories">
      <SelectTrigger className=" border-0 text-label-sm shadow-none text-gray-600">
        <SelectValue />
      </SelectTrigger>
      <SelectContent >
        <SelectItem value="all">  {t("categoryOptions.all")}</SelectItem>
        <SelectItem value="Development"> {t("categoryOptions.development")}</SelectItem>
        <SelectItem value="Design"> {t("categoryOptions.design")}</SelectItem>
        <SelectItem value="Marketing"> {t("categoryOptions.marketing")}</SelectItem>
        <SelectItem value="Business">   {t("categoryOptions.business")}</SelectItem>

      </SelectContent>
    </Select>
        </div>
           <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">Rating</p>
         <Select defaultValue="All Ratings">
      <SelectTrigger className=" border-0 text-label-sm shadow-none text-gray-600">
        <SelectValue />
      </SelectTrigger>
      <SelectContent >
        <SelectItem value="all">  {t("ratingOptions.all")}</SelectItem>
        <SelectItem value="3.5">  {t("ratingOptions.threeAndHalfUp")}</SelectItem>
        <SelectItem value="3.0"> {t("ratingOptions.threeUp")}</SelectItem>
      </SelectContent>
    </Select>
        </div>
    </div>
  )
}
