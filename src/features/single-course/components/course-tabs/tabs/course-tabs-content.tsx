import { useTranslations } from "next-intl";
import { Curriculum } from "../../../types/curriculum";
import { CurriculumTabContent } from "./curriculum/cirriculum-tab-content";
import { InstructorTabContent } from "./instructor/instructor-tab-content";

import { OverviewTabContent } from "./overview/overview-tab-content";
import { ReviewsTabContent } from "./review/review-tab-content";
import { Tabs } from "@/components/common/tabs";

interface CourseTabsContentProps {

  curriculum: Curriculum;

}

export function CourseTabsContent({
  curriculum
}: CourseTabsContentProps) {
  const t = useTranslations("courseDetails.tabs");
  const tabs = [
    {
      id: "overview",
      label: t("overview"),
      content: (
        <OverviewTabContent />
      ),
    },

    {
      id: "curriculum",
      label: t("curriculum"),
      content: (
        <CurriculumTabContent curriculum={curriculum} />
      ),
    },

    {
      id: "instructor",
      label: t("instructor"),
      content: (
        <InstructorTabContent />
      ),
    },

    {
      id: "reviews",
      label: t("reviews"),
      content: (
        <ReviewsTabContent />
      ),
    },
  ];

  return (
    <Tabs tabs={tabs} defaultTab="overview" />
  );
}