import type { RevenueChartResponse } from "../types/revenue";

export async function getRevenue(
  period: string
): Promise<RevenueChartResponse> {
  const response = await fetch(
    `/api/instructor/dashboard/revenue?period=${period}`
  );

  const data: RevenueChartResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}