import { Course } from "../../types/course";
import { CurriculumTabContent } from "./cirriculum-tab-content";
import { CourseTabs } from "./course-tabs";
import { InstructorTabContent } from "./instructor-tab-content";
import { OverviewTabContent } from "./overview-tab-content";
import ReviewTabContent from "./review-tab-content";

interface CourseTabsContentProps {
  course: Course;
}

export function CourseTabsContent({
  course,
}: CourseTabsContentProps) {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <OverviewTabContent course={course} />
      ),
    },

    {
      id: "curriculum",
      label: "Curriculum",
      content: (
        <CurriculumTabContent course={course} />
      ),
    },

    {
      id: "instructor",
      label: "Instructor",
      content: (
        <InstructorTabContent course={course} />
      ),
    },

    {
      id: "reviews",
      label: "Reviews",
      content: (
        <ReviewTabContent course={course} />
      ),
    },
  ];

  return (
    <CourseTabs tabs={tabs} defaultTab="overview" />
  );
}