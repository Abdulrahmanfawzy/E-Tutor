import { CheckCheck, ChevronDown, Clock, PlayCircle } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CourseSection } from "../types/course-types";
import { MetaItem } from "./meta-item";
import { LectureItem } from "./lecture-item";


interface SectionItemProps {
  section: CourseSection;
}

export function SectionItem({ section }: SectionItemProps) {
  const { title, lecturesCount, duration, progress, lectures } = section;

  return (
    <Collapsible defaultOpen={Boolean(lectures?.length)} className="group border-b border-slate-200 last:border-b-0">
      <CollapsibleTrigger className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-xs text-slate-900 group-data-[state=open]:bg-slate-100 group-data-[state=open]:text-orange-500">
        <ChevronDown className="size-4 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
        <span className="flex-1 font-medium">{title}</span>
        <span className="flex items-center gap-3 text-[11px] text-slate-500">
          <MetaItem icon={PlayCircle} iconClassName="text-violet-600" label={`${lecturesCount} lectures`} />
          <MetaItem icon={Clock} iconClassName="text-orange-400" label={duration} />
          {progress && (
            <MetaItem
              icon={CheckCheck}
              iconClassName="text-green-500"
              label={`${progress.percent}% finish (${progress.finished}/${progress.total})`}
            />
          )}
        </span>
      </CollapsibleTrigger>

      {lectures && (
        <CollapsibleContent>
          <ul>
            {lectures.map((lecture) => (
              <LectureItem key={lecture.id} lecture={lecture} />
            ))}
          </ul>
        </CollapsibleContent>
      )}
    </Collapsible>
  );
}