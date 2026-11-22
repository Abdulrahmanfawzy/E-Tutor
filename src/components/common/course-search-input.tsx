
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseSearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function CourseSearchInput({
    value,
    onChange,
    placeholder = "Search courses...",
}: CourseSearchInputProps) {
    return (
        <div className="flex flex-1 items-center gap-2 border border-gray-200 px-3">
            <Search size={17} className="shrink-0 text-gray-400" />

            <input
                type="text"
                value={value}
                onChange={(event) => onChange(event.currentTarget.value)}
                placeholder={placeholder}
                aria-label="Search courses"
                className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />

            {value && (
                <Button
                    type="button"
                    variant="ghost"
                    size="xs"
                    onClick={() => onChange("")}
                    className="h-auto rounded-none px-0 py-0 text-xs font-normal text-gray-400 hover:bg-transparent hover:text-gray-700"
                >
                    Clear
                </Button>
            )}
        </div>
    );
}
