import CourseOverviewChart from "@/features/instructor-dashboard/components/course-overview-chart";
import CourseRating from "@/features/instructor-dashboard/components/course-rating";
import ProfileBanner from "@/features/instructor-dashboard/components/profile-banner";
import ProfileViewChart from "@/features/instructor-dashboard/components/profile-view-chart";
import RecentActivities from "@/features/instructor-dashboard/components/recent-activities";
import RevenueChart from "@/features/instructor-dashboard/components/revenue-chart";
import StatsCards from "@/features/instructor-dashboard/components/stats-card";





export default function Page() {
  return (
  <>
  <div className="flex flex-col gap-6">
    <StatsCards/>
    <ProfileBanner/>
     <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <RecentActivities />
        <RevenueChart />
        <ProfileViewChart />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <CourseRating/>
        <CourseOverviewChart/>
      </div>
  </div>
  
      
  </>

   
  )
}
