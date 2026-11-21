"use client";

import { useTranslations } from "next-intl";

import { courseSteps } from "./course-steps";
import { Link, usePathname } from "@/i18n/navigation";

export default function CourseCreationHeader() {
  const pathname = usePathname();
  const t = useTranslations("createCourse");

  return (
    <header>
      <nav
        aria-label={t("steps.ariaLabel")}
        className="grid grid-cols-2 border-b border-gray-100 bg-white md:grid-cols-4"
      >
        {courseSteps.map((step) => {
          const Icon = step.icon;
          const isActive = pathname === step.href;

          return (
            <Link
              key={step.id}
              href={step.href}
              aria-current={isActive ? "step" : undefined}
              className={`relative flex min-h-16 items-center justify-center gap-2 px-3 py-4 text-sm md:justify-start md:px-5 lg:px-8 ${
                isActive ? "text-gray-900" : "text-gray-600"
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

              {isActive && (
                <span className="ml-auto text-xs font-medium text-green-500">
                  {t("steps.progress")}
                </span>
              )}

              {isActive && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-400" />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
