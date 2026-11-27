
export function StatsSection() {
  const stats = [
    { value: "6.3k", label: "Online courses" },
    { value: "26k", label: "Certified Instructor" },
    { value: "99.9%", label: "Success Rate" },
  ];

  return (
   <section className="bg-[#1D2026] py-14 text-white">
  <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
        <div>
          <h2 className="max-w-md text-2xl font-bold leading-tight">
            Start learning with 67.1k students around the world.
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="bg-[#FF6636] px-5 py-3 text-xs font-semibold">
              Join The Family
            </button>

            <button className="bg-[#30343B] px-5 py-3 text-xs">
              Browse All Courses
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="mt-2 text-xs text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
