import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AboutCardProps {
  paragraphs: string[];
}

export function AboutCard({ paragraphs }: AboutCardProps) {
  return (
    <Card className="gap-0 rounded-sm py-0 shadow-none">
      <CardHeader className="border-b px-4 py-3">
        <CardTitle className="text-sm font-semibold uppercase text-slate-900">About me</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 p-4 text-xs leading-relaxed text-slate-600">
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </CardContent>
    </Card>
  );
}