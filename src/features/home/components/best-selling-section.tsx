
import { courses } from "../data/home.mock";
import { CoursesGridSection } from "./courses-grid-section";

export function BestSellingSection() {
  return (
    <CoursesGridSection
      title="Best selling courses"
      courses={courses.slice(0, 10)}
    />
  );
}
