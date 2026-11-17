
import { instructors } from "../data/home.mock";
import { SectionTitle } from "./section-title";

export function InstructorsSection() {
  return (
    <section className="mx-auto max-w-5xl bg-white px-5 py-12">
      <SectionTitle title="Top instructor of the month" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {instructors.map((instructor) => (
          <article
            key={instructor.id}
            className="overflow-hidden border border-gray-100 text-center"
          >
            <img
              src={instructor.image}
              alt={instructor.name}
              className="h-40 w-full object-cover"
            />

            <div className="p-3">
              <h3 className="text-xs font-semibold text-gray-800">
                {instructor.name}
              </h3>

              <p className="mt-1 text-[10px] text-gray-400">
                {instructor.job}
              </p>

              <div className="mt-3 flex justify-between border-t border-gray-100 pt-2 text-[10px] text-gray-500">
                <span className="text-amber-500">
                  ★ {instructor.rating}
                </span>
                <span>{instructor.students}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-7 text-center text-xs text-gray-500">
        Thousands of students waiting for an instructor.
        <span className="ml-1 font-semibold text-[#FF6636]">
          Become Instructor →
        </span>
      </p>
    </section>
  );
}
