import { Button } from "@/components/ui/button";

interface CourseEmptyStateProps {
    onClear: () => void;
    title?: string;
    description?: string;
    clearLabel?: string;
}

export default function CourseEmptyState({
    onClear,
    title = "No courses found",
    description = "Try changing your search or filters.",
    clearLabel = "Clear all filters",
}: CourseEmptyStateProps) {
    return (
        <div className="py-16 text-center">
            <p className="text-base font-semibold text-[#1D2026]">
                {title}
            </p>

            <p className="mt-2 text-sm text-gray-400">
                {description}
            </p>

            <Button
                type="button"
                variant="link"
                size="xs"
                onClick={onClear}
                className="mt-4 h-auto rounded-none px-0 py-0 text-sm font-medium text-[#FF6636]"
            >
                {clearLabel}
            </Button>
        </div>
    );
}