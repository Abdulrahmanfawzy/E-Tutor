"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";

export interface SelectOption<T extends string = string> {
    value: T;
    label: string;
    disabled?: boolean;
}

interface ReusableSelectProps<T extends string> {
    options: readonly SelectOption<T>[];
    value?: T;
    onValueChange: (value: T) => void;

    label?: string;
    placeholder?: string;
    id?: string;

    disabled?: boolean;

    wrapperClassName?: string;
    triggerClassName?: string;
    contentClassName?: string;
}

export default function ReusableSelect<T extends string>({
    options,
    value,
    onValueChange,
    label,
    placeholder = "Select option",
    id,
    disabled = false,
    wrapperClassName,
    triggerClassName,
    contentClassName,
}: ReusableSelectProps<T>) {
    return (
        <div className={cn("flex items-center gap-3", wrapperClassName)}>
            {label && (
                <label
                    htmlFor={id}
                    className="shrink-0 text-xs text-gray-500"
                >
                    {label}
                </label>
            )}

            <Select
                value={value}
                onValueChange={(selectedValue) =>
                    onValueChange(selectedValue as T)
                }
                disabled={disabled}
            >
                <SelectTrigger
                    id={id}
                    className={cn(
                        "h-10 min-w-32 rounded-sm",
                        triggerClassName,
                    )}
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent className={contentClassName}>
                    {options.map((option) => (
                        <SelectItem
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                        >
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}