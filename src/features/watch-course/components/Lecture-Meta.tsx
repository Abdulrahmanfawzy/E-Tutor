import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LectureDetails } from "../types/Lecture-types";


type LectureMetaBarProps = Pick<LectureDetails, "watchersCount" | "watcherAvatars" | "lastUpdated" | "commentsCount">;

export function LectureMetaBar({ watchersCount, watcherAvatars, lastUpdated, commentsCount }: LectureMetaBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {watcherAvatars.map((src, i) => (
            <Avatar key={i} className="size-7 ring-2 ring-white">
              <AvatarImage src={src} alt="" className="object-cover" />
              <AvatarFallback />
            </Avatar>
          ))}
        </div>
        <div className="leading-tight">
          <p className="text-xs font-semibold text-slate-900">{watchersCount}</p>
          <p className="text-[10px] text-slate-400">Students watching</p>
        </div>
      </div>

      <div className="flex items-center gap-6 text-[11px] text-slate-400">
        <span>Last updated: <b className="font-medium text-slate-700">{lastUpdated}</b></span>
        <span>Comments: <b className="font-medium text-slate-700">{commentsCount}</b></span>
      </div>
    </div>
  );
}