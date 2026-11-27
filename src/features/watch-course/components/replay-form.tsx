import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ReplyForm() {
  return (
    <div className="flex items-center border border-slate-200 bg-white">
      <MessageSquare className="ml-3 size-4 shrink-0 text-slate-500" />
      <Input
        placeholder="Write your reply"
        aria-label="Write your reply"
        className="h-10 rounded-none border-0 text-xs shadow-none focus-visible:ring-0"
      />
      <Button type="button" className="h-10 rounded-none bg-orange-500 px-6 text-xs font-medium text-white hover:bg-orange-600">
        Post Reply
      </Button>
    </div>
  );
}