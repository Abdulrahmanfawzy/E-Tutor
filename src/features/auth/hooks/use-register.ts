"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import { useRouter } from "@/i18n/navigation";
import type { RegisterFormValues } from "@/features/auth/schema/Vaildations";
import type { RegisterApiResult } from "@/features/auth/types/register-api";

export function useRegister() {
  const router = useRouter();
  const t = useTranslations("auth.register");
  const [isPending, setIsPending] = useState(false);

  const register = useCallback(
    async (values: RegisterFormValues) => {
      setIsPending(true);

      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(values),
        });
        const result = (await response.json().catch(() => null)) as
          | RegisterApiResult
          | null;

        if (!response.ok || !result?.success) {
          toast.error(result?.message || t("registerError"));
          return;
        }

        toast.success(t("registerSuccess"));
        router.replace("/login");
      } catch (error) {
        console.error("[auth] Registration request failed:", error);
        toast.error(t("registerError"));
      } finally {
        setIsPending(false);
      }
    },
    [router, t],
  );

  return { register, isPending };
}
