"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

/**
 * Switches between the configured locales while keeping the user on the same
 * page. Rendered once from the locale layout so every route can use it.
 */
export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("common");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    const search = typeof window === "undefined" ? "" : window.location.search;

    router.replace(`${pathname}${search}`, { locale: nextLocale });
  };

  return (
    <div className="flex items-center gap-2 transition" >
      <Globe className="h-4 w-4 text-[#FF6636]" aria-hidden="true" />
      <label htmlFor="locale-switcher" className="sr-only">
        {t("switchLanguage")}
      </label>
      <select
        id="locale-switcher"
        value={locale}
        onChange={handleChange}
        aria-label={t("switchLanguage")}
        className="cursor-pointer bg-transparent text-xs font-medium text-gray-400 outline-none hover:text-white"
      >
        {routing.locales.map((availableLocale) => (
          <option key={availableLocale} value={availableLocale}>
            {availableLocale === "en" ? t("english") : t("arabic")}
          </option>
        ))}
      </select>
    </div>
  );
}
