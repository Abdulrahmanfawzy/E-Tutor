
"use client";

import { useId, useState } from "react";
import { useLocale } from "next-intl";

export interface TabItem {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
    defaultTab?: string;
    ariaLabel?: string;
}

export function Tabs({
    tabs,
    defaultTab,
    ariaLabel = "Tabs",
}: TabsProps) {
    const locale = useLocale();
    const isRTL = locale === "ar";
    const instanceId = useId();

    const [activeTab, setActiveTab] = useState(
        defaultTab ?? tabs[0]?.id
    );

    if (!tabs.length) return null;

    const activeContent = tabs.find(
        (tab) => tab.id === activeTab
    );

    return (
        <section className="w-full" dir={isRTL ? "rtl" : "ltr"}>
            {/* Tabs Navigation */}
            <div
                role="tablist"
                aria-label={ariaLabel}
                className="flex w-full overflow-x-auto border-b border-slate-200 scrollbar-hide"
            >
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    const tabId = `${instanceId}-tab-${tab.id}`;
                    const panelId = `${instanceId}-panel-${tab.id}`;

                    return (
                        <button
                            key={tab.id}
                            id={tabId}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={panelId}
                            tabIndex={isActive ? 0 : -1}
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
                    id={`${instanceId}-panel-${activeContent.id}`}
                    role="tabpanel"
                    aria-labelledby={`${instanceId}-tab-${activeContent.id}`}
                    tabIndex={0}
                    className="py-6"
                >
                    {activeContent.content}
                </div>
            )}
        </section>
    );
}
