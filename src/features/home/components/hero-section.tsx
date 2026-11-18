
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-[#F8F9FA]">
      <div className="mx-auto grid max-w-6xl items-center md:min-h-[370px] md:grid-cols-2">
        <div className="px-6 py-14 md:py-16">
          <h1 className="max-w-lg text-4xl font-bold leading-tight text-[#20242C] md:text-5xl">
            Learn with expert
            <br />
            anytime anywhere
          </h1>

          <p className="mt-5 max-w-md text-sm leading-6 text-gray-500">
            Our mission is to help people to find the best course
            online and learn with expert anytime, anywhere.
          </p>

          <button className="mt-7 bg-[#FF6636] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#e95327]">
            Create Account
          </button>
        </div>

<div className="relative h-[280px] overflow-hidden md:h-full w-full md:w-[49.5vw] [clip-path:polygon(7%_0,100%_0,100%_100%,0_100%)]">
      <Image
            src="/images/hero-students.png"
            alt="Students learning together"
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
