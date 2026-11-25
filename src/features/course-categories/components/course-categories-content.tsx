"use client";
import { useTranslations } from "next-intl";
import BestSellingCourses from "./best-selling-courses";
import PopularInstructors from "./popular-instructors";
import PopularKeywords from "./popular-keywords";
import PopularTools from "./popular-tools";
import { useCategoryLanding } from "../hooks/use-category-landing";
import CourseCategoriesSkeleton from "./course-categories-skeleton";

interface IProps {
  categorySlug: string;
}

const CourseCateogoriesContent = ({ categorySlug }: IProps) => {
  const t = useTranslations("courseCategories");
  const {
    data,
    isPending,
    isError,
  } = useCategoryLanding(categorySlug);

  if (isPending) {
    return <CourseCategoriesSkeleton />;
  }

  if (isError || !data?.success) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">{t("loadError")}</p>
      </main>
    );
  }
  const { category, best_selling, popular_tools, popular_keywords, popular_instructors } = data.data;

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex w-full max-w-285 flex-col gap-10 py-10">
        <BestSellingCourses
          categoryName={category.name}
          courses={best_selling}
        />
        <PopularTools tools={popular_tools} />
        <PopularKeywords keywords={popular_keywords} />
      </div>
      <PopularInstructors
        categoryName={category.name}
        instructors={popular_instructors}
      />
    </main>
  );
};

export default CourseCateogoriesContent;