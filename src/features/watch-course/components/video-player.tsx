
"use client";

import ReactPlayer from "react-player";
import type { PlaybackState } from "../types/course-types";

interface VideoPlayerProps {
  playback: Pick<PlaybackState, "lectureTitle" | "posterUrl" | "videoUrl">;
}

export function VideoPlayer({ playback }: VideoPlayerProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
      {playback.videoUrl ? (
        <ReactPlayer
          src={playback.videoUrl}
          title={playback.lectureTitle}
          poster={playback.posterUrl}
          controls
          playsInline
          preload="metadata"
          width="100%"
          height="100%"
          className="absolute inset-0"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
          role="status"
          aria-label={`${playback.lectureTitle}: video unavailable`}
          style={{
            backgroundImage: playback.posterUrl
              ? `linear-gradient(rgb(0 0 0 / 35%), rgb(0 0 0 / 55%)), url("${playback.posterUrl}")`
              : undefined,
          }}
        >
          <p className="px-4 text-center text-sm text-white">
            Video unavailable
          </p>
        </div>
      )}
    </div>
  );
}
