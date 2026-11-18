import Image from "next/image";
import WhySection from "@/assets/instructor/Image (1).png";

import { instructorBenefits, containerClass } from "../data/instructor.data";
import {
  Users,
  BookOpen,
  ChartNoAxesCombined,
  CircleCheck,
} from "lucide-react";

export function InstructorBenefits() {
  const icons = {
    users: Users,
    book: BookOpen,
    chart: ChartNoAxesCombined,
  };

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div
        className={`${containerClass} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}
      >
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl  p-3 sm:p-5">
            <div className="relative aspect-[1.12/1] overflow-hidden rounded-xl bg-white">
              <Image
                src={WhySection}
                alt="Preview of an online learning platform"
                fill
                sizes="(max-width: 768px) 90vw, 550px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2
            className="mt-4 max-w-132.5 text-3xl font-semibold leading-tight tracking-tight
           text-gray-900 sm:text-4xl"
          >
            Why you’ll start teaching on Eduguard
          </h2>

          <p className="mt-5 max-w-130 leading-7 text-gray-600">
            We give instructors the opportunity to share their expertise,
            connect with learners, and create an impact through education.
          </p>

          <div className="mt-9 space-y-7">
            {instructorBenefits.map((benefit) => {

              return (
                <div key={benefit.title} className="flex gap-4">
                  <CircleCheck
                    className="size-10 text-white border-none"
                    fill="#23BD33"
                  />

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}