import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { categories } from "../data/home.mock";
import { SectionTitle } from "./section-title";

const categoryStyles: Record<
  number,
  { background: string; border: string; iconColor: string; iconBackground?: string }
> = {
  1: {
    background: "bg-[#EBEBFF]",
    border: "border-[#E5E5FF]",
    iconColor: "text-[#6555FF]",
  },
  2: {
    background: "bg-[#E2F7E5]",
    border: "border-[#D9F0DD]",
    iconColor: "text-[#00B82E]",
  },
  3: {
    background: "bg-[#FFF2E5]",
    border: "border-[#F9EBDD]",
    iconColor: "text-[#FF8A00]",
  },
  4: {
    background: "bg-[#FFF0F0]",
    border: "border-[#F9E5E5]",
    iconColor: "text-[#F04444]",
  },
  5: {
    background: "bg-white",
    border: "border-gray-100",
    iconColor: "text-white",
    iconBackground: "bg-[#FF6636]",
  },
  6: {
    background: "bg-[#F4F6F8]",
    border: "border-[#ECEEF1]",
    iconColor: "text-[#1D2026]",
  },
  7: {
    background: "bg-[#EBEBFF]",
    border: "border-[#E5E5FF]",
    iconColor: "text-[#6555FF]",
  },
  8: {
    background: "bg-[#F4F6F8]",
    border: "border-[#ECEEF1]",
    iconColor: "text-[#1D2026]",
  },
  9: {
    background: "bg-[#FFF2E5]",
    border: "border-[#F9EBDD]",
    iconColor: "text-[#FF8A00]",
  },
  10: {
    background: "bg-[#FFF0EB]",
    border: "border-[#F9E5DF]",
    iconColor: "text-[#FF6636]",
  },
  11: {
    background: "bg-[#E2F7E5]",
    border: "border-[#D9F0DD]",
    iconColor: "text-[#00B82E]",
  },
  12: {
    background: "bg-[#FFF2E5]",
    border: "border-[#F9EBDD]",
    iconColor: "text-[#FF8A00]",
  },
};

export function CategoriesSection() {
  const t = useTranslations("home.categories");

  return (
    <section className="bg-white py-14">
  <div className="mx-auto w-full max-w-6xl px-6">
        <SectionTitle title={t("title")} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
  const style = categoryStyles[category.id];
            return (
              
              <button
                key={category.id}
                className={`flex min-h-22.5 items-center gap-4 border p-4 text-left transition hover:-translate-y-1 hover:shadow-md ${style.background} ${style.border}`}
              >
                <span
                  className={`flex h-15 w-15 shrink-0 items-center justify-center text-2xl ${
                    style.iconBackground ?? "bg-white"
                  } ${style.iconColor}`}
                >
                  {category.icon}
                </span>

                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-[#1D2026]">
                    {category.name}
                  </span>

                  <span className="mt-2 block text-sm text-[#6E7485]">
                    {category.coursesCount}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-7 text-center text-xs text-gray-500">
          {t("more")}
          <button className="ms-2 font-semibold text-[#FF6636]">
            {t("browseAll")} <ArrowRight className="ms-1 inline h-3 w-3" />
          </button>
        </p>
      </div>
    </section>
  );
}
