export interface InstructorDashboardResponse {
  success: boolean
  message: string
  data: InstructorDashboardData
}

export interface InstructorDashboardData {
  tiles: Tiles
  profile_completion: ProfileCompletion
}

export interface Tiles {
  enrolled_courses: number
  active_courses: number
  course_instructors: number
  completed_courses: number
  students: number
  online_courses: number
  total_earning: number
  course_sold: number
}

export interface ProfileCompletion {
  percent: number
  filled: number
  total: number
  missing: string[]
}
