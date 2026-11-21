

import CourseCreationHeader from "@/features/create-course/components/shared/course-creation-header";

interface CreateCourseLayoutProps {
  children: React.ReactNode;
}

export default function CreateCourseLayout({
  children,
}: CreateCourseLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <CourseCreationHeader />
      {children}
    </div>
  );
}