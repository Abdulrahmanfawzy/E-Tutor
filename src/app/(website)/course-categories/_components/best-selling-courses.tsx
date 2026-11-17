
import CourseCard from "./course-card";
import { coursesData } from "./courses-data";


export default function BestSellingCourses() {
  return (
    <section className="space-y-7">
      <h2 className="text-center text-4xl font-semibold text-gray-900">
        Best selling courses in Web Development
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
