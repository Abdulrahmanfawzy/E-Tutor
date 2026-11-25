import { ContentBlock, TextSegment } from "../types/Lecture-types";

function Segments({ segments }: { segments: TextSegment[] }) {
  return (
    <>
      {segments.map((s, i) =>
        s.bold ? (
          <strong key={i} className="font-medium text-slate-900">{s.text}</strong>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </>
  );
}

// Renders structured content. Supporting a new block type = add a case here.
export function RichText({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-4 text-xs leading-relaxed text-slate-600">
      {blocks.map((block, i) =>
        block.type === "list" ? (
          <ul key={i} className="list-disc space-y-1.5 pl-4 marker:text-slate-400">
            {block.items.map((item, j) => (
              <li key={j}><Segments segments={item} /></li>
            ))}
          </ul>
        ) : (
          <p key={i}><Segments segments={block.segments} /></p>
        ),
      )}
    </div>
  );
}