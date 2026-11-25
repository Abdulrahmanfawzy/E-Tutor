import { AboutCard } from "@/features/instructor-profile/components/about-card";
import { CourseList } from "@/features/instructor-profile/components/course-list";
import { InstructorHeader } from "@/features/instructor-profile/components/instructor-header";
import { ProfileTabs } from "@/features/instructor-profile/components/profile-tabs";
import { ReviewsSection } from "@/features/instructor-profile/components/review-section";
import { instructor } from "@/features/instructor-profile/constants/instructor";
import { ratingFilterOptions, reviews } from "@/features/instructor-profile/constants/reviews";

export default function InstructorPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="h-24 bg-orange-50" aria-hidden />

      <div className="mx-auto -mt-14 max-w-7xl space-y-6 px-4 pb-16">
        <InstructorHeader instructor={instructor} />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <aside>
            <AboutCard paragraphs={instructor.bio} />
          </aside>

          <ProfileTabs
            courses={
              <div className="space-y-12"> 
                <CourseList
                  instructorName={instructor.name}
                  courses={instructor.courses}
                />
 <ReviewsSection reviews={reviews} filterOptions={ratingFilterOptions} />
              </div>
              
            }
            
            reviews={
              <p className="py-10 text-center text-sm text-slate-500">
                No reviews to show yet.
              </p>
            }
          />

        </div>
      </div>
    </main>
  );
}
