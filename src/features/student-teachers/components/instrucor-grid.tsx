import { InstructorListItem } from "../types/instructors";
import { InstructorCard } from "./instructor-card";

export function InstructorsGrid({ instructors }: { instructors: InstructorListItem[] }) {
  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {instructors.map((instructor) => (
        <li key={instructor.id}>
          <InstructorCard instructor={instructor} />
        </li>
      ))}
    </ul>
  );
}