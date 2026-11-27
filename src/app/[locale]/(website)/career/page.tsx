import CareerHero from "@/components/career/carear-hero";
import Companies from "@/components/career/companies";
import Gallery from "@/components/career/gallery";
import WhyJoinUs from "@/components/career/join-us";
import OpenPositions from "@/components/career/open-positions";
import PerksBenefits from "@/components/career/perks-card";
import Navbar from "@/components/layout/nav-bar";
import { StatsSection } from "@/features/home/components/stats-section";

export default function CareerPage() {
  return (
    <main className="bg-gray-50">
         <Navbar/>
      <div className="py-6 text-center">
        <h1 className="text-lg font-semibold text-gray-900">Career</h1>
        <p className="text-label-sm text-gray-600">
          Home / <span className="text-gray-900">Career</span>
        </p>
      </div>
   
      <CareerHero />
      <WhyJoinUs/>
      <PerksBenefits/>
      <Gallery/>
      <Companies/>
      <OpenPositions/>
      <StatsSection/>
    </main>
  );
}