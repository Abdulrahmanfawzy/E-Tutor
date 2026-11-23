"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseFilterSectionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export default function CourseFilterSection({
    title,
    children,
    defaultOpen = true,
}: CourseFilterSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <section className="border-b border-gray-100">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between py-4 text-sm font-semibold uppercase text-[#1D2026]"
            >
                {title}

                <ChevronDown
                    size={18}
                    className={cn(
                        "text-gray-500 transition-transform duration-200",
                        isOpen && "rotate-180"
                    )}
                />
            </button>

            <div
                className={cn(
                    "grid transition-all duration-200",
                    isOpen
                        ? "grid-rows-[1fr] pb-4 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                )}
            >
                <div className="overflow-hidden">{children}</div>
            </div>
        </section>
    );
}