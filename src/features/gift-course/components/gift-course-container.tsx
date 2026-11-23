
import type { Course } from "@/features/single-course/types/course";
import { useTranslations } from "next-intl";
import RecipientForm from "./recipient-form";
import GiftCourseOrderSummary from "./gift-course-order-summary";

interface GiftCourseContainerProps {
  course: Course;
}

const GiftCourseContainer = ({ course }: GiftCourseContainerProps) => {
  const t = useTranslations("giftCourse");

  return (
    <section className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto w-full max-w-285">
        <h2 className="mb-8 text-start text-xl font-semibold text-gray-900 sm:text-2xl">
          {t("containerTitle")}
        </h2>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-24">
          {/* ===================== Recipient Form =================== */}
          <div>
            <RecipientForm />
          </div>

          {/* ===================== Course Summary ===================*/}
          <aside>
            <GiftCourseOrderSummary course={course} />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default GiftCourseContainer;
