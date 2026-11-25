import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProfileTabsProps {
  courses: ReactNode;
  reviews: ReactNode;
}

const TAB_ITEMS = [
  { value: "courses", label: "Courses" },
  { value: "reviews", label: "Review" },
] as const;

const triggerClass = cn(
  "relative -mb-px h-auto flex-1 rounded-none border-0 border-b-2 border-transparent bg-transparent px-0 py-4",
  "text-sm font-normal text-slate-500 shadow-none transition-colors",
  "hover:text-slate-900",
  "data-active:border-orange-500 data-active:bg-transparent data-active:font-normal",
  "data-active:text-slate-900 data-active:shadow-none",
  "dark:data-active:border-orange-500 dark:data-active:bg-transparent",
);

export function ProfileTabs({ courses, reviews }: ProfileTabsProps) {
  const content = { courses, reviews };

  return (
    <Tabs defaultValue="courses" className="gap-8">
      <TabsList className="h-auto w-full rounded-none border-b border-slate-200 bg-transparent p-0">
        {TAB_ITEMS.map(({ value, label }) => (
          <TabsTrigger key={value} value={value} className={triggerClass}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      {TAB_ITEMS.map(({ value }) => (
        <TabsContent key={value} value={value}>
          {content[value]}
        </TabsContent>
      ))}
    </Tabs>
  );
}
