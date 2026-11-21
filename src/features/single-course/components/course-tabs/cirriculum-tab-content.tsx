import { Course } from "../../types/course";

interface CurriculumTabContentProps{
    course:Course;
}
export function CurriculumTabContent({course}:CurriculumTabContentProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Course Curriculum
      </h2>

      <div className="space-y-3">
        <div className="rounded-md border p-4">
          <h3 className="font-medium text-slate-900">
            Section 1: Introduction
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Introduction to the course and learning objectives.
          </p>
        </div>

        <div className="rounded-md border p-4">
          <h3 className="font-medium text-slate-900">
            Section 2: Fundamentals
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Learn the fundamental concepts and tools.
          </p>
        </div>

        <div className="rounded-md border p-4">
          <h3 className="font-medium text-slate-900">
            Section 3: Practical Projects
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Apply what you learned through practical projects.
          </p>
        </div>
      </div>
    </section>
  );
}