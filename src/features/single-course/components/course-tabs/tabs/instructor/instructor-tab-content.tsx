import { instructorsMock } from "@/features/single-course/data/instructors-mock";
import { Course } from "@/features/single-course/types/course";
import { useLocale, useTranslations } from "next-intl";
import { InstructorCard } from "./instructor-card";


interface InstructorTabProps {

}

export function InstructorTabContent({ }: InstructorTabProps) {
  const locale = useLocale();
  const t = useTranslations("courseDetails.instructor");

  const instructors = instructorsMock[locale === "ar" ? "ar" : "en"];

  const isRTL = locale === "ar";
  return (
    <section className="space-y-4" dir={isRTL ? "rtl" : "ltr"}>
      <h2 className="text-lg font-semibold text-slate-900">
        {t("title", {
          count: instructors.length.toString().padStart(2, "0"),
        })}
      </h2>

      {instructors.length > 0 ? (
        <div className="space-y-4">
          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor.id}
              instructor={instructor}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-500">
          {t("noInstructor")}
        </p>
      )}
    </section>
  );
}