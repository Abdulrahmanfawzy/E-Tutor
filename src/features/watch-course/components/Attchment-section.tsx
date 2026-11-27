import { Attachment } from "../types/Lecture-types";
import { AttachmentItem } from "./Attchment-item";
import { SectionHeading } from "./section-heading";


export function AttachmentsSection({ attachments }: { attachments: Attachment[] }) {
  return (
    <section className="max-w-[600px] space-y-5">
      <SectionHeading title="Attach Files" count={attachments.length} />
      <ul className="space-y-3">
        {attachments.map((file) => (
          <AttachmentItem key={file.id} attachment={file} />
        ))}
      </ul>
    </section>
  );
}