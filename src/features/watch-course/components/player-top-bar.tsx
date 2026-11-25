import { Button } from "@/components/ui/button";
import { CourseOverview } from "../types/course-types";
import { ArrowLeft, Clock, Folder, PlayCircle } from "lucide-react";
import { MetaItem } from "./meta-item";


interface PlayerTopBarProps {
  course: CourseOverview;
}

export function PlayerTopBar({ course }: PlayerTopBarProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 px-4 py-3">
      <div className="flex items-center gap-4">
        <Button  variant="ghost" size="icon" className="size-10 rounded-full bg-white shadow-sm hover:bg-white">
          <a href="/" aria-label="Back">
            <ArrowLeft className="size-4" />
          </a>
        </Button>
        <div className="space-y-1">
          <h1 className="text-sm font-medium text-slate-900">{course.title}</h1>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <MetaItem icon={Folder} iconClassName="text-orange-500" label={`${course.sectionsCount} Sections`} />
            <MetaItem icon={PlayCircle} iconClassName="text-violet-600" label={`${course.lecturesCount} lectures`} />
            <MetaItem icon={Clock} iconClassName="text-orange-400" label={course.totalDuration} />
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" className="rounded-sm border-0 bg-white px-5 text-xs font-medium text-orange-500 shadow-none hover:bg-orange-50 hover:text-orange-500">
          Write A Review
        </Button>
        <Button className="rounded-sm bg-orange-500 px-5 text-xs font-medium text-white hover:bg-orange-600">
          Next Lecture
        </Button>
      </div>
    </header>
  );
}