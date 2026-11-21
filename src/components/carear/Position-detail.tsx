import Link from "next/link";
import { ArrowRight, Check, MapPin, Clock, Briefcase } from "lucide-react";
import type { Position } from "./positions";

function ApplyButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#"
      className={`inline-flex items-center gap-2 bg-button-primary px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 ${className}`}
    >
      Apply Now <ArrowRight size={16} />
    </Link>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 first:mt-0">
      <h2 className="text-base font-medium text-gray-900">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default function PositionDetails({ position }: { position: Position }) {
  return (
    <main className="bg-white">
      {/* TOP BAR */}
      <header className="border-b border-gray-100 bg-white">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-lg font-semibold">
            E-tutor
          </Link>
          <Link
            href="/career"
            className="bg-button-primary-soft px-4 py-2 text-xs font-medium text-button-primary-soft-foreground"
          >
            Back To Homepage
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gray-50 py-12">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-600">
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-purple-400" />
                {position.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} className="text-green-400" />
                {position.type}
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase size={12} className="text-amber-400" />
                {position.vacancy}
              </span>
            </div>

            <h1 className="mt-2 text-2xl font-semibold text-gray-900 md:text-3xl">
              {position.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-x-16 gap-y-6">
              <div>
                <p className="text-xs font-medium uppercase text-orange-500">
                  Address
                </p>
                <p className="mt-1 max-w-[200px] text-sm text-gray-700">
                  {position.address}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase text-orange-500">
                  Contact
                </p>
                <p className="mt-1 text-sm text-gray-700">{position.email}</p>
                <p className="text-sm text-gray-700">{position.phone}</p>
              </div>
            </div>
          </div>

          <ApplyButton className="self-start md:self-center" />
        </div>
      </section>

      {/* BODY */}
      <div className="container py-12">
        <div className="mx-auto max-w-2xl">
          <Section title="Who we are">
            <p className="text-sm leading-6 text-gray-600">{position.about}</p>
          </Section>

          <Section title="Requirements">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-gray-600 marker:text-orange-500">
              {position.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Benefits">
            <ul className="space-y-2 text-sm leading-6 text-gray-600">
              {position.benefits.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={16} className="mt-1 shrink-0 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Salary">
            <p className="text-sm text-gray-600">{position.salary}</p>
          </Section>

          <Section title="Job Nature">
            <ul className="space-y-1 text-sm text-gray-600">
              {position.jobNature.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <div className="mt-10 text-center">
            <ApplyButton />
          </div>
        </div>
      </div>
    </main>
  );
}