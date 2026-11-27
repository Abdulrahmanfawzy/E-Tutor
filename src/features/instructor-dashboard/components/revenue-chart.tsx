"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import DashboardCard from "./dashboard-card";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRevenue } from "../api/revenue-chart-api";
import PeriodSelect from "./period-select";

const chartConfig = {
  value: { label: "Revenue", color: "var(--color-purple-400)" },
} satisfies ChartConfig;



export default function RevenueChart() {

  const[period,setPeriod]=useState("month");
  const {data,error,isLoading}= useQuery({
   queryKey: ["revenue", period],
   queryFn: ()=> getRevenue(period),
  });

if (isLoading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Failed to load revenue</div>;
}

  return (
   <>
   <DashboardCard title="Revenue"
               action={
    <PeriodSelect
      options={[
        { label: "Week", value: "week" },
        { label: "Month", value: "month" },
        { label: "Year", value: "year" },
      ]}
      defaultValue="month"
      onChange={setPeriod}
    />
  } 
   >
     <ChartContainer config={chartConfig} className="h-56 w-full">
      <AreaChart data={data?.data.series??[]}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="label" tickLine={false} axisLine={false}  interval={9} />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="value"
          type="monotone"
          stroke="var(--color-value)"
          fill="var(--color-value)"
          fillOpacity={0.05}
        />
      </AreaChart>
    </ChartContainer>
   </DashboardCard>

   
   </>
  );
}