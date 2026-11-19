import type { Metadata } from "next";

import {
  InstructorBenefits,
  InstructorHero,
  InstructorRules,
  InstructorStats,
  InstructorSteps,
  PageHeader,
  InfoSection,
} from "@/features/become-instructor/components/index";

import rule1 from "@/assets/instructor/01.png";
export const metadata: Metadata = {
  title: "Become an Instructor | Eduguard",
  description:
    "Share your knowledge, inspire learners, and become an instructor with Eduguard.",
};

export default function InstructorPage() {
  return (
    <main>
      <PageHeader />
      <InstructorHero />
      <InstructorStats />
      <InstructorBenefits />
      <InstructorSteps />
      <InfoSection
        title="Instructor rules & regulations"
        description="Sed auctor, nisl non elementum ornare..."
        bullets={["Sed ullamcorper libero...", "Nam leo tortor..."]}
        image={{
          src: rule1,
          alt: "Instructor teaching online",
        }}
      />
      <InfoSection
        reverse
        title="Instructor rules & regulations"
        description="Sed auctor, nisl non elementum ornare..."
        bullets={["Sed ullamcorper libero...", "Nam leo tortor..."]}
        image={{
          src: rule1,
          alt: "Instructor teaching online",
        }}
        className="bg-orange-50"
      />

      <InstructorRules />
      <InfoSection
        title="Instructor rules & regulations"
        description="Sed auctor, nisl non elementum ornare..."
        descriptionClassName="text-white"
        image={{
          src: rule1,
          alt: "Instructor teaching online",
        }}
        size="sm"
        className="bg-gray-900"
        button={{
          label: "Get Started",
          props: {
            variant: "primary",
          },
        }}
      />
    
    </main>
  );
}
