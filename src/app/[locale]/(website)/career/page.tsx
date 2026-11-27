import { getCareers } from "./api"; 
import type { Section } from "./types"; 
import CareerHero from "@/components/career/carear-hero";
import WhyJoinUs from "@/components/career/join-us";
import PerksBenefits from "@/components/career/perks-card";
import Gallery from "@/components/career/gallery";
import Companies from "@/components/career/companies";
import OpenPositions from "@/components/career/open-positions";
import { StatsSection } from "@/features/home/components/stats-section";

function findSection<T extends Section["type"]>(sections: Section[], type: T) {
  return sections.find((s) => s.type === type) as Extract<Section, { type: T }> | undefined;
}

export default async function CareerPage() {
  const { page, positions } = await getCareers();

  const hero = findSection(page.content, "hero");
  const whyJoin = findSection(page.content, "why_join");
  const perks = findSection(page.content, "perks");
  const gallery = findSection(page.content, "gallery");
  const positionsSection = findSection(page.content, "positions");

  return (
    <main className="bg-gray-50">
      <div className="py-6 text-center">
        <h1 className="text-lg font-semibold text-gray-900">{page.title}</h1>
        <p className="text-label-sm text-gray-600">
          Home / <span className="text-gray-900">{page.title}</span>
        </p>
      </div>

      <CareerHero data={hero} />
      <WhyJoinUs data={whyJoin} />
      <PerksBenefits data={perks} />
      <Gallery data={gallery} />
      <Companies />
      <OpenPositions title={positionsSection?.title} positions={positions} />
      <StatsSection />
    </main>
  );
}