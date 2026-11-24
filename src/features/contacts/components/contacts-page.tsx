"use client";

import { useContacts } from "../hooks/use-contacts";
import { ContactHero } from "./contact-hero";
import { BranchesSection } from "./branches-section";
import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";
import { ContactMap } from "./contact-map";

export function ContactsPage() {
  const { data, isLoading, isError } = useContacts();

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-sm text-gray-500">Loading contacts...</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-sm text-red-500">
          Something went wrong while loading the page.
        </p>
      </div>
    );
  }

  return (
    <main>
      <ContactHero data={data.hero} />

      <BranchesSection
        title={data.branchesTitle}
        description={data.branchesDescription}
        branches={data.branches}
      />

      <section className="bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-900 md:text-3xl">
            Contact Us
          </h2>

          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
            <ContactInfo data={data.contactInfo} />
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactMap location={data.mapLocation} />
    </main>
  );
}
