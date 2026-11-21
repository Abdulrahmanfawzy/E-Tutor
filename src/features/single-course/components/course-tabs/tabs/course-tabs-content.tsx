import { useTranslations } from "next-intl";
import { Course } from "../../../types/course";
import { Curriculum } from "../../../types/curriculum";
import { CourseTabs } from "./course-tabs";
import { OverviewTabContent } from "./overview/overview-tab-content";
import { CurriculumTabContent } from "./curriculum/cirriculum-tab-content";
import { InstructorTabContent } from "./instructor/instructor-tab-content";
import ReviewTabContent from "./review/review-tab-content";

interface CourseTabsContentProps {
  course: Course;
  curriculum: Curriculum;

}

export function CourseTabsContent({
  course, curriculum
}: CourseTabsContentProps) {
  const t = useTranslations("courseDetails.tabs");
  const tabs = [
    {
      id: "overview",
      label: t("overview"),
      content: (
        <OverviewTabContent course={course} />
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
        <InstructorTabContent course={course} />
      ),
    },

    {
      id: "reviews",
      label: t("reviews"),
      content: (
        <ReviewTabContent course={course} />
      ),
    },
  ];

  return (
    <CourseTabs tabs={tabs} defaultTab="overview" />
  );
}