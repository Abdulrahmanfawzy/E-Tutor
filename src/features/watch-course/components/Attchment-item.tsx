import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Attachment } from "../types/Lecture-types";

export function AttachmentItem({ attachment }: { attachment: Attachment }) {
  const { name, size, url } = attachment;

  return (
    <li className="flex items-center justify-between gap-4 bg-slate-50 p-4">
      <div className="flex items-center gap-3">
        <FileText className="size-8 text-orange-500" strokeWidth={1.5} />
        <div className="leading-tight">
          <p className="text-sm text-slate-900">{name}</p>
          <p className="mt-1 text-[11px] text-slate-400">{size}</p>
        </div>
      </div>
      <Button  className="rounded-sm bg-orange-500 px-8 text-xs font-medium text-white hover:bg-orange-600">
        <a href={url} download>Download File</a>
      </Button>
    </li>
  );
}