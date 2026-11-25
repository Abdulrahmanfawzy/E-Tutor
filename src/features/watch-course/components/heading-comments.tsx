import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  count?: number;
  action?: ReactNode;
}

export function SectionHeading({ title, count, action }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h3 className="text-xl font-semibold text-slate-900">
        {title}
        {count !== undefined && (
          <span className="ml-1.5 font-normal text-slate-700">({String(count).padStart(2, "0")})</span>
        )}
      </h3>
      {action}
    </div>
  );
}