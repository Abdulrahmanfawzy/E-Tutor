import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { positions } from "@/components/carear/positions";

export default function OpenPositions() {
  return (
    <section className="bg-gray-50 pb-20 pt-16">
      <div className="container">
        <h2 className="text-center text-heading-6 text-gray-900">
          Our all open positions ({String(positions.length).padStart(2, "0")})
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {positions.map((p) => (
            <Link
              key={p.id}
              href={`/career/${p.id}`}
              className="group block bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-5">
                <h3 className="text-sm font-semibold text-gray-900">{p.title}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-purple-400" />
                    {p.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} className="text-green-400" />
                    {p.type}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={12} className="text-amber-400" />
                    {p.vacancy}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3">
                <p className="text-xs text-gray-600">
                  <span className="font-medium text-red-400">Deadline:</span> {p.deadline}
                </p>
                <span className="flex h-8 w-8 items-center justify-center bg-button-primary-soft text-button-primary-soft-foreground transition-colors group-hover:bg-button-primary group-hover:text-white">
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}