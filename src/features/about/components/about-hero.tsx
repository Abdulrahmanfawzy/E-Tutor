
import Image from "next/image";
import type { AboutHeroData } from "../types/about.types";

interface AboutHeroProps {
  data: AboutHeroData;
}

export function AboutHero({ data }: AboutHeroProps) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-16">
        {/* Content */}
        <div className="max-w-lg">
          <span className="mb-1 block text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
            {data.foundedYear}
          </span>

          <h1 className="text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
            {data.title}
          </h1>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            {data.description}
          </p>
        </div>

        {/* Single Image */}
        <div className="relative h-[280px] w-full md:h-[340px]">
          <Image
            src={data.image}
            alt="About E-tutor"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
