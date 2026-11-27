export interface RevenueChartResponse {
  success: boolean
  message: string
  data: RevenueChartData
}

export interface RevenueChartData {
  period: string
  total: number
  series: RevenueSeries []
}

export interface RevenueSeries  {
  key: string
  label: string
  value: number
}
