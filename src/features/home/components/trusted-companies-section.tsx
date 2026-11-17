
export function TrustedCompaniesSection() {
  const companies = [
    "NETFLIX",
    "▶ YouTube",
    "Google",
    "Lenovo",
    "slack",
    "verizon",
    "Lexmark",
    "Microsoft",
  ];

  return (
    <section className="bg-white px-5 py-12">
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-3">
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
              key={company}
              className="flex h-16 items-center justify-center bg-white text-sm font-bold text-gray-600 shadow-sm"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
