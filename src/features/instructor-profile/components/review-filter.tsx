import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RatingFilterOption } from "../types/review";

interface ReviewFilterProps {
  options: RatingFilterOption[];
  defaultValue?: string;
}

export function ReviewFilter({ options, defaultValue = options[0]?.value }: ReviewFilterProps) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger aria-label="Filter reviews by rating" className="w-44 rounded-sm border-slate-200 text-xs text-slate-600">
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