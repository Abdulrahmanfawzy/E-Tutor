"use client";

import { Play } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

interface CoursePreviewProps {
    image: string | StaticImageData;
    videoUrl?: string;
}

export function CoursePreview({
    image,
    videoUrl,
}: CoursePreviewProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
            {isPlaying && videoUrl ? (
                <iframe
                    src={videoUrl}
                    title="Course preview"
                    className="absolute inset-0 size-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            ) : (
                <>
                    <Image
                        src={image}
                        alt="Course preview"
                        fill
                        unoptimized
                        className="object-cover"
                        fetchPriority="high"
                    />

                    <button
                        type="button"
                        onClick={() => {
                            if (videoUrl) {
                                setIsPlaying(true);
                            }
                        }}
                        disabled={!videoUrl}
                        aria-label="Play course preview"
                        className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110 disabled:cursor-default"
                    >
                        <Play
                            className="ml-1 size-5 fill-orange-500 text-orange-500"
                        />
                    </button>
                </>
            )}
        </div>
    );
}