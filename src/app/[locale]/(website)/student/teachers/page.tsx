
import { InstructorsGrid } from "@/features/student-teachers/components/instrucor-grid";
import { InstructorsFilters } from "@/features/student-teachers/components/instructors-filter";
import { courseFilterOptions, instructors, instructorsTotal, teacherFilterOptions } from "@/features/student-teachers/constants/instructors";
import { SectionHeading } from "@/features/watch-course/components/heading-comments";

export default function InstructorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8">
        <SectionHeading title="Instructors" count={instructorsTotal} />
        <InstructorsFilters courseOptions={courseFilterOptions} teacherOptions={teacherFilterOptions} />
        <InstructorsGrid instructors={instructors} />
      </div>
    </main>
  );
}