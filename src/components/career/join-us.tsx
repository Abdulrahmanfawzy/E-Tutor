import Image from "next/image";
import { Check } from "lucide-react";
import type { WhyJoinSection } from "@/app/[locale]/(website)/career/types"; 

export default function WhyJoinUs({ data }: { data?: WhyJoinSection }) {
  return (
    <section className="container grid items-center gap-12 py-20 px-20 md:grid-cols-2">
      <div className="relative h-80 w-full max-w-lg">
        <Image src="/public/Union.svg" alt="Our team" fill className="object-contain" />
      </div>
      <div>
        <h2 className="text-heading-6 text-gray-900">{data?.title}</h2>
        <p className="mt-4 text-sm text-gray-600">{data?.body}</p>
        <div className="mt-6 space-y-4">
          {data?.items.map((item) => (
            <div key={item} className="flex gap-3 bg-white p-4 shadow-sm">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-400 text-white">
                <Check size={12} />
              </span>
              <p className="text-sm text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}