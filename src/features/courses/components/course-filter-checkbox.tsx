import { Checkbox } from "@/components/ui/checkbox";

interface CourseFilterCheckboxProps {
    label: string;
    count?: number;
    checked: boolean;
    onChange: (checked: boolean) => void;
    highlighted?: boolean;
}

export default function CourseFilterCheckbox({
    label,
    count,
    checked,
    onChange,
    highlighted = false,
}: CourseFilterCheckboxProps) {
    return (
        <label className="flex cursor-pointer items-center justify-between gap-3 py-1.5">
            <span className="flex min-w-0 items-center gap-2">
                <Checkbox
                    checked={checked}
                    onCheckedChange={(value) => onChange(value === true)}
                    className="size-4 rounded-none data-[state=checked]:border-[#F76C3C] data-[state=checked]:bg-[#F76C3C]"
                />

                <span
                    className={`text-sm ${checked || highlighted
                            ? "text-[#F76C3C]"
                            : "text-gray-600"
                        }`}
                >
                    {label}
                </span>
            </span>

            {count !== undefined && (
                <span className="shrink-0 text-xs text-gray-400">
                    {count.toLocaleString()}
                </span>
            )}
        </label>
    );
}