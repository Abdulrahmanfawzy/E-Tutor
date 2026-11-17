
import { ArrowRight } from "lucide-react";
import { categories } from "../data/home.mock";
import { SectionTitle } from "./section-title";

export function CategoriesSection() {
  return (
    <section className="bg-white px-5 py-14">
      <div className="mx-auto max-w-4xl">
        <SectionTitle title="Browse top category" />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className="flex min-h-[72px] items-center gap-3 border border-gray-100 bg-white p-3 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center text-xl ${category.color}`}
              >
                {category.icon}
              </span>

              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-gray-800">
                  {category.name}
                </span>
                <span className="mt-1 block text-xs text-gray-400">
                  {category.coursesCount}
                </span>
              </span>
            </button>
          ))}
        </div>

        <p className="mt-7 text-center text-xs text-gray-500">
          We have more category & subcategory.
          <button className="ml-2 font-semibold text-[#FF6636]">
            Browse All <ArrowRight className="ml-1 inline h-3 w-3" />
          </button>
        </p>
      </div>
    </section>
  );
}
