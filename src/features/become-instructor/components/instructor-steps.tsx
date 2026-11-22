import  { containerClass, instructorSteps } from "../data/instructor.data";

export function InstructorSteps() {
  return (
    <section id="how-it-works" className="container bg-gray-50 py-20 sm:py-24">
      <div className={containerClass}>
        <div className="mx-auto max-w-162.5 text-center">
          <h2 className=" text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            How you&apos;ll become a successful instructor
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Follow these steps to begin your journey and become part of our
            instructor community.
          </p>
        </div>

        <div className="container relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-8 hidden border-t border-dashed 
          border-orange-200 lg:block" />

          {instructorSteps.map((step, i) => {
            const StepIcon = step.icon;
            return (
              <article
                key={i}
                className="relative rounded-2xl border border-gray-100 bg-white p-6 
              shadow-[0_5px_25px_rgba(29,32,38,0.035)]"
              >
                <div
                  className={`relative z-10 mx-auto flex size-16 items-center justify-center
                 text-xl font-semibold ${step.backgroundColor}`}
                >
                  <StepIcon
                    className={`size-6 ${step.color} ${step.backgroundColor}`}
                  />
                </div>

                <h3 className="mt-7 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
