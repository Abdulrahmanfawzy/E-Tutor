"use client";

import { GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";

export default function Navbar() {
  const t = useTranslations("auth.nav");
  const pathname = usePathname();
  const isRegisterPage = pathname === "/register";
  const target = isRegisterPage ? "/login" : "/register";

  return (
    <header className="w-full bg-white shadow-sm">
      <nav
        aria-label={t("mainNavigation")}
        className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <GraduationCap
            className="size-9 text-[#FF6636]"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <span className="text-2xl font-semibold tracking-tight text-[#1D2026]">
            E-tutor
          </span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-5">
          <span className="hidden text-sm text-[#4E5566] sm:inline">
            {isRegisterPage
              ? t("alreadyHaveAccount")
              : t("dontHaveAccount")}
          </span>
          <Link
            href={target}
            className="inline-flex h-12 items-center justify-center rounded-none bg-[#FFEEE8] px-6 text-sm font-semibold text-[#FF6636] shadow-none transition-colors hover:bg-[#FF6636] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6636]/40"
          >
            {isRegisterPage ? t("signIn") : t("createAccount")}
          </Link>
        </div>
      </nav>
    </header>
  );
}
