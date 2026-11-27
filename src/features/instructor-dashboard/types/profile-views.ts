
export interface ProfileViewsResponse {
  success: boolean;
  message: string;
  data: ProfileViewsData;
}

export interface ProfileViewsData {
  period: string;
  total: number;
  series: ProfileViewsSeries[];
}

export interface ProfileViewsSeries {
  key: string;
  label: string;
  value: number;
}
