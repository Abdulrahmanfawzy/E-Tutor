"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";

/**
 * Switches between the configured locales while keeping the user on the same
 * page, including its query parameters and URL fragment.
 */
export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("common");
  const nextLocale = locale === "ar" ? "en" : "ar";

  const handleClick = () => {
    const suffix = `${window.location.search}${window.location.hash}`;

    router.replace(`${pathname}${suffix}`, { locale: nextLocale });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`${t("switchLanguage")}: ${t(
        nextLocale === "en" ? "english" : "arabic",
      )}`}
      className="inline-flex h-9 items-center gap-2 rounded-sm border border-current/20 px-3 text-xs font-semibold text-current transition-colors hover:border-[#FF6636] hover:bg-[#FFEEE8] hover:text-[#FF6636] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6636]/40"
    >
      <Globe className="size-4 text-[#FF6636]" aria-hidden="true" />
      <span>{nextLocale === "en" ? "English" : "العربية"}</span>
    </button>
  );
}
