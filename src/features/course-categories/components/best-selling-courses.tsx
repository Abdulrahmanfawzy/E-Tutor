import { useTranslations } from "next-intl";
import CourseCard from "../../../components/common/course-card";
import { BestSellingCourse } from "../types/course-category.types";
import courseImage from "@/assets/images/Course Images.svg";

interface BestSellingCoursesProps {
  courses: BestSellingCourse[];
  categoryName: string;
}

export default function BestSellingCourses({
  courses,
  categoryName,
}: BestSellingCoursesProps) {
  const t = useTranslations("courseCategories");
  const formattedCourses = courses.map((course) => ({
    id: course.id,
    slug: course.slug,
    title: course.title,
    category: course.category.name,
    categoryColor: course.category.color,
    price: course.current_price,
    rating: course.rating,
    students: course.students_count.toLocaleString(),
    image: course.thumbnail_url || courseImage,
  }));

  return (
    <section className="space-y-7">
      <h2 className="text-center text-4xl font-semibold text-gray-900">
        {t("bestSelling.title", { category: categoryName ?? "" })}
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        {formattedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
