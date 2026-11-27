import { SelectOption } from "../types/instructors";
import { FilterField } from "./filter-filed";
import { FilterSelect } from "./filter-select";
import { SearchInput } from "./search-input";

interface InstructorsFiltersProps {
  courseOptions: SelectOption[];
  teacherOptions: SelectOption[];
}

export function InstructorsFilters({ courseOptions, teacherOptions }: InstructorsFiltersProps) {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_220px_160px]">
      <FilterField label="Search">
        <SearchInput placeholder="Search in your teachers..." />
      </FilterField>
      <FilterField label="Courses">
        <FilterSelect options={courseOptions} ariaLabel="Filter by course" />
      </FilterField>
      <FilterField label="Teacher">
        <FilterSelect options={teacherOptions} ariaLabel="Filter by teacher" />
      </FilterField>
    </div>
  );
}