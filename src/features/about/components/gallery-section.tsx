
import Image from "next/image";

interface GallerySectionProps {
  data: {
    eyebrow: string;
    title: string;
    description: string;
    images: string[];
    buttonText: string;
  };
}

const desktopPositions = [
  "left-[11%] top-[5.6%] h-[35.5%] w-[30%]",
  "left-[43.5%] top-0 h-[41%] w-[33.5%]",
  "left-[79.5%] top-[12.2%] h-[29%] w-[13%]",
  "left-0 top-[44.6%] h-[47%] w-[24%]",
  "left-[26.5%] top-[44.6%] h-[55%] w-[45.5%]",
  "left-[74.5%] top-[44.6%] h-[28.5%] w-[25.5%]",
  "left-[74.5%] top-[77.2%] h-[22.8%] w-[13.5%]",
];

export function GallerySection({ data }: GallerySectionProps) {
  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-12 lg:gap-8">

        {/* Text */}
        <div className="lg:col-span-4">
          <span className="mb-3 block text-sm font-medium uppercase text-[#FF6636]">
            {data.eyebrow}
          </span>

          <h2 className="mb-5 max-w-sm text-3xl font-bold leading-tight text-[#1D2026] md:text-4xl">
            {data.title}
          </h2>

          <p className="mb-7 max-w-md text-base leading-[1.6] text-[#6E7485]">
            {data.description}
          </p>

          <button
            type="button"
            className="inline-flex items-center gap-4 bg-[#FF6636] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#e9562b]"
          >
            {data.buttonText}
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-3 lg:relative lg:col-span-8 lg:block lg:h-[590px]">
          {data.images.slice(0, 7).map((image, index) => (
            <div
              key={image}
              className={`
                relative aspect-[4/3] overflow-hidden
                ${index === 4 ? "col-span-2 aspect-[1.5/1]" : ""}
                lg:absolute lg:aspect-auto
                ${desktopPositions[index]}
              `}
            >
              <Image
                src={image}
                alt={`Our gallery ${index + 1}`}
                fill
                sizes="(max-width: 1024px) 50vw, 65vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
