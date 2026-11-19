"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import DashboardCard from "./dashboard-card";

const chartConfig = {
  revenue: { label: "Revenue", color: "var(--color-purple-400)" },
} satisfies ChartConfig;

const DATA = [
  { date: "Aug 1", revenue: 9000 },
  { date: "Aug 2", revenue: 14000 },
  { date: "Aug 3", revenue: 11000 },
  { date: "Aug 4", revenue: 17000 },
  { date: "Aug 5", revenue: 12000 },
  { date: "Aug 6", revenue: 15000 },
  { date: "Aug 7", revenue: 10000 },
  { date: "Aug 8", revenue: 13000 },
  { date: "Aug 9", revenue: 18000 },
  { date: "Aug 10", revenue: 14000 },
  { date: "Aug 11", revenue: 9500 },
  { date: "Aug 12", revenue: 12500 },
  { date: "Aug 13", revenue: 16000 },
  { date: "Aug 14", revenue: 11000 },
  { date: "Aug 15", revenue: 14500 },
  { date: "Aug 16", revenue: 10000 },
  { date: "Aug 17", revenue: 13500 },
  { date: "Aug 18", revenue: 17500 },
  { date: "Aug 19", revenue: 15000 },
  { date: "Aug 20", revenue: 11500 },
  { date: "Aug 21", revenue: 14000 },
  { date: "Aug 22", revenue: 9000 },
  { date: "Aug 23", revenue: 12000 },
  { date: "Aug 24", revenue: 16500 },
  { date: "Aug 25", revenue: 13000 },
  { date: "Aug 26", revenue: 10500 },
  { date: "Aug 27", revenue: 15500 },
  { date: "Aug 28", revenue: 12000 },
  { date: "Aug 29", revenue: 17000 },
  { date: "Aug 30", revenue: 14500 },
  { date: "Aug 31", revenue: 11000 },
];

export default function RevenueChart() {
  return (
   <>
   <DashboardCard title="Revenue">
     <ChartContainer config={chartConfig} className="h-56 w-full">
      <AreaChart data={DATA}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="date" tickLine={false} axisLine={false}  interval={9} />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="revenue"
          type="monotone"
          stroke="var(--color-revenue)"
          fill="var(--color-revenue)"
          fillOpacity={0.1}
        />
      </AreaChart>
    </ChartContainer>
   </DashboardCard>
   </>
  );
}