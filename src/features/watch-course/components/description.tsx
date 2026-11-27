import { SectionHeading } from "./section-heading";

export function DescriptionSection({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section className="space-y-5">
      <SectionHeading title="Lectures Description" />
      <div className="space-y-5 text-xs leading-relaxed text-slate-600">
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </section>
  );
}