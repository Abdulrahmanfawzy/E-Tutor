"use client";

import { useAbout } from "../hooks/use-about";

import { AboutHero } from "./about-hero";
import { TrustedCompaniesSection } from "./trusted-companies-section";
import { StatsSection } from "./stats-section";
import { MissionSection } from "./mission-section";
import { GallerySection } from "./gallery-section";
import { TestimonialsSection } from "./testimonials-section";

export default function AboutPage() {
  const { data, isLoading, isError, refetch } = useAbout();

  if (isLoading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-white">
        <div className="h-9 w-9 animate-spin rounded-full border-4 border-gray-200 border-t-orange-400" />
      </main>
    );
  }

  if (isError || !data) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-white px-5">
        <p className="text-gray-600">
          Something went wrong while loading the page.
        </p>

        <button
          onClick={() => refetch()}
          className="bg-orange-400 px-5 py-2.5 text-sm text-white transition-colors hover:bg-orange-500"
        >
          Try Again
        </button>
      </main>
    );
  }

  return (
    <main className="w-full flex-1 bg-white">
      <AboutHero data={data.hero} />

      <TrustedCompaniesSection
        companies={data.companies}
        title={data.companiesTitle}
        description={data.companiesDescription}
      />

      <StatsSection stats={data.stats} />

      <MissionSection data={data.mission} />

      <GallerySection data={data.gallery} />

      <TestimonialsSection testimonials={data.testimonials} />
    </main>
  );
}