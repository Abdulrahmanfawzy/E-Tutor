
"use client";

import { Bar, BarChart, XAxis } from "recharts";
import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart";
import DashboardCard from "./dashboard-card";
import PeriodSelect from "./period-select";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProfileViews } from "../api/profile-views-api";

const chartConfig = {
  value: {
    label: "Views",
    color: "var(--color-green-400)",
  },
  max: {
    label: "Maximum",
    color: "var(--color-green-50)",
  },
} satisfies ChartConfig;

export default function ProfileViewChart() {
  const [period, setPeriod] = useState("week");

  const { data, error, isLoading } = useQuery({
    queryKey: ["profile-views", period],
    queryFn: () => getProfileViews(period),
  });

  if (isLoading) return <p>Loading profile views...</p>;
  if (error) return <p>Failed to load profile views.</p>;

  const series = data?.data.series ?? [];

  const maxValue = Math.max(
    ...series.map((item) => item.value),
    1
  );

  const chartData = series.map((item) => ({
    ...item,
    max: maxValue,
  }));

  return (
    <DashboardCard
      title="Profile View"
      action={
        <PeriodSelect
          defaultValue="week"
          onChange={setPeriod}
        />
      }
    >
      <div className="flex flex-col gap-4">
        <ChartContainer config={chartConfig} className="h-48 w-full">
          <BarChart data={chartData} barGap={-20}>
            <XAxis dataKey="label" hide />

            <Bar
              dataKey="max"
              fill="var(--color-max)"
              barSize={20}
            />

            <Bar
              dataKey="value"
              fill="var(--color-value)"
              barSize={20}
            />
          </BarChart>
        </ChartContainer>

        <div>
          <p className="text-heading-7">
            {data?.data.total ?? 0}
          </p>

          <p className="text-label-sm text-muted-foreground">
            Total Profile Views
          </p>
        </div>
      </div>
    </DashboardCard>
  );
}
