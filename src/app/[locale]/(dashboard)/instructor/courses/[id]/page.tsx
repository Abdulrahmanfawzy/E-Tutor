import CourseBreadcrumb from "@/features/instructor-courses/components/course-breadCrumb";
import CourseHeader from "@/features/instructor-courses/components/course-header";
import StatTiles from "@/features/instructor-courses/components/course-stats-tiles";
import { COURSE } from "@/features/instructor-courses/data/mock-courses";
import CourseOverviewChart from "@/features/instructor-dashboard/components/course-overview-chart";
import CourseRating from "@/features/instructor-dashboard/components/course-rating";
import RevenueChart from "@/features/instructor-dashboard/components/revenue-chart";


export default function CourseDetailsPage() {
  return (
    <div className="flex flex-col gap-6">
      <CourseBreadcrumb
        items={[
          { label: "Course" },
          { label: "My Courses", href: "../courses" },
          { label: "Development" },
          { label: "Web Development" },
          { label: COURSE.title },
        ]}
      />

      <CourseHeader course={COURSE} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <StatTiles />
        <CourseRating />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RevenueChart />
        <CourseOverviewChart />
      </div>
    </div>
  );
}