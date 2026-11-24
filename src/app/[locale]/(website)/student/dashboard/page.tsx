import DashboardStats from "@/features/student-dashboard/dashboard/components/dashboard-stats"
import MyLearningSection from "@/features/student-dashboard/dashboard/components/my-learning-section"

interface IProps {



}

const page = ({ }: IProps) => {
    return (
        <div className="space-y-8  mt-7">
            {/* Dashboard Statistics */}
            <DashboardStats />

            {/* My Learning Courses */}
            <MyLearningSection />
        </div>
    )
}

export default page