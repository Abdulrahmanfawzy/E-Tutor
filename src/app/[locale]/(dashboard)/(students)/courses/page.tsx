import StudentCoursesList from "@/features/student-dashboard/student-courses/components/student-courses-list";
import { STUDENT_COURSES } from "@/features/student-dashboard/student-courses/data/mock-student-courses";


export default function Page() {


    return (
        <div className="flex flex-col gap-4 mt-4">
      <h2 className="text-lg font-semibold">Courses ({STUDENT_COURSES.length})</h2>
      <StudentCoursesList courses={STUDENT_COURSES} />
    </div>
    );
}

