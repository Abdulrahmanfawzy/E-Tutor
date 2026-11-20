import type { StaticImageData } from "next/image";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { type LucideIcon } from "lucide-react";
export type InfoSectionSize = "sm" | "default" | "lg";

export interface InstructorStat {
  icons: LucideIcon;
  color: string;
  value: string;
  label: string;
}

export interface InstructorBenefit {
  title: string;
  description: string;
  icon: "users" | "book" | "chart";
}

export interface InstructorStep {
  icon: LucideIcon;
  color: string;
  backgroundColor: string;
  title: string;
  description: string;
}

export interface InstructorRule {
  title: string;
  description: string;
}

export interface InstructorTestimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export interface InfoSectionProps {
  title: string;
  description: string;
  descriptionClassName?: string;
  bullets?: string[];
  image: {
    src: StaticImageData;
    alt: string;
  };
  reverse?: boolean;
  className?: string;
  flipImage?: boolean;
  button?: {
    label: string;
    props?: Omit<ComponentProps<typeof Button>, "children">;
  };
  size?: InfoSectionSize;
}
