"use client";

import { Apple } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

const providers = [
  { name: "Google", mark: "G", markClassName: "font-semibold text-[#4285f4]" },
  { name: "Facebook", mark: "f", markClassName: "font-bold text-[#4267b2]" },
  { name: "Apple", mark: null, markClassName: "text-gray-950" },
] as const;

type SocialSignUpButtonsProps = {
  action: "signIn" | "signUp";
};

export function SocialSignUpButtons({
  action,
}: SocialSignUpButtonsProps) {
  const t = useTranslations("auth.social");
  const groupLabel =
    action === "signIn" ? t("signInGroup") : t("signUpGroup");
  const providerLabel =
    action === "signIn" ? "signInWith" : "signUpWith";

  return (
    <div
      role="group"
      aria-label={groupLabel}
      className="grid grid-cols-3 gap-2"
    >
      {providers.map((provider) => (
        <Button
          key={provider.name}
          type="button"
          variant="outline"
          aria-label={t(providerLabel, { provider: provider.name })}
          className="h-8 min-w-0 justify-center gap-2 rounded-sm border-gray-100 px-2 text-[10px] font-normal text-gray-800 shadow-none hover:bg-gray-50"
        >
          <span
            aria-hidden="true"
            className={`flex size-4 shrink-0 items-center justify-center text-[14px] ${provider.markClassName}`}
          >
            {provider.mark === null ? <Apple className="size-3.5" /> : provider.mark}
          </span>
          <span className="truncate">{provider.name}</span>
        </Button>
      ))}
    </div>
  );
}
