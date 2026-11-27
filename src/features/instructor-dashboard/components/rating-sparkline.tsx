
"use client";

import { Line, LineChart } from "recharts";
import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart";

import type { RatingTrend } from "../types/overall-course-rating";

const chartConfig = {
  value: {
    label: "Rating",
    color: "var(--color-orange-400)",
  },
} satisfies ChartConfig;

type RatingSparklineProps = {
  data: RatingTrend[];
};

export default function RatingSparkline({
  data,
}: RatingSparklineProps) {
  return (
    <ChartContainer config={chartConfig} className="h-24 w-full">
      <LineChart data={data}>
        <Line
          dataKey="value"
          type="monotone"
          stroke="var(--color-value)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
