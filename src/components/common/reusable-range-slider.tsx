
"use client";

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
    return (
        <Slider
            min={min}
            max={max}
            step={step}
            value={value}
            onValueChange={(nextValue) => {
                if (typeof nextValue === "number") return;

                const [minValue, maxValue] = nextValue;

                if (
                    minValue === undefined ||
                    maxValue === undefined
                ) {
                    return;
                }

                onChange([minValue, maxValue]);
            }}
            minStepsBetweenValues={0}
            dir={direction}
            className="w-full mt-2"
        />
    );
}
