import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Pause, Play } from "lucide-react";

interface LectureItemProps {
    lecture: Lecture;
}

export function LectureItem({ lecture }: LectureItemProps) {
    const { title, duration, status } = lecture;
    const isPlaying = status === "playing";
    const StatusIcon = isPlaying ? Pause : Play;

    return (
        <li className={cn("flex items-center gap-3 px-4 py-3 text-xs text-slate-500", isPlaying && "bg-orange-50 font-medium text-slate-900")}>
            <Checkbox
                checked={status === "completed"}
                aria-label={`Mark "${title}" as completed`}
                className="size-4 rounded-[3px] border-slate-300 bg-white data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500 data-[state=checked]:text-white"
            />
            <span className="flex-1 truncate">{title}</span>
            <span className="flex items-center gap-1.5">
                <StatusIcon className={cn("size-3 fill-current", isPlaying ? "text-slate-900" : "text-slate-400")} />
                {duration}
            </span>
        </li>
    );
}