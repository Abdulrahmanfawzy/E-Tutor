"use client";

import { useLocale } from "next-intl";
import { useState } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface CourseTabsProps {
  tabs: TabItem[];
  defaultTab?: string;
}

export function CourseTabs({
  tabs,
  defaultTab,
}: CourseTabsProps) {
  const [activeTab, setActiveTab] = useState(
    defaultTab ?? tabs[0]?.id
  );

  const activeContent = tabs.find(
    (tab) => tab.id === activeTab
  );

  if (!tabs.length) return null;
  const locale = useLocale();
  const isRTL = locale === "ar";
  return (
    <section className="w-full" dir={isRTL ? "rtl" : "ltr"}>
      {/* Tabs Navigation */}
      <div
        role="tablist"
        aria-label="Course details"
        className="flex w-full overflow-x-auto border-b border-slate-200 scrollbar-hide"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative shrink-0 px-5 py-4 text-sm font-medium
                transition-colors duration-200
                ${isActive
                  ? "text-orange-400"
                  : "text-slate-500 hover:text-slate-900"
                }
              `}
            >
              {tab.label}

              {/* Active Indicator */}
              {isActive && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-400" />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeContent && (
        <div
          id={`panel-${activeContent.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeContent.id}`}
          className="py-6"
        >
          {activeContent.content}
        </div>
      )}
    </section>
  );
}