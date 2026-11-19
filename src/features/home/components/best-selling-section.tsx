
import { useTranslations } from "next-intl";

import { courses } from "../data/home.mock";
import { CoursesGridSection } from "./courses-grid-section";

export function BestSellingSection() {
  const t = useTranslations("home.bestSelling");

  return (
    <CoursesGridSection
      title={t("title")}
      courses={courses.slice(0, 10)}
    />
  );
}
