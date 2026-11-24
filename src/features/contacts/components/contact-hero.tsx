
import Image from "next/image";
import { Mail } from "lucide-react";
import type { ContactHeroData } from "../types/contacts.types";

interface ContactHeroProps {
  data: ContactHeroData;
}

export function ContactHero({ data }: ContactHeroProps) {
  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(data.email);
  };

  return (
    <section className="border-b border-orange-100 bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 pt-10 md:grid-cols-2 md:gap-16 md:pt-6">
        <div className="max-w-md py-8">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            {data.title}
          </h1>

          <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">
            {data.description}
          </p>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="mt-5 inline-flex items-center gap-2 bg-orange-400 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-orange-500"
          >
            <Mail size={15} />
            Copy Email
          </button>
        </div>

        <div className="relative mx-auto h-[280px] w-full max-w-md md:h-[340px]">
          <Image
            src={data.image}
            alt="Customer support representative"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-bottom  drop-shadow-[12px_18px_12px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}
