import { Course } from "@/features/single-course/types/course";

interface IProps {

  course: Course;

}

const ReviewTabContent = ({ course }: IProps) => {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-slate-900">
        Student Reviews
      </h2>

      <p className="text-sm text-slate-600">
        Rating: {course.rating.value} / 5
      </p>

      <p className="text-sm text-slate-600">
        {course.rating.reviewCount.toLocaleString()} Reviews
      </p>
    </div>
  )
}

export default ReviewTabContent