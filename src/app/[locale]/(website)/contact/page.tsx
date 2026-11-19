import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import ContactForm from "@/features/contact/components/contact-form";
import { routing } from "@/i18n/routing";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "contact" });

  const contactDetails = [
    { icon: Mail, label: t("info.emailLabel"), value: "hello@e-tutor.com" },
    { icon: Phone, label: t("info.phoneLabel"), value: "+20 100 123 4567" },
    { icon: MapPin, label: t("info.addressLabel"), value: t("info.address") },
    { icon: Clock, label: t("info.hoursLabel"), value: t("info.hours") },
  ];

  return (
    <main className="w-full flex-1 bg-white">
      <section className="bg-[#F8F9FA] px-5 py-16 text-center">
        <span className="inline-block bg-[#FFF0EB] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#FF6636]">
          {t("badge")}
        </span>
        <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-bold text-[#20242C] sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500">
          {t("description")}
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
        <ContactForm />

        <aside className="flex flex-col gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {t("info.title")}
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-500">
              {t("info.description")}
            </p>
          </div>

          <ul className="flex flex-col gap-5">
            {contactDetails.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#FFF0EB] text-[#FF6636]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    {label}
                  </p>
                  <p className="mt-1 text-sm text-gray-800">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="bg-[#F8F9FA] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            {t("faq.title")}
          </h2>

          <div className="mt-8 flex flex-col gap-4">
            {[1, 2, 3].map((item) => (
              <details
                key={item}
                className="group border border-gray-200 bg-white p-5"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-gray-900 marker:content-none">
                  {t(`faq.question${item}`)}
                </summary>
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {t(`faq.answer${item}`)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
