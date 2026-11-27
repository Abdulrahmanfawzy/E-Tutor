import { Progress } from "@/components/ui/progress";
import { SectionItem } from "./section-item";
import { CourseSection } from "../types/course-types";


interface CourseContentsProps {
  sections: CourseSection[];
  completedPercent: number;
}

export function CourseContents({ sections, completedPercent }: CourseContentsProps) {
  return (
    <aside className="space-y-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Course Contents</h2>
          <span className="text-xs font-medium text-green-500">{completedPercent}% Completed</span>
        </div>
        <Progress value={completedPercent} className="h-1 bg-slate-200 [&>div]:bg-green-500" />
      </div>

      <div className="border border-slate-200">
        {sections.map((section) => (
          <SectionItem key={section.id} section={section} />
        ))}
      </div>
    </aside>
  );
}