"use client"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import DashboardCard from '@/features/instructor-dashboard/components/dashboard-card'
import PeriodSelect from '@/features/instructor-dashboard/components/period-select';
import { useTranslations } from 'next-intl';
import React from 'react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const chartConfig = {
  statistics: { label: "statistics", color: "var(--color-green-400)" },
} satisfies ChartConfig;

const DATA = [
  { date: "Aug 1", statistics: 9000 },
  { date: "Aug 2", statistics: 14000 },
  { date: "Aug 3", statistics: 11000 },
  { date: "Aug 4", statistics: 17000 },
  { date: "Aug 5", statistics: 12000 },
  { date: "Aug 6", statistics: 15000 },
  { date: "Aug 7", statistics: 10000 },
  { date: "Aug 8", statistics: 13000 },
  { date: "Aug 9", statistics: 18000 },
  { date: "Aug 10", statistics: 14000 },
  { date: "Aug 11", statistics: 9500 },
  { date: "Aug 12", statistics: 12500 },
  { date: "Aug 13", statistics: 16000 },
  { date: "Aug 14", statistics: 11000 },
  { date: "Aug 15", statistics: 14500 },
  { date: "Aug 16", statistics: 10000 },
  { date: "Aug 17", statistics: 13500 },
  { date: "Aug 18", statistics: 17500 },
  { date: "Aug 19", statistics: 15000 },
  { date: "Aug 20", statistics: 11500 },
  { date: "Aug 21", statistics: 14000 },
  { date: "Aug 22", statistics: 9000 },
  { date: "Aug 23", statistics: 12000 },
  { date: "Aug 24", statistics: 16500 },
  { date: "Aug 25", statistics: 13000 },
  { date: "Aug 26", statistics: 10500 },
  { date: "Aug 27", statistics: 15500 },
  { date: "Aug 28", statistics: 12000 },
  { date: "Aug 29", statistics: 17000 },
  { date: "Aug 30", statistics: 14500 },
  { date: "Aug 31", statistics: 11000 },
];

export default function EarningStatisticChart() {
  const t= useTranslations("instructorEarning.statistic")
  return (
   <>
     <DashboardCard title={t("title")}
       action={<PeriodSelect options={[{ label: t("revenue"), value: "revenue" }]} />}
     >
     <ChartContainer config={chartConfig} className="h-56 w-full">
      <AreaChart data={DATA}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="date" tickLine={false} axisLine={false}  interval={9} />
        <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="statistics"
          type="monotone"
          stroke="var(--color-statistics)"
          fill="var(--color-statistics)"
          fillOpacity={0.05}
        />
      </AreaChart>
    </ChartContainer>
   </DashboardCard>
   </>
  )
}
