import { CourseContents } from "@/features/watch-course/components/course-constants";
import { CommentsSection } from "@/features/watch-course/components/comments";
import { LectureMetaBar } from "@/features/watch-course/components/Lecture-Meta";
import { LectureTabs } from "@/features/watch-course/components/Lecture-tabs";
import { PlayerTopBar } from "@/features/watch-course/components/player-top-bar";
import { VideoPlayer } from "@/features/watch-course/components/video-player";
import { comments, commentsTotal } from "@/features/watch-course/constants/Comments";
import { courseOverview, playback, sections } from "@/features/watch-course/constants/course-player";
import { lectureDetails } from "@/features/watch-course/constants/Lecture-details";

export default function CoursePlayerPage() {
  return (
    <main className="min-h-screen bg-white app-container">
      <PlayerTopBar course={courseOverview} />

      <div className="mx-auto grid gap-8 p-4 lg:grid-cols-[1fr_340px] lg:py-6">
        <section className="min-w-0 space-y-4">
          <VideoPlayer playback={playback} />
          <h2 className="text-xl font-semibold text-slate-900">{playback.lectureTitle}</h2>

          <LectureMetaBar
            watchersCount={lectureDetails.watchersCount}
            watcherAvatars={lectureDetails.watcherAvatars}
            lastUpdated={lectureDetails.lastUpdated}
            commentsCount={lectureDetails.commentsCount}
          />
          <LectureTabs
            details={lectureDetails}
            comments={<CommentsSection comments={comments} totalCount={commentsTotal} />}
          />
        </section>

        <CourseContents sections={sections} completedPercent={courseOverview.completedPercent} />
      </div>
    </main>
  );
}
