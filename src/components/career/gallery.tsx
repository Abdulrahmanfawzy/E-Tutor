import Image from "next/image";
import type { GallerySection } from "@/app/[locale]/(website)/career/types";

// Layout slots only (position/size)
const slots = [
  "left-[11%] top-[6%] w-[30%] h-[35%]",
  "left-[43.5%] top-0 w-[33.5%] h-[41%]",
  "left-[79.5%] top-[12%] w-[13%] h-[29%]",
  "left-0 top-[44%] w-[24.5%] h-[47%]",
  "left-[27%] top-[44%] w-[45%] h-[56%]",
  "left-[74.5%] top-[44%] w-[25.5%] h-[29%]",
  "left-[74.5%] top-[77%] w-[13.5%] h-[23%]",
];

export default function Gallery({ data }: { data?: GallerySection }) {
  const images = data?.images ?? [];

  return (
    <div className="bg-white">
      <section className="container grid items-center gap-10 py-20 px-20 md:grid-cols-[1fr_2fr]">
        <div className="max-w-xs">
          <p className="text-label-sm uppercase text-orange-400">{data?.title}</p>
          <h2 className="mt-2 text-heading-6 text-gray-900">
            We&apos;ve been here almost 17 years
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis
            tellus venenatis imperdiet. Sed sed lacus dui. Curabitur in urna ligula.
          </p>
        </div>

        {images.length > 0 && (
          <div className="relative aspect-[386/234] w-full">
            {images.slice(0, slots.length).map((src, i) => (
              <div key={src} className={`absolute overflow-hidden ${slots[i]}`}>
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}