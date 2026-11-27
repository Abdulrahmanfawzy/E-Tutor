
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function InstructorPromoSection() {
  const steps = [
    "Apply to become instructor",
    "Build & edit your profile",
    "Create your new course",
    "Start teaching & earning",
  ];

  return (
   <section className="bg-[#F5F7FA] py-12">
  <div className="mx-auto grid w-full max-w-6xl gap-4 px-6 md:grid-cols-2">

        {/* Become an Instructor */}
        <div className="relative flex min-h-[190px] overflow-hidden bg-[#FF6636]">
          <div className="relative z-10 w-[58%] p-5 text-white">
            <h2 className="text-xl font-bold">
              Become an instructor
            </h2>

            <p className="mt-2 text-xs leading-5 text-white/90">
              Instructors from around the world teach millions
              of students on E-tutor. We provide the tools
              and skills to teach what you love.
            </p>

            <button className="mt-4 inline-flex items-center gap-2 bg-white px-3 py-2 text-xs font-semibold text-[#FF6636] transition hover:bg-orange-50">
              Start Teaching
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="absolute bottom-0 right-0 h-full w-[48%]">
            <Image
              src="/images/instructor-promo.png"
              alt="Become an instructor"
              fill
              sizes="(max-width: 768px) 48vw, 240px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Teaching Steps */}
        <div className="bg-white p-5">
          <h2 className="text-lg font-bold text-gray-900">
            Your teaching & earning steps
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    index === 0
                      ? "bg-indigo-100 text-indigo-500"
                      : index === 1
                        ? "bg-orange-100 text-orange-500"
                        : index === 2
                          ? "bg-rose-100 text-rose-500"
                          : "bg-green-100 text-green-600"
                  }`}
                >
                  {index + 1}
                </span>

                <p className="text-[11px] leading-4 text-gray-700">
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
