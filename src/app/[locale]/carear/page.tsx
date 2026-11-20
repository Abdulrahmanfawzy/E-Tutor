import CareerHero from "@/components/carear/carear-hero";
import Companies from "@/components/carear/companies";
import Gallery from "@/components/carear/gallery";
import WhyJoinUs from "@/components/carear/join-us";
import OpenPositions from "@/components/carear/open-positions";
import PerksBenefits from "@/components/carear/perks-card";
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