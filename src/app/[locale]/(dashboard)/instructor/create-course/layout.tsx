import CourseCreationHeader from "@/features/create-course/components/shared/course-creation-header";
import { CourseCreationProvider } from "@/features/create-course/context/course-creation-context";

interface CreateCourseLayoutProps {
  children: React.ReactNode;
}

export default function CreateCourseLayout({
  children,
}: CreateCourseLayoutProps) {
  return (
    <CourseCreationProvider>
      <div className="min-h-screen bg-white">
        <CourseCreationHeader />
        {children}
      </div>
    </CourseCreationProvider>
  );
}
