import { Quote } from "lucide-react";
import type { Testimonial } from "../types/about.types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="flex flex-col">
            <div className="relative flex-1 bg-gray-50 px-6 py-7">
              <Quote
                size={22}
                fill="currentColor"
                className="rotate-180 text-orange-400"
              />

              <p className="mt-3 text-center text-sm leading-6 text-gray-700">
                {testimonial.content}
              </p>

              <Quote
                size={22}
                fill="currentColor"
                className="ml-auto mt-3 text-orange-400"
              />
            </div>

            <div className="pt-5 text-center">
              <h3 className="text-sm font-semibold text-gray-900">
                {testimonial.author}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                {testimonial.role}{" "}
                <span className="text-purple-400">
                  {testimonial.company}
                </span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}