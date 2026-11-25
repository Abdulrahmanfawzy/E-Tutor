import { Captions, Maximize, Pause, Settings, SkipBack, SkipForward, Volume2, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaybackState } from "../types/course-types";

type VideoControlsProps = Pick<PlaybackState, "currentTime" | "duration" | "playedPercent" | "bufferedPercent">;

function ControlButton({ icon: Icon, label, filled }: { icon: LucideIcon; label: string; filled?: boolean }) {
  return (
    <Button type="button" variant="ghost" size="icon" aria-label={label} className="size-8 text-white hover:bg-white/15 hover:text-white">
      <Icon className={filled ? "size-4 fill-white" : "size-4"} />
    </Button>
  );
}

export function VideoControls({ currentTime, duration, playedPercent, bufferedPercent }: VideoControlsProps) {
  return (
    <div className="absolute inset-x-0 bottom-0 space-y-1 bg-gradient-to-t from-black/60 to-transparent px-4 pb-3 pt-10 text-white">
      <div className="relative h-1 rounded-full bg-white/30" role="progressbar" aria-valuenow={playedPercent}>
        <div className="absolute inset-y-0 left-0 rounded-full bg-white/80" style={{ width: `${bufferedPercent}%` }} />
        <div className="absolute inset-y-0 left-0 rounded-full bg-orange-500" style={{ width: `${playedPercent}%` }} />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <ControlButton icon={SkipBack} label="Previous" filled />
          <ControlButton icon={Pause} label="Pause" filled />
          <ControlButton icon={SkipForward} label="Next" filled />
          <span className="ml-2 text-[11px]">
            {currentTime} / {duration}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <ControlButton icon={Volume2} label="Volume" />
          <ControlButton icon={Captions} label="Captions" />
          <ControlButton icon={Settings} label="Settings" />
          <ControlButton icon={Maximize} label="Fullscreen" />
        </div>
      </div>
    </div>
  );
}