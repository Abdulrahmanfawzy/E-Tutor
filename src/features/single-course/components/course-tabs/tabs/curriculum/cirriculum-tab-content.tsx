import { Curriculum } from "@/features/single-course/types/curriculum";
import { useTranslations } from "next-intl";
import { CurriculumSection } from "./curriculum-section";
import { CurriculumHeader } from "./curriculum-header";


interface CurriculumTabContentProps {
  curriculum: Curriculum;
}
export function CurriculumTabContent({ curriculum }: CurriculumTabContentProps) {
  const t = useTranslations("courseDetails.curriculum");

  const lectureCount = curriculum?.sections.reduce(
    (total, section) => total + section.lessons.length,
    0
  ) ?? 0;
  return (
    <section className="space-y-4  ">


      <CurriculumHeader
        sectionCount={curriculum?.sections.length}
        lectureCount={lectureCount}
        duration={curriculum?.totalDuration ?? "—"}
      />

      {curriculum?.sections.length > 0 ? (
        <div className="overflow-hidden border border-slate-100 rounded-sm">
          {curriculum?.sections.map((section) => (
            <CurriculumSection
              key={section.id}
              section={section}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-32 items-center justify-center border border-slate-200 px-4 text-center text-sm text-slate-500">
          {t("noCurriculum")}
        </div>
      )}


    </section>
  );
}