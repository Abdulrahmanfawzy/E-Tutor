import { Button } from "@/components/ui/button";

interface CourseSearchMetaProps {
    suggestions: readonly string[];
    resultCount: number;
    search: string;
    onSuggestionClick: (value: string) => void;
}

export default function CourseSearchMeta({
    suggestions,
    resultCount,
    search,
    onSuggestionClick,
}: CourseSearchMetaProps) {
    return (
        <div className="flex flex-col gap-3 border-b border-gray-100 pb-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                <span className="text-xs text-gray-500">Suggestions:</span>

                {suggestions.map((item) => (
                    <Button
                        key={item}
                        type="button"
                        variant="link"
                        size="xs"
                        onClick={() => onSuggestionClick(item)}
                        className="h-auto rounded-none px-0 py-0 text-xs font-normal text-[#FF6636]"
                    >
                        {item}
                    </Button>
                ))}
            </div>

            <p className="text-xs text-gray-500">
                <span className="font-semibold text-[#1D2026]">
                    {resultCount}
                </span>{" "}
                results found
                {search.trim() && (
                    <>
                        {" "}for "{search}"
                    </>
                )}
            </p>
        </div>
    );
}