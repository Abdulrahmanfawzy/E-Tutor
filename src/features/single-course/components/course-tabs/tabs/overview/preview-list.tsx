import { ArrowRight, Circle } from "lucide-react";

interface PreviewListProps {
    items: string[];
    variant: "arrow" | "bullet";
    isRTL: boolean;
}

export function PreviewList({
    items,
    variant,
    isRTL,
}: PreviewListProps) {
    const Icon = variant === "arrow" ? ArrowRight : Circle;

    return (
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="flex items-start gap-2"
                    dir={isRTL ? "rtl" : "ltr"}
                >
                    <Icon
                        className={`mt-0.5 size-3.5 shrink-0 ${variant === "arrow"
                            ? "text-orange-500"
                            : "size-1.5 fill-slate-700 text-slate-700"
                            } ${variant === "arrow" && isRTL
                                ? "rotate-180"
                                : ""
                            }`}
                    />

                    <span className="text-xs leading-5 text-slate-700">
                        {item}
                    </span>
                </li>
            ))}
        </ul>
    );
}