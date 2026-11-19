import { notFound } from "next/navigation";
import * as rootParams from "next/root-params";
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";

import arMessages from "../../messages/ar.json";
import enMessages from "../../messages/en.json";
import { routing } from "./routing";

const messages = {
  en: enMessages,
  ar: arMessages,
};

export default getRequestConfig(async ({ locale }) => {
  // `locale` can be provided explicitly by awaitable next-intl APIs.
  // Otherwise, read the locale from the root `[locale]` route segment.
  if (!locale) {
    const segmentLocale = await rootParams.locale();

    if (!hasLocale(routing.locales, segmentLocale)) {
      notFound();
    }

    locale = segmentLocale;
  }

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return {
    locale,
    messages: messages[locale],
  };
});
