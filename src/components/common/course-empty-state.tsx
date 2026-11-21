import { Button } from "@/components/ui/button";

interface CourseEmptyStateProps {
    onClear: () => void;
}

export default function CourseEmptyState({
    onClear,
}: CourseEmptyStateProps) {
    return (
        <div className="py-16 text-center">
            <p className="text-base font-semibold text-[#1D2026]">
                No courses found
            </p>

            <p className="mt-2 text-sm text-gray-400">
                Try changing your search or filters.
            </p>

            <Button
                type="button"
                variant="link"
                size="xs"
                onClick={onClear}
                className="mt-4 h-auto rounded-none px-0 py-0 text-sm font-medium text-[#FF6636]"
            >
                Clear all filters
            </Button>
        </div>
    );
}