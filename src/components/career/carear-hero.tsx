import Image from "next/image";
import type { HeroSection } from "@/app/[locale]/(website)/career/types"; 

export default function CareerHero({ data }: { data?: HeroSection }) {
  return (
    <section className="bg-white">
      <div className="container grid items-stretch gap-8 md:grid-cols-2 px-20">
        <div className="max-w-xl self-center py-10 md:ml-12">
          <h2 className="text-heading-5 text-gray-900">
            {data?.title ?? "Join the most incredible & creative team."}
          </h2>
          <p className="mt-4 text-sm text-gray-600">{data?.body}</p>
          <a
            href={data?.cta.url ?? "#positions"}
            className="mt-6 inline-block bg-button-primary px-6 py-3 text-button-sm text-button-primary-foreground transition-colors hover:bg-button-primary-hover"
          >
            {data?.cta.label ?? "View Open Positions"}
          </a>
        </div>
        <div className="flex items-end justify-center">
          <Image src={data?.image ?? "/images/carear/smile-girl.svg"} alt="Team member" width={420} height={480} priority />
        </div>
      </div>
    </section>
  );
}