"use client";

import { Bar, BarChart, XAxis } from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import DashboardCard from "./dashboard-card";

const chartConfig = {
  views: { label: "Views", color: "var(--color-green-400)" },
} satisfies ChartConfig;

const DATA = [
  { day: "Sun", views: 70 },
  { day: "Mon", views: 95 },
  { day: "Tue", views: 85 },
  { day: "Wed", views: 60 },
  { day: "Thu", views: 90 },
  { day: "Fri", views: 45 },
  { day: "Sat", views: 80 },
].map((d) => ({ ...d, max: 100 }));

export default function ProfileViewChart() {
  return (
    <DashboardCard title="Profile View">
      <div className="flex flex-col gap-4">
        <ChartContainer config={chartConfig} className="h-48 w-full">
          <BarChart data={DATA} barGap={-20}>
            <XAxis dataKey="day" hide />
            <Bar dataKey="max" fill="var(--color-green-50)" barSize={20} />
            <Bar dataKey="views" fill="var(--color-views)" barSize={20} />
          </BarChart>
        </ChartContainer>

        <div>
          <p className="text-heading-7">$7,443</p>
          <p className="text-label-sm text-muted-foreground">USD Dollar you earned</p>
        </div>
      </div>
    </DashboardCard>
  );
}