"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import DashboardCard from "./dashboard-card";

const chartConfig = {
  purple: { label: "Course A", color: "var(--color-purple-400)" },
  orange: { label: "Course B", color: "var(--color-orange-400)" },
} satisfies ChartConfig;

const DATA = [
  { day: "Sun", purple: 100, orange: 80 },
  { day: "Mon", purple: 70, orange: 40 },
  { day: "Tue", purple: 30, orange: 85 },
  { day: "Wed", purple: 60, orange: 20 },
  { day: "Thu", purple: 45, orange: 55 },
  { day: "Fri", purple: 55, orange: 90 },
  { day: "Sat", purple: 75, orange: 25 },
];

export default function CourseOverviewChart() {
  return (
    <DashboardCard title="Course Overview">
      <ChartContainer config={chartConfig} className="h-64 w-full">
        <LineChart data={DATA}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} width={40} tickFormatter={(v) => `${v}k`} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line dataKey="purple" type="monotone" stroke="var(--color-purple)" strokeWidth={2} dot={false} />
          <Line dataKey="orange" type="monotone" stroke="var(--color-orange)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </DashboardCard>
  );
}