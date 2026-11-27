import { CheckCircle2 } from "lucide-react";

interface LearningOutcomesProps {
    items: string[];
    isRTL: boolean;
}

export function LearningOutcomes({
    items,
    isRTL,
}: LearningOutcomesProps) {
    return (
        <div
            className="rounded-sm bg-[#F1FAF3] px-4 py-5 sm:px-6 sm:py-6"
            dir={isRTL ? "rtl" : "ltr"}
        >
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-2.5"
                    >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 fill-green-500 text-white" />

                        <p className="text-xs leading-5 text-slate-700">
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}