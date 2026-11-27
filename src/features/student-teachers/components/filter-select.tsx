import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectOption } from "../types/instructors";

interface FilterSelectProps {
  options: SelectOption[];
  ariaLabel: string;
  defaultValue?: string;
}

export function FilterSelect({ options, ariaLabel, defaultValue = options[0]?.value }: FilterSelectProps) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger aria-label={ariaLabel} className="h-10 w-full rounded-sm border-slate-200 text-xs text-slate-600">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map(({ value, label }) => (
          <SelectItem key={value} value={value} className="text-xs">
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}