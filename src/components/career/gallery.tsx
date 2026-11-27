import Image from "next/image";

const photos = [
  { src: "/images/carear/03.svg", cls: "left-[11%] top-[6%] w-[30%] h-[35%]" },  
  { src: "/images/carear/05.svg", cls: "left-[43.5%] top-0 w-[33.5%] h-[41%]" }, 
  { src: "/images/carear/02.svg", cls: "left-[79.5%] top-[12%] w-[13%] h-[29%]" },
  { src: "/images/carear/01.svg", cls: "left-0 top-[44%] w-[24.5%] h-[47%]" },    
  { src: "/images/carear/04.svg", cls: "left-[27%] top-[44%] w-[45%] h-[56%]" },  
  { src: "/images/carear/07.svg", cls: "left-[74.5%] top-[44%] w-[25.5%] h-[29%]" },
  { src: "/images/carear/06.svg", cls: "left-[74.5%] top-[77%] w-[13.5%] h-[23%]" },
];

export default function Gallery() {
  return (
    <div className="bg-white"> 
    <section className="container grid items-center gap-10 py-20  px-20 md:grid-cols-[1fr_2fr]">
      <div className="max-w-xs">
        <p className="text-label-sm uppercase text-orange-400">Our Gallery</p>
        <h2 className="mt-2 text-heading-6 text-gray-900">
          We&apos;ve been here almost 17 years
        </h2>
        <p className="mt-4 text-sm text-gray-600">
          Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus
          venenatis imperdiet. Sed sed lacus dui. Curabitur in urna ligula.
        </p>
      </div>

      <div className="relative aspect-[386/234] w-full">
        {photos.map((p) => (
          <div key={p.src} className={`absolute overflow-hidden ${p.cls}`}>
            <Image src={p.src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}