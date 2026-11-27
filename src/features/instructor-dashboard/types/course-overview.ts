
export interface CourseOverviewResponse {
  success: boolean;
  message: string;
  data: CourseOverviewData;
}

export interface CourseOverviewData {
  period: string;
  views_total: number;
  comments_total: number;
  sales_total: number;
  series: CourseOverviewSeries[];
}

export interface CourseOverviewSeries {
  key: string;
  label: string;
  comments: number;
  sales: number;
}
