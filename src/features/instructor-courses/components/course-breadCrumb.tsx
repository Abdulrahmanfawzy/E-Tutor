import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function CourseBreadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-label-sm text-gray-500">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-2">
            {isLast ? (
              <span className="font-medium text-gray-900">{item.label}</span>
            ) : (
              <a href={item.href ?? "#"} className="hover:text-gray-900">{item.label}</a>
            )}
            {!isLast && <ChevronRight size={12} className="rtl:rotate-180" />}
          </span>
        );
      })}
    </nav>
  );
}