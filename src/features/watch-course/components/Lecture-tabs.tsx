import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import { NotesSection } from "./notes-section";
import { LectureDetails } from "../types/Lecture-types";
import { AttachmentsSection } from "./Attchment-section";
import { DescriptionSection } from "./description";

interface LectureTabsProps {
  details: LectureDetails;
  comments?: ReactNode;
}

const triggerClass = cn(
  "relative -mb-px h-auto flex-none rounded-none border-0 border-b-2 border-transparent bg-transparent px-6 py-4",
  "text-sm font-normal text-slate-500 shadow-none transition-colors hover:text-slate-900",
  "data-[state=active]:border-orange-500 data-[state=active]:bg-transparent data-[state=active]:text-slate-900 data-[state=active]:shadow-none",
  "dark:data-[state=active]:border-orange-500 dark:data-[state=active]:bg-transparent",
);

export function LectureTabs({ details, comments }: LectureTabsProps) {
  const notes = <NotesSection blocks={details.notes} downloadUrl={details.notesUrl} />;
  const attachments = <AttachmentsSection attachments={details.attachments} />;

  return (
    <Tabs defaultValue="description" className="gap-8">
      <TabsList className="h-auto w-full justify-start gap-2 rounded-none border-b border-slate-200 bg-transparent p-0">
        <TabsTrigger value="description" className={triggerClass}>Description</TabsTrigger>
        <TabsTrigger value="notes" className={triggerClass}>Lectures Notes</TabsTrigger>
        <TabsTrigger value="attachments" className={triggerClass}>
          Attach File
          <span className="ml-2 rounded-sm bg-orange-50 px-1.5 py-0.5 text-[10px] font-medium text-orange-500">
            {String(details.attachments.length).padStart(2, "0")}
          </span>
        </TabsTrigger>
        <TabsTrigger value="comments" className={triggerClass}>Comments</TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="space-y-10">
        <DescriptionSection paragraphs={details.description} />
        {notes}
        {attachments}
      </TabsContent>
      <TabsContent value="notes">{notes}</TabsContent>
      <TabsContent value="attachments">{attachments}</TabsContent>
      <TabsContent value="comments">
        {comments ?? <p className="py-10 text-center text-sm text-slate-500">No comments yet.</p>}
      </TabsContent>
    </Tabs>
  );
}