import { Course } from "../../types/course";


interface InstructorTabProps {
  course: Course;
}

export function InstructorTabContent({ course }: InstructorTabProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Course Instructor
      </h2>

      {course.instructors.length > 0 ? (
        <div className="space-y-4">
          {course.instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="rounded-lg border p-4"
            >
              <h3 className="font-medium text-slate-900">
                {instructor.name}
              </h3>

              
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-500">
          Instructor information is not available yet.
        </p>
      )}
    </section>
  );
}