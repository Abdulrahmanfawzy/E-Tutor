"use client";

import Image from "next/image";
import { useState } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

import { testimonials, collage, containerClass } from "../data/instructor.data";

export function InstructorRules() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="instructor-rules" className="bg-background py-20 sm:py-24">
      <div
        className={`${containerClass} grid items-center gap-14 lg:grid-cols-[536px_1fr] 
        lg:gap-34`}
      >
        {/* Left: copy + testimonial */}
        <div className="max-w-134">
          <h2 className="text-3xl font-semibold leading-[1.2] tracking-tight text-gray-900 
          sm:text-[40px]">
            20k+ Instructor created their success story with eduguard
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-700">
            Nunc euismod sapien non felis eleifend porttitor. Maecenas dictum
            eros justo, id commodo ante laoreet nec. Phasellus aliquet, orci id
            pellentesque mollis.
          </p>

          <div className="mt-8 bg-orange-50 p-8">
            <Quote
              className="size-10 text-orange-400"
              strokeWidth={1.5}
              aria-hidden
            />

            <p className="mt-6 text-base leading-6.5 text-gray-900">
              {testimonials[index].quote}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex size-12 items-center justify-center bg-gray-50 text-gray-900 transition hover:bg-gray-200"
            >
              <ArrowLeft className="size-5" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex size-12 items-center justify-center bg-orange-400 text-white shadow-[0_12px_24px_rgba(255,102,54,0.3)] transition hover:bg-orange-500"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Right: masonry-style photo collage */}
        <div className="relative mx-auto aspect-760/984 w-full max-w-190">
          {collage.map((img, index) => (
            <div
              key={index}
              className="absolute overflow-hidden"
              style={{
                left: `${img.left}%`,
                top: `${img.top}%`,
                width: `${img.w}%`,
                height: `${img.h}%`,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 424px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
