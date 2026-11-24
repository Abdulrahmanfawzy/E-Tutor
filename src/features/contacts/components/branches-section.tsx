
import Image from "next/image";
import type { Branch } from "../types/contacts.types";

interface BranchesSectionProps {
  title: string;
  description: string;
  branches: Branch[];
}

export function BranchesSection({
  title,
  description,
  branches,
}: BranchesSectionProps) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            {title}
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((branch) => (
            <article
              key={branch.id}
              className="group relative h-[230px] overflow-hidden bg-gray-100"
            >
              <Image
                src={branch.image}
                alt={branch.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px)  25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-12">
                <div className="bg-white px-3 py-3 text-center shadow-sm">
                  {branch.isMain && (
                    <span className="mb-1 block text-[10px] font-semibold uppercase text-orange-400">
                      Main Branch
                    </span>
                  )}

                  <h3 className="text-xs font-semibold text-gray-900">
                    {branch.name}
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-gray-500">
                    {branch.address}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
