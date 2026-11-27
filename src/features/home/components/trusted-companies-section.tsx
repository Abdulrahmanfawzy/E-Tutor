
import Image from "next/image";

const companies = [
  { name: "Netflix", image: "/images/companies/netflix.png" },
  { name: "YouTube", image: "/images/companies/youtube.png" },
  { name: "Google", image: "/images/companies/google.png" },
  { name: "Lenovo", image: "/images/companies/lenovo.png" },
  { name: "Slack", image: "/images/companies/slack.png" },
  { name: "Verizon", image: "/images/companies/verizon.png" },
  { name: "Lexmark", image: "/images/companies/lexmark.png" },
  { name: "Microsoft", image: "/images/companies/microsoft.png" },
];

export function TrustedCompaniesSection() {
  return (
   <section className="bg-white py-12">
  <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-6 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            6.3k trusted companies
          </h2>

          <p className="mt-3 text-xs leading-5 text-gray-400">
            Our platform is trusted by companies and learners
            around the world.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:col-span-2 md:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex h-20 items-center justify-center bg-white p-3 shadow-sm"
            >
              <div className="relative h-[60px] w-[60px]">
                <Image
                  src={company.image}
                  alt={`${company.name} logo`}
                  fill
                  sizes="60px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
