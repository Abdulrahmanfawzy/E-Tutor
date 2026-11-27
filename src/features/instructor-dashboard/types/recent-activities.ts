export interface RecentActivitiesResponse {
  success: boolean
  message: string
  data: RecentActivitiesData[]
}

export interface RecentActivitiesData {
  type: "enrollment" | "comment" | "review" | "purchase";
  message: string
  user: User
  course: Course
  created_at: string
  time_ago: string
}

export interface User {
  id: number
  name: string
  username: string
}

export interface Course {
  id: number
  title: string
  slug: string
}
