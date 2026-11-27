
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface CourseSearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function CourseSearchInput({
    value,
    onChange,
    placeholder,
}: CourseSearchInputProps) {
    const t = useTranslations("courseListing");

    return (
        <div className="flex flex-1 items-center gap-2 rounded-sm border border-gray-100 px-3">
            <Search size={17} className="shrink-0 text-gray-400" />

            <input
                type="text"
                value={value}
                onChange={(event) => onChange(event.currentTarget.value)}
                placeholder={placeholder ?? t("searchPlaceholder")}
                aria-label={t("searchLabel")}
                className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />

            {value && (
                <Button
                    type="button"
                    variant="ghost"
                    size="xs"
                    onClick={() => onChange("")}
                    aria-label={t("clearSearch")}
                    className="h-auto rounded-none px-0 py-0 text-xs font-normal text-gray-400 hover:bg-transparent hover:text-gray-700"
                >
                    {t("clearSearch")}
                </Button>
            )}
        </div>
    );
}
