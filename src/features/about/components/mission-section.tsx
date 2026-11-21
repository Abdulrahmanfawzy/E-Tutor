
import Image from "next/image";
import type { MissionData } from "../types/about.types";

interface MissionSectionProps {
  data: MissionData;
}

export function MissionSection({ data }: MissionSectionProps) {
  return (
    <section className="overflow-hidden bg-[#FFF0EB]">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 pt-10 md:grid-cols-2 md:gap-16 md:pt-0">
        {/* Mission Image */}
        <div className="relative mx-auto h-[260px] w-full max-w-md md:h-[340px]">
          <Image
            src={data.image}
            alt="Our team working together"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="scale-x-[-1] object-contain object-bottom drop-shadow-[15px_0_6px_rgba(0,0,0,0.18)]"
          />
        </div>

        {/* Mission Content */}
        <div className="py-8 md:py-14">
          <span className="text-xs font-medium text-[#FF6636]">
            {data.eyebrow}
          </span>

          <h2 className="mt-2 max-w-lg text-2xl font-semibold leading-snug text-[#1D2026] md:text-3xl">
            {data.title}
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#6E7485]">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}
