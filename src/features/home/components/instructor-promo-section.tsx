
import { ArrowRight, GraduationCap } from "lucide-react";

export function InstructorPromoSection() {
  const steps = [
    "Apply to become instructor",
    "Build & edit your profile",
    "Create your new course",
    "Start teaching & earning",
  ];

  return (
    <section className="bg-[#F5F7FA] px-5 py-12">
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
        <div className="relative flex min-h-48 items-center overflow-hidden bg-[#E9572B] p-7 text-white">
          <div className="relative z-10 max-w-[60%]">
            <h3 className="text-xl font-bold">
              Become an instructor
            </h3>

            <p className="mt-2 text-xs leading-5 text-white/80">
              Instructors from around the world teach millions of
              students on E-Tutor.
            </p>

            <button className="mt-4 bg-white px-4 py-2 text-xs font-semibold text-[#E9572B]">
              Start Teaching
              <ArrowRight className="ml-1 inline h-3 w-3" />
            </button>
          </div>

          <GraduationCap className="absolute bottom-5 right-5 h-28 w-28 text-white/30" />
        </div>

        <div className="bg-white p-7">
          <h3 className="text-xl font-bold text-gray-800">
            Your teaching & earning steps
          </h3>

          <div className="mt-7 grid grid-cols-2 gap-5">
            {steps.map((step, index) => (
              <div key={step} className="flex items-start gap-2">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    index === 3
                      ? "bg-green-100 text-green-600"
                      : "bg-orange-100 text-[#FF6636]"
                  }`}
                >
                  {index + 1}
                </span>

                <p className="text-xs leading-5 text-gray-600">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
