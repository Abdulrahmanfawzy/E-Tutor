import { containerClass, instructorStats } from "../data/instructor.data";

export function InstructorStats() {
  return (
    <section className="bg-orange-50">
      <div
        className={`${containerClass} grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-3 
        lg:grid-cols-5 lg:gap-5 lg:py-12`}
      >
        {instructorStats.map((stat, index) => {
          const StatIcon = stat.icons;

          return (
            <div
              key={stat.label}
              className={`text-center ${
                index === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <p className="flex items-center justify-center gap-2 text-3xl font-semibold 
              tracking-tight text-gray-900 sm:text-4xl">
                <StatIcon
                  className={`size-6 ${stat.color}`}
                  strokeWidth={1.8}
                />
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}