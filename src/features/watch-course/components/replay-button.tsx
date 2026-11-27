import { MessagesSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReplyButtonProps {
  active?: boolean;
}

export function ReplyButton({ active = false }: ReplyButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide transition-colors",
        active ? "text-orange-500" : "text-slate-500 hover:text-slate-900",
      )}
    >
      <MessagesSquare className="size-3.5" />
      Reply
    </button>
  );
}