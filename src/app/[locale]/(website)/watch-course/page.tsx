import { CourseContents } from "@/features/watch-course/components/course-constants";
import { PlayerTopBar } from "@/features/watch-course/components/player-top-bar";
import { VideoPlayer } from "@/features/watch-course/components/video-player";
import { courseOverview, playback, sections } from "@/features/watch-course/constants/course-player";


export default function CoursePlayerPage() {
    return (
        <main className="min-h-screen mx-auto app-container bg-white">
            <PlayerTopBar course={courseOverview} />

            <div className="mx-auto grid max-w-7xl gap-8 p-4 lg:grid-cols-[1fr_340px] lg:py-6">
                <section className="space-y-4">
                    <VideoPlayer playback={playback} />
                    <h2 className="text-xl font-semibold text-slate-900">{playback.lectureTitle}</h2>
                </section>

                <CourseContents sections={sections} completedPercent={courseOverview.completedPercent} />
            </div>
        </main>
    );
}