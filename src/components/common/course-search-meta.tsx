import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Skeleton } from "@/components/ui/skeleton";

interface CourseSearchMetaProps {
    suggestions: readonly string[];
    resultCount: number;
    search: string;
    onSuggestionClick: (value: string) => void;
    suggestionsLoading?: boolean;
    suggestionsError?: boolean;
    onRetrySuggestions?: () => void;
}

export default function CourseSearchMeta({
    suggestions,
    resultCount,
    search,
    onSuggestionClick,
    suggestionsLoading = false,
    suggestionsError = false,
    onRetrySuggestions,
}: CourseSearchMetaProps) {
    const t = useTranslations("courseListing");

    return (
        <div className="flex flex-col gap-3 border-b border-gray-100 pb-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                <span className="text-xs text-gray-500">
                    {t("suggestionsTitle")}
                </span>

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
                {suggestionsLoading &&
                    Array.from({ length: 3 }, (_, index) => (
                        <Skeleton key={index} className="h-4 w-16" />
                    ))}
                {suggestionsError && (
                    <span className="flex items-center gap-2 text-xs text-red-600">
                        <span role="alert">{t("suggestionsError")}</span>
                        {onRetrySuggestions && (
                            <Button
                                type="button"
                                variant="link"
                                size="xs"
                                onClick={onRetrySuggestions}
                                className="h-auto p-0 text-xs"
                            >
                                {t("suggestionRetry")}
                            </Button>
                        )}
                    </span>
                )}
                {!suggestionsLoading &&
                    !suggestionsError &&
                    search.trim().length >= 2 &&
                    suggestions.length === 0 && (
                        <span className="text-xs text-gray-400">
                            {t("noSuggestions")}
                        </span>
                    )}
            </div>

            <p className="text-xs text-gray-500">
                <span className="font-semibold text-[#1D2026]">
                    {t("resultsFound", { count: resultCount })}
                </span>
                {search.trim() && (
                    <>
                        {" "}
                        {t("forSearch", { search })}
                    </>
                )}
            </p>
        </div>
    );
}