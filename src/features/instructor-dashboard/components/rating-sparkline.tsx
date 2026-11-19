"use client";

import { Line, LineChart } from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const chartConfig = {
  rating: { label: "Rating", color: "var(--color-orange-400)" },
} satisfies ChartConfig;

const DATA = Array.from({ length: 24 }, (_, i) => ({
  i,
  rating: 50 + Math.sin(i * 1.2) * 25,
}));

export default function RatingSparkline() {
  return (
    <ChartContainer config={chartConfig} className="h-24 w-full">
      <LineChart data={DATA}>
        <Line dataKey="rating" type="monotone" stroke="var(--color-rating)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  );
}