import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { InfoSectionProps } from "../types/instructor.types";
import { MoveRight } from "lucide-react";

const sizeStyles = {
 
  sm: "[--height-scale:0.5]",
  default: "[--height-scale:1]",
  lg: "[--height-scale:1.15]",
} as const;

export function InfoSection({
  title,
  description,
  descriptionClassName,
  bullets = [],
  image,
  reverse = false,
  flipImage = false,
  className = "",
  button,
  size = "default",
}: InfoSectionProps) {
  return (
    <section
      className={cn("container bg-background", sizeStyles[size], className)}
    >
      <div
        className={cn(
          "mx-auto flex max-w-330 flex-col items-center",
          "gap-12 px-6",
          "py-[calc(4rem*var(--height-scale))]",
          "lg:gap-24",
          "lg:py-[calc(5rem*var(--height-scale))]",
          "lg:px-37",
          reverse ? "lg:flex-row-reverse" : "lg:flex-row",
        )}
      >
        {/* Content */}
        <div className="w-full lg:max-w-132.5 lg:flex-1">
          <h2
            className={cn(
              "mb-6 text-heading-6 lg:text-heading-5 text-gray-900",
              descriptionClassName,
            )}
          >
            {title}
          </h2>

          <p className="mb-8 text-gray-600 text-sm lg:text-[18px] ">{description}</p>

          {/* Optional Button */}
          {button && (
            <div className="mt-4">
              <Button {...button.props}>{button.label}</Button>
            </div>
          )}

          {/* Optional Bullets */}
          {bullets.length > 0 && (
            <ul
              className={cn(
                "mt-4",
                "text-xs lg:text-sm",
                "space-y-2",
                "leading-relaxed",
                "text-gray-900",
              )}
            >
              {bullets.map((item) => (
                <li key={item} className="flex gap-x-1">
                  <MoveRight className="text-orange-400" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Image with white overlay sections */}
        <div
          className={cn(
            "relative w-full max-w-162 flex-1 overflow-hidden lg:flex-none",
            "h-[calc(648px*var(--height-scale))]",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 648px, 100vw"
            className={cn("object-cover", flipImage && "-scale-x-100")}
          />

          {/* Vertical white gap */}
          <div
            aria-hidden
            className={cn(
              "absolute top-0 h-full w-[3.7%] bg-background",
              reverse ? "right-[30.86%]" : "left-[30.86%]",
            )}
          />

          {/* Top white block */}
          <div
            aria-hidden
            className={cn(
              "absolute top-0 h-[27.3%] w-[30.86%] bg-background",
              reverse ? "right-0" : "left-0",
            )}
          />
        </div>
      </div>
    </section>
  );
}
