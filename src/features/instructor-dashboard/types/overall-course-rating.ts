
export interface OverallCourseRatingResponse {
  success: boolean;
  message: string;
  data: OverallCourseRatingData;
}

export interface OverallCourseRatingData {
  average: number;
  count: number;
  distribution: RatingDistribution[];
  trend: RatingTrend[];
}

export interface RatingDistribution {
  stars: number;
  count: number;
  percent: number;
}

export interface RatingTrend {
  key: string;
  label: string;
  value: number;
}
