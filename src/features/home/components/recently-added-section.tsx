
import { courses } from "../data/home.mock";
import { CoursesGridSection } from "./courses-grid-section";

export function RecentlyAddedSection() {
  return (
    <CoursesGridSection
      title="Recently added courses"
      courses={courses.slice(2, 8)}
      background="bg-white"
    />
  );
}
