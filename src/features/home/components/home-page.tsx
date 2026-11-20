
import { HeroSection } from "./hero-section";
import { CategoriesSection } from "./categories-section";
import { BestSellingSection } from "./best-selling-section";
import { FeaturedCoursesSection } from "./featured-courses-section";
import { RecentlyAddedSection } from "./recently-added-section";
import { InstructorPromoSection } from "./instructor-promo-section";
import { InstructorsSection } from "./instructors-section";
import { TrustedCompaniesSection } from "./trusted-companies-section";
import { StatsSection } from "./stats-section";
import { courses } from "../data/home.mock";

export default function HomePage() {
  return (
    <main className="w-full flex-1 bg-white">
      <HeroSection />
      <CategoriesSection />
      <BestSellingSection />
      <FeaturedCoursesSection courses={courses} />
      <RecentlyAddedSection />
      <InstructorPromoSection />
      <InstructorsSection />
      <TrustedCompaniesSection />
      <StatsSection />
    </main>
  );
}
