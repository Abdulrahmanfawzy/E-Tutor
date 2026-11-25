import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";
import { ContentBlock } from "../types/Lecture-types";
import { RichText } from "./rich-text";


interface NotesSectionProps {
  blocks: ContentBlock[];
  downloadUrl: string;
}

export function NotesSection({ blocks, downloadUrl }: NotesSectionProps) {
  return (
    <section className="max-w-[600px] space-y-5">
      <SectionHeading
        title="Lecture Notes"
        action={
          <Button  variant="secondary" className="rounded-sm bg-orange-50 px-4 text-xs font-medium text-orange-500 hover:bg-orange-100">
            <a href={downloadUrl} download>
              <Download className="size-4" />
              Download Notes
            </a>
          </Button>
        }
      />
      <RichText blocks={blocks} />
    </section>
  );
}