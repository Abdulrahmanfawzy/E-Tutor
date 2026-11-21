import { ChevronDown } from "lucide-react";

interface SortOption<T extends string> {
    value: T;
    label: string;
}

interface CourseSortSelectProps<T extends string> {
    value: T;
    options: readonly SortOption<T>[];
    onChange: (value: T) => void;
    id?: string;
}

export default function CourseSortSelect<T extends string>({
    value,
    options,
    onChange,
    id = "course-sort",
}: CourseSortSelectProps<T>) {
    return (
        <div className="flex items-center justify-end gap-3">
            <label htmlFor={id} className="text-xs text-gray-500">
                Sort by:
            </label>

            <div className="relative">
                <select
                    id={id}
                    value={value}
                    onChange={(event) =>
                        onChange(event.currentTarget.value as T)
                    }
                    className="h-10 min-w-32 appearance-none border border-gray-200 bg-white px-3 pr-9 text-sm outline-none"
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <ChevronDown
                    size={14}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
            </div>
        </div>
    );
}