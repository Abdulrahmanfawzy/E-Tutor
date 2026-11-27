
"use client";

import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";

interface ReusableRangeSliderProps {
    min: number;
    max: number;
    step: number;
    value: [number, number];
    onChange: (value: [number, number]) => void;
    minLabel?: string;
    maxLabel?: string;
    direction?: "ltr" | "rtl";
}

export default function ReusableRangeSlider({
    min,
    max,
    step,
    value,
    onChange,
    direction = "ltr",
}: ReusableRangeSliderProps) {
    const [draftValue, setDraftValue] = useState(value);

    useEffect(() => {
        setDraftValue(value);
    }, [value[0], value[1]]);

    const getRangeValue = (nextValue: number | readonly number[]) => {
        if (typeof nextValue === "number") return null;

        const [minValue, maxValue] = nextValue;
        if (minValue === undefined || maxValue === undefined) return null;

        return [minValue, maxValue] as [number, number];
    };

    return (
        <Slider
            min={min}
            max={max}
            step={step}
            value={draftValue}
            onValueChange={(nextValue) => {
                const nextRange = getRangeValue(nextValue);
                if (nextRange) setDraftValue(nextRange);
            }}
            onValueCommitted={(nextValue) => {
                const nextRange = getRangeValue(nextValue);
                if (
                    nextRange &&
                    (nextRange[0] !== value[0] || nextRange[1] !== value[1])
                ) {
                    onChange(nextRange);
                }
            }}
            minStepsBetweenValues={0}
            dir={direction}
            className="w-full mt-2"
        />
    );
}
