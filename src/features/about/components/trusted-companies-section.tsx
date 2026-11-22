import Image from "next/image";
import type { Company } from "../types/about.types";

interface TrustedCompaniesSectionProps {
  companies: Company[];
  title: string;
  description: string;
}

export function TrustedCompaniesSection({
  companies,
  title,
  description,
}: TrustedCompaniesSectionProps) {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[0.8fr_1.5fr]">
        <div>
          <h2 className="text-xl font-semibold leading-snug text-gray-900">
            {title}
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex h-20 items-center justify-center bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={80}
                height={160}
                className=" object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}