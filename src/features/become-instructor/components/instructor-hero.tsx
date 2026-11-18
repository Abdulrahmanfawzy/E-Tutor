import Image from "next/image";
import hero from "@/assets/instructor/Image.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { containerClass } from "../data/instructor.data";

export function InstructorHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className={`${containerClass} grid min-h-155 items-center gap-12 py-16 
        lg:grid-cols-2 lg:gap-16 lg:py-20`}
      >
        <div className="relative z-10 max-w-142.5">
          <h1
            className="text-4xl font-semibold leading-[1.12] tracking-tight 
                  text-gray-900 sm:text-5xl lg:text-heading-4"
          >
            Become an Instructor
          </h1>

          <p className="mt-6 max-w-127.5 text-base leading-8 text-gray-600 sm:text-lg">
            Turn your knowledge and experience into meaningful learning
            experiences. Teach what you love, inspire learners, and grow with
            Eduguard.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Button
              render={<Link href="/create-instructor" />}
              variant="primary"
              size="lg"
              className="h-14 rounded-lg px-7"
            >
              Get Started
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-130">
          <div className="relative min-h-107.5 sm:min-h-125">
            <div
              className="absolute right-4 top-4 h-97.5 w-[78%] overflow-hidden 
            sm:right-8 sm:h-112.5"
            >
              <Image
                src={hero}
                alt="Instructor ready to share her knowledge"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 450px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}