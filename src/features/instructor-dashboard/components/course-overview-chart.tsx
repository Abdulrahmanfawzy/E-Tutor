
"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import DashboardCard from "./dashboard-card";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCourseOverview } from "../api/course-overview-api";
import PeriodSelect from "./period-select";

const chartConfig = {
  comments: {
    label: "Comments",
    color: "var(--color-purple-400)",
  },
  sales: {
    label: "Sales",
    color: "var(--color-orange-400)",
  },
} satisfies ChartConfig;

export default function CourseOverviewChart() {
  const [period, setPeriod] = useState("month");

  const { data, error, isLoading } = useQuery({
    queryKey: ["course-overview", period],
    queryFn: () => getCourseOverview(period),
  });

  
  if (isLoading) return <p>Loading course overview...</p>;
  if (error) return <p>Failed to load course overview.</p>;

  return (
    <DashboardCard
      title="Course Overview"
      action={
        <PeriodSelect
          defaultValue="month"
          onChange={setPeriod}
        />
      }
    >
      <ChartContainer config={chartConfig} className="h-64 w-full">
        <LineChart data={data?.data.series ?? []}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />

          <XAxis dataKey="label" tickLine={false} axisLine={false} />

          <YAxis tickLine={false} axisLine={false} width={40} />

          <ChartTooltip content={<ChartTooltipContent />} />

          <Line
            dataKey="comments"
            type="monotone"
            stroke="var(--color-comments)"
            strokeWidth={2}
            dot={false}
          />

          <Line
            dataKey="sales"
            type="monotone"
            stroke="var(--color-sales)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </DashboardCard>
  );
}
