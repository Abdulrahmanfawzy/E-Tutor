const companies = [
  { name: "Netflix", src: "/images/companies/netflix.png" },
  { name: "YouTube", src: "/images/companies/youtube.png" },
  { name: "Google", src: "/images/companies/google.png" },
  { name: "Lenovo", src: "/images/companies/lenovo.png" },
  { name: "Slack", src: "/images/companies/slack.png" },
  { name: "Verizon", src: "/images/companies/verizon.png" },
  { name: "Lexmark", src: "/images/companies/lexmark.png" },
  { name: "Microsoft", src: "/images/companies/microsoft.png" },
];

export default function Companies() {
  return (
    <section className="bg-[linear-gradient(to_bottom,#ffffff_50%,var(--gray-50)_50%)]">
      <div className="container">
        <div className="grid items-center gap-8 bg-white p-8 shadow-sm md:grid-cols-[1fr_2fr] md:p-12">
          <div>
            <h2 className="text-heading-7 text-gray-900">
              We Just keep growing with 6.3k Companies
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora
              torquent.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {companies.map((c) => (
              <div
                key={c.name}
                className="flex h-24 items-center justify-center bg-white p-4 shadow-md"
              >
                <img src={c.src} alt={c.name} className="max-h-14 w-auto max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}