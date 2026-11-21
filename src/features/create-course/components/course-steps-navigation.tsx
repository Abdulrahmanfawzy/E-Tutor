"use client";

import { useTranslations } from "next-intl";
import { Layers, ClipboardList, MonitorPlay, CirclePlay } from "lucide-react";

const courseSteps = [
  {
    labelKey: "steps.basicInformation",
    icon: Layers,
    active: true,
  },
  {
    labelKey: "steps.advanceInformation",
    icon: ClipboardList,
    active: false,
  },
  {
    labelKey: "steps.curriculum",
    icon: MonitorPlay,
    active: false,
  },
  {
    labelKey: "steps.publishCourse",
    icon: CirclePlay,
    active: false,
  },
];

export default function CourseStepsNavigation() {
  const t = useTranslations("createCourse");

  return (
    <nav
      aria-label={t("steps.ariaLabel")}
      className="grid grid-cols-2 border-b border-gray-100 bg-white md:grid-cols-4"
    >
      {courseSteps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div
            key={step.labelKey}
            aria-current={step.active ? "step" : undefined}
            className={`relative flex min-h-16 items-center justify-center gap-2 px-3 py-4 text-sm md:justify-start md:px-5 lg:px-8 ${
              step.active ? "text-gray-900" : "text-gray-600"
            }`}
          >
            <Icon
              size={20}
              strokeWidth={1.8}
              className="shrink-0 text-gray-600"
            />

            <span className="whitespace-nowrap font-medium">
              {t(step.labelKey)}
            </span>

            {step.active && (
              <span className="ml-auto text-xs font-medium text-green-500">
                {t("steps.progress")}
              </span>
            )}

            {step.active && (
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-400" />
            )}

            {index !== courseSteps.length - 1 && (
              <span className="sr-only">
                {t("steps.stepOf", {
                  current: index + 1,
                  total: courseSteps.length,
                })}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
